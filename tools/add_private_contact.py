#!/usr/bin/env python3
"""
DeskLab Store — Add Private Contact Tool

Records outreach contacts locally in local_private/contacts_private.csv.
This file is ignored by Git and must not be pushed.

Usage:
    python3 tools/add_private_contact.py
"""

from __future__ import annotations

import csv
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PRIVATE_DIR = ROOT / "local_private"
TRACKER = PRIVATE_DIR / "contacts_private.csv"

FIELDNAMES = [
    "date",
    "contact_id",
    "channel",
    "person_type",
    "message_type",
    "opened_link",
    "replied",
    "feedback_quality",
    "product_interest",
    "serious_request",
    "next_action",
    "notes",
]


def ensure_tracker() -> None:
    PRIVATE_DIR.mkdir(parents=True, exist_ok=True)
    if not TRACKER.exists():
        with TRACKER.open("w", newline="", encoding="utf-8") as f:
            writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
            writer.writeheader()


def next_contact_id() -> str:
    ensure_tracker()
    with TRACKER.open("r", newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))

    max_num = 0
    for row in rows:
        contact_id = (row.get("contact_id") or "").strip()
        if contact_id.startswith("C-"):
            try:
                max_num = max(max_num, int(contact_id.split("-")[1]))
            except (IndexError, ValueError):
                pass

    return f"C-{max_num + 1:04d}"


def ask(prompt: str, default: str = "") -> str:
    suffix = f" [{default}]" if default else ""
    value = input(f"{prompt}{suffix}: ").strip()
    return value or default


def main() -> None:
    ensure_tracker()

    print("\nDeskLab Store — Add Private Contact")
    print("===================================\n")
    print("This saves data locally in local_private/. It is ignored by Git.\n")

    row = {
        "date": ask("Date", date.today().isoformat()),
        "contact_id": next_contact_id(),
        "channel": ask("Channel", "whatsapp"),
        "person_type": ask("Person type", "friend/classmate"),
        "message_type": ask("Message type", "soft_launch"),
        "opened_link": ask("Opened link", "unknown"),
        "replied": ask("Replied", "no"),
        "feedback_quality": ask("Feedback quality", "none"),
        "product_interest": ask("Product interest", "none"),
        "serious_request": ask("Serious request", "no"),
        "next_action": ask("Next action", "wait"),
        "notes": ask("Notes"),
    }

    with TRACKER.open("a", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=FIELDNAMES)
        writer.writerow(row)

    print("\nContact saved locally:")
    print(f"{row['contact_id']} — {row['channel']} — replied: {row['replied']}")
    print(f"\nPrivate tracker: {TRACKER}")


if __name__ == "__main__":
    main()
