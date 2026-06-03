# DeskLab Store — Privacy-Safe Operations

## Core rule

Do not commit real customer or contact data to the public GitHub repository.

Real operational data must stay local in:

```text
local_private/
```

This folder is ignored by Git through `.gitignore`.

## Public files

The public repository may contain:

- empty templates
- example placeholders
- documentation
- product validation structure
- generic launch messages
- non-personal metrics

The public repository must not contain:

- real names
- real emails
- real phone numbers
- addresses
- payment details
- private customer notes
- supplier credentials
- private supplier deals
- order-specific personal data

## Local private files

Use these files for real operations:

```text
local_private/contacts_private.csv
local_private/leads_private.csv
```

Use these tools:

```bash
python3 tools/add_private_contact.py
python3 tools/add_private_lead.py
python3 tools/show_private_data.py
```

## Safe Git workflow

Before every commit:

```bash
git status --short
```

Check that no real private CSV is staged.

If you accidentally stage private data:

```bash
git restore --staged local_private/
git restore --staged data/*private*.csv
git restore --staged data/*real*.csv
```

## Day Zero privacy principle

You can contact real people manually, but the public repo should only show the operating system, not their personal data.
