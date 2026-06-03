#!/usr/bin/env python3
"""
DeskLab Store — Show Private Data Tool

Shows local private contacts and leads.
These files live in local_private/ and are ignored by Git.

Usage:
    python3 tools/show_private_data.py
"""

from __future__ import annotations

import csv
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PRIVATE_DIR = ROOT / "local_private"
CONTACTS = PRIVATE_DIR / "contacts_private.csv"
LEADS = PRIVATE_DIR / "leads_private.csv"


def read_csv(path: Path) -> list[dict[str, str]]:
    if not path.exists():
        return []
    with path.open("r", newline="", encoding="utf-8") as f:
        return list(csv.DictReader(f))


def main() -> None:
    contacts = read_csv(CONTACTS)
    leads = read_csv(LEADS)

    print("\nDeskLab Store — Private Local Data")
    print("==================================\n")

    print(f"Contacts: {len(contacts)}")
    for row in contacts[-10:]:
        print(f"{row.get('contact_id',''):8} | {row.get('channel',''):10} | replied={row.get('replied','')} | interest={row.get('product_interest','')}")

    print(f"\nLeads: {len(leads)}")
    for row in leads[-10:]:
        print(f"{row.get('lead_id',''):8} | {row.get('status',''):18} | {row.get('product_name','')} | {row.get('city','')}")

    print("\nPrivate folder:")
    print(PRIVATE_DIR)


if __name__ == "__main__":
    main()
