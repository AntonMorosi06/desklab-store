# DeskLab Store — Publication Audit

## Purpose

This document defines the public publication audit for DeskLab Store. The goal is to make the repository presentable as a static e-commerce validation storefront without implying that it is a complete production e-commerce platform.

DeskLab Store must be described as a controlled validation project: a public storefront, a small product catalogue, a manual availability-check workflow, supplier and margin review, and a cautious path toward possible commercial use.

It must not be described as a complete automated shop, a dropshipping operation already validated by real sales, a platform with stock management, an active payment system, or a production-scale retail business.

## Current public status

Status: public validation storefront.

Version target: v0.4.3 public polish.

Hosting target: GitHub Pages.

Frontend: static HTML, CSS, JavaScript.

Catalogue data: local `products.json`.

Backend: not implemented.

Database: not implemented.

Payment gateway: not implemented.

Checkout: not implemented.

Order handling: manual / planned.

Legal documents: draft notes only.

Commercial readiness: validation stage, not production retail.

## Safe public description

Recommended public wording:

```text
DeskLab Store is a static e-commerce validation storefront for desk setup and productivity accessories. It uses HTML, CSS, JavaScript and a JSON product catalogue to test a small, controlled product selection through a manual availability-check workflow before any payment or order confirmation.
```

Do not use:

```text
Complete e-commerce platform.
Automated online store.
Live retail business with confirmed stock.
Production checkout system.
Validated dropshipping business.
Guaranteed delivery store.
```

## Repository visibility audit

- [ ] Confirm the repository is intended to remain public.
- [ ] Confirm no `local_private/` folder is committed.
- [ ] Confirm no real customer names, phone numbers, addresses, emails or order notes are committed.
- [ ] Confirm no real supplier private data is committed.
- [ ] Confirm no payment credentials, API keys, Stripe/PayPal tokens or bank data are committed.
- [ ] Confirm no private screenshots are committed.
- [ ] Confirm no hidden local files such as `.DS_Store`, `.env`, temporary archives or exported customer files are committed.

Recommended command:

```bash
git status --short --branch
git ls-files | grep -Ei 'local_private|customer|cliente|lead|order|ordine|supplier|fornitore|iban|bank|stripe|paypal|token|secret|password|private|address|phone|email|csv|xlsx|pdf|zip' || true
```

If this command returns sensitive operational data, do not publish a new release until the files have been removed from the Git index and, if necessary, from history.

## Product catalogue audit

File to check: `products.json`.

- [ ] Every product has an `id`.
- [ ] Every product has a clear name.
- [ ] Every product has a category.
- [ ] Every product has a price.
- [ ] Every product has a comparison price only if it is reasonable and not misleading.
- [ ] Every product status clearly says availability must be confirmed.
- [ ] Every product risk level is realistic.
- [ ] Supplier cost target is marked as target, not verified final cost.
- [ ] Shipping estimate is marked as estimate after supplier confirmation.
- [ ] Margin goal is marked as goal, not guaranteed margin.
- [ ] `paymentLink` remains empty until legal, supplier, payment and fiscal checks are complete.
- [ ] Product descriptions do not imply guaranteed stock, guaranteed delivery or guaranteed quality before verification.

## Storefront copy audit

Files to check: `index.html`, `README.md`, `docs/current_status.md`.

- [ ] Hero section clearly says the store is in validation phase.
- [ ] The site explains that availability is confirmed manually before payment.
- [ ] The site does not present itself as a complete e-commerce platform.
- [ ] The site does not imply stock is already available.
- [ ] The site does not promise immediate shipping.
- [ ] The site does not promise automatic checkout.
- [ ] The FAQ explains that this is not a definitive shop.
- [ ] Contact section asks for product, quantity and shipping city only.
- [ ] No wording creates pressure to pay before manual confirmation.

## Legal and fiscal audit

Files to check: `legal/privacy_notes.md`, `legal/shipping_returns.md`, `legal/terms_draft.md`, `legal/pre_sale_disclaimer.md` if present.

- [ ] Legal files are clearly marked as drafts.
- [ ] Legal files do not pretend to be professional legal advice.
- [ ] Terms do not promise conditions that have not been verified.
- [ ] Shipping/returns notes mention that final conditions must be confirmed before purchase.
- [ ] Privacy notes explain how contact requests are handled.
- [ ] No analytics or tracking claim is made unless analytics is actually implemented and legally reviewed.
- [ ] Before real continuous selling, VAT/tax position, consumer rights, withdrawal rights, warranty, privacy and payment terms must be reviewed with appropriate professional support.

## Manual order workflow audit

The safe operational workflow is:

```text
Customer request
↓
Manual lead/order note stored locally, not in Git
↓
Supplier availability and cost check
↓
Shipping and return risk check
↓
Final price and timing confirmation
↓
Payment link only after confirmation
↓
Manual order tracking outside public GitHub
```

Checklist:

- [ ] No automatic payment button is active.
- [ ] No fake cart backend is presented.
- [ ] No real customer data is committed.
- [ ] Lead/order tracking is kept local or synthetic.
- [ ] Any public CSV is synthetic or template-only.
- [ ] The store explicitly says payment happens only after confirmation.

## UI and browser audit

- [ ] Test the live GitHub Pages site in Chrome.
- [ ] Test the live GitHub Pages site in Safari.
- [ ] Test on mobile width using browser developer tools.
- [ ] Check that `products.json` loads correctly.
- [ ] Check that search works.
- [ ] Check that category filtering works.
- [ ] Check that product detail dialog opens and closes.
- [ ] Check that mailto links produce the correct subject and body.
- [ ] Check that copy email button works or displays fallback text.
- [ ] Check that the loader disappears and never blocks the site.
- [ ] Check browser console for JavaScript errors.

## Screenshot evidence

For v0.4.3 public polish, collect at least these screenshots:

```text
docs/screenshots/homepage_desktop.png
docs/screenshots/catalogue_desktop.png
docs/screenshots/product_dialog_desktop.png
docs/screenshots/mobile_homepage.png
```

Screenshots must not include private browser tabs, notifications, local folders, account menus or personal information.

## GitHub presentation audit

- [ ] Repository description is short and clear.
- [ ] Repository topics are added.
- [ ] README has live site link.
- [ ] README states current limitations.
- [ ] README does not overclaim business readiness.
- [ ] README links to current status, roadmap, validation checklist and publication notes.
- [ ] A release tag is created only after the live site and audit pass.

Suggested topics:

```text
static-site
ecommerce
validation
frontend
javascript
json
github-pages
business-validation
portfolio
```

## v0.4.3 release criteria

The project can be tagged as v0.4.3 public polish only when:

- [ ] README is accurate.
- [ ] Live site works.
- [ ] Product catalogue loads.
- [ ] No real customer or supplier data is committed.
- [ ] Legal files are clearly marked as drafts.
- [ ] Payment links remain disabled unless fully reviewed.
- [ ] Screenshots are created.
- [ ] GitHub topics are set.
- [ ] Known limitations are still visible.
- [ ] Changelog or release notes mention the audit.

## Final audit result

Audit status: pending.

Auditor: Anton Morosi.

Date: to be completed.

Result options:

```text
PASS — suitable as public static validation storefront.
PASS WITH NOTES — suitable for portfolio, but not commercial launch.
BLOCKED — do not promote until privacy/legal/product issues are fixed.
```

Current recommended result before manual review:

```text
PASS WITH NOTES — suitable for portfolio as a validation storefront, not suitable as a complete e-commerce business.
```
