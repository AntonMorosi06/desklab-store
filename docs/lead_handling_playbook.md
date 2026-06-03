# DeskLab Store — Lead Handling Playbook

## What is a lead?

A lead is anyone who does at least one of these:

- replies to a soft launch message
- clicks or opens the site and gives feedback
- asks about a product
- asks about price, shipping or availability
- says they might buy

## Lead levels

### Level 1 — Feedback lead

The person gives an opinion but no buying signal.

Action:

- thank them
- record feedback
- do not push sale

### Level 2 — Interest lead

The person likes a product or asks about price.

Action:

- ask product, quantity and shipping city
- record in `data/orders_tracker.csv`
- do supplier check before any payment

### Level 3 — Serious request

The person asks how to buy.

Action:

- verify supplier
- calculate final price
- send clear conditions
- only then discuss payment

## Lead statuses

Use these statuses:

```text
contacted
opened
replied_feedback
interested
serious_request
supplier_checking
waiting_customer
not_interested
not_viable
converted
```

## Do not do this

- Do not pressure friends.
- Do not promise instant shipping.
- Do not send payment before verification.
- Do not collect unnecessary personal data.
- Do not sell products you have not checked.
- Do not treat every like as a buyer.

## Daily review

At the end of each day, count:

- people contacted
- replies
- useful feedback
- product interest
- serious requests
- products mentioned most often
- objections

This is the real data.
