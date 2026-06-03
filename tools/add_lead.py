#!/usr/bin/env python3
"""
DeskLab Store — Add Lead Tool

Small local utility to append a manual lead/request to data/orders_tracker.csv.

Usage:
    python3 tools/add_lead.py
"""

from __future__ import annotations

import csv
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TRACKER = ROOT / "data" / "orders_tracker.csv"

FIELDNAMES = [
    "date",
    "lead_id",
    "status",
    "customer_name",
    "customer_email",
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
    TRACKER.parent.mkdir(parents=True, exist_ok=True)
    if not TRACKER.exists():
        with TRACKER.open("w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
            writer.writeheader()


def next_lead_id() -> str:
    ensure_tracker()
    rows = []
    with TRACKER.open("r", newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        rows = list(reader)

    max_num = 0
    for row in rows:
        lead_id = (row.get("lead_id") or "").strip()
        if lead_id.startswith("DL-"):
            try:
                max_num = max(max_num, int(lead_id.split("-")[1]))
            except (IndexError, ValueError):
                continue

    return f"DL-{max_num + 1:04d}"


def ask(prompt: str, default: str = "") -> str:
    suffix = f" [{default}]" if default else ""
    value = input(f"{prompt}{suffix}: ").strip()
    return value or default


def main() -> None:
    ensure_tracker()

    print("\nDeskLab Store — Add Lead")
    print("========================\n")

    lead = {
        "date": ask("Date", date.today().isoformat()),
        "lead_id": next_lead_id(),
        "status": ask("Status", "new_request"),
        "customer_name": ask("Customer name"),
        "customer_email": ask("Customer email"),
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
        writer.writerow(lead)

    print("\nLead saved:")
    print(f"{lead['lead_id']} — {lead['product_name']} — {lead['status']}")
    print(f"\nTracker: {TRACKER}")


if __name__ == "__main__":
    main()
