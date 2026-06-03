# DeskLab Store — Day Zero Execution Checklist

## Goal

Start real validation today without overbuilding and without exposing private data.

## Before sending messages

- [ ] Open the live site.
- [ ] Check that the catalogue loads.
- [ ] Check that the request email opens.
- [ ] Read `docs/soft_launch_messages.md`.
- [ ] Keep `local_private/contacts_private.csv` ready.
- [ ] Keep `local_private/leads_private.csv` ready.
- [ ] Do not commit private customer/contact data.

## Contact target

Contact 10 people manually.

Recommended mix:

- 3 friends/classmates
- 2 people who study/work at a desk
- 2 productivity/tech people
- 2 honest critics
- 1 possible buyer

## What to ask

Ask only these things:

1. Do you understand what the site sells?
2. Does it look trustworthy enough to send a request?
3. Which product is strongest?
4. Which product is weakest?
5. Would the laptop stand interest you?
6. What price feels reasonable?

## What to record locally

For every contact:

```bash
python3 tools/add_private_contact.py
```

For every serious product request:

```bash
python3 tools/add_private_lead.py
```

To view local private data:

```bash
python3 tools/show_private_data.py
```

## Day Zero success

```text
10 people contacted
5 replies
3 useful feedback notes
1 serious product interest
0 premature payment requests
```

## If someone asks to buy

Do not send payment immediately.

Follow:

```text
docs/manual_order_workflow.md
docs/supplier_validation_checklist.md
docs/customer_reply_templates.md
```

## End of day summary

At the end of the day, write a non-private summary:

```text
contacts sent:
replies:
useful feedback:
serious requests:
strongest product:
weakest product:
main objection:
next action:
```

This summary can be committed only if it contains no personal data.
