#!/usr/bin/env python3
"""
DeskLab Store — Show Leads Tool

Usage:
    python3 tools/show_leads.py
"""

from __future__ import annotations

import csv
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
TRACKER = ROOT / "data" / "orders_tracker.csv"


def main() -> None:
    if not TRACKER.exists():
        print(f"Tracker not found: {TRACKER}")
        return

    with TRACKER.open("r", newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))

    if not rows:
        print("No leads recorded yet.")
        return

    print("\nDeskLab Store — Leads")
    print("=====================\n")

    for row in rows:
        lead_id = row.get("lead_id", "")
        status = row.get("status", "")
        product = row.get("product_name", "")
        city = row.get("city", "")
        customer = row.get("customer_name", "")
        print(f"{lead_id:8} | {status:22} | {product:32} | {city:15} | {customer}")

    print(f"\nTotal rows: {len(rows)}")
    print(f"Tracker: {TRACKER}")


if __name__ == "__main__":
    main()
