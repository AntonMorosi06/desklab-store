#!/usr/bin/env python3
"""
DeskLab Store — Add Private Lead Tool

Records real product requests locally in local_private/leads_private.csv.
This file is ignored by Git and must not be pushed.

Usage:
    python3 tools/add_private_lead.py
"""

from __future__ import annotations

import csv
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PRIVATE_DIR = ROOT / "local_private"
TRACKER = PRIVATE_DIR / "leads_private.csv"

FIELDNAMES = [
    "date",
    "lead_id",
    "status",
    "customer_name",
    "customer_contact",
    "city",
    "product_id",
    "product_name",
    "quantity",
    "price_indicative",
    "final_price",
    "supplier_checked",
    "supplier_cost",
    "shipping_cost",
    "estimated_delivery",
    "payment_status",
    "order_status",
    "notes",
]


def ensure_tracker() -> None:
    PRIVATE_DIR.mkdir(parents=True, exist_ok=True)
    if not TRACKER.exists():
        with TRACKER.open("w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
            writer.writeheader()


def next_lead_id() -> str:
    ensure_tracker()
    with TRACKER.open("r", newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))

    max_num = 0
    for row in rows:
        lead_id = (row.get("lead_id") or "").strip()
        if lead_id.startswith("DL-"):
            try:
                max_num = max(max_num, int(lead_id.split("-")[1]))
            except (IndexError, ValueError):
                pass

    return f"DL-{max_num + 1:04d}"


def ask(prompt: str, default: str = "") -> str:
    suffix = f" [{default}]" if default else ""
    value = input(f"{prompt}{suffix}: ").strip()
    return value or default


def main() -> None:
    ensure_tracker()

    print("\nDeskLab Store — Add Private Lead")
    print("================================\n")
    print("This saves data locally in local_private/. It is ignored by Git.\n")

    row = {
        "date": ask("Date", date.today().isoformat()),
        "lead_id": next_lead_id(),
        "status": ask("Status", "new_request"),
        "customer_name": ask("Customer name"),
        "customer_contact": ask("Customer contact/email/handle"),
        "city": ask("City"),
        "product_id": ask("Product ID", "laptop-stand-01"),
        "product_name": ask("Product name", "Stand laptop pieghevole"),
        "quantity": ask("Quantity", "1"),
        "price_indicative": ask("Indicative price", "27.90"),
        "final_price": ask("Final price"),
        "supplier_checked": ask("Supplier checked", "not_checked"),
        "supplier_cost": ask("Supplier cost"),
        "shipping_cost": ask("Shipping cost"),
        "estimated_delivery": ask("Estimated delivery"),
        "payment_status": ask("Payment status", "not_sent"),
        "order_status": ask("Order status", "lead"),
        "notes": ask("Notes"),
    }

    with TRACKER.open("a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
        writer.writerow(row)

    print("\nLead saved locally:")
    print(f"{row['lead_id']} — {row['product_name']} — {row['status']}")
    print(f"\nPrivate tracker: {TRACKER}")


if __name__ == "__main__":
    main()
