# DeskLab Store — Manual Order Workflow

## Purpose

This document defines the manual order workflow for DeskLab Store v0.4.

The workflow exists because DeskLab is not ready for automatic checkout yet. Manual validation is safer until suppliers, delivery times, legal conditions, margins and customer expectations are verified.

## Workflow

### Step 1 — Customer request

The customer clicks a product request button or the general contact button.

The email should include:

- product name
- product code
- quantity
- shipping city
- questions or notes

### Step 2 — Lead registration

Every real request must be recorded in:

```text
data/orders_tracker.csv
```

Minimum fields:

- date
- lead id
- customer name
- customer email
- product id
- product name
- quantity
- city
- status
- supplier check
- final price
- payment status
- notes

### Step 3 — Supplier check

Before answering with a final offer, verify:

- supplier availability
- supplier cost
- shipping cost
- expected shipping time
- return conditions
- possible defects or quality risk
- whether product images/descriptions are safe to use
- whether the product is still worth selling after costs

### Step 4 — Final customer reply

If the product is acceptable, reply with:

- final price
- estimated delivery time
- payment method or link only if appropriate
- return/refund notes
- confirmation that payment is requested only after the customer accepts the final conditions

If the product is not acceptable, reply honestly and do not force the sale.

### Step 5 — Payment

Do not send a payment link until:

- product is verified
- final price is calculated
- customer understands timing and conditions
- legal/fiscal situation is appropriate for the type of sale

### Step 6 — Tracking

Update `data/orders_tracker.csv` after each action:

```text
new_request
supplier_checking
waiting_customer_confirmation
payment_sent
paid
ordered
shipped
delivered
cancelled
refunded
not_viable
```

## Rule

No product should move from request to payment without a documented manual check.
