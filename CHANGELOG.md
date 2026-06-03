# Changelog

## v0.4 — Operational Manual Order Flow

Status: operational MVP baseline  
Release type: manual-commerce workflow

### Added

- Added v0.4 operational launch plan.
- Added manual order workflow documentation.
- Added customer reply templates.
- Added supplier validation checklist.
- Added first 7 days sales plan.
- Added legal/fiscal review questions.
- Added pre-sale disclaimer draft.
- Added manual order tracker CSV.
- Added product validation matrix CSV.
- Updated `index.html` with the v0.4 operational order section.
- Updated README with the Operational MVP section.

### Not added

- No automatic checkout.
- No payment gateway.
- No backend.
- No customer database.
- No inventory automation.

### Principle

DeskLab Store should validate demand, supplier conditions and product margins before activating payments or scaling.

## v0.3.1-final — Screenshot and Validation Evidence

Status: validation evidence added  
Release type: presentation closure

### Added

- Added screenshot evidence under `assets/screenshots/`.
- Updated the README screenshot section with explicit screenshot paths.
- Added and corrected `docs/v0.3.1_validation_evidence.md`.
- Confirmed `products.json` validation.
- Confirmed JavaScript syntax check when Node is available.
- Documented v0.3.1 closure evidence for the screenshot and mobile/console issues.

### Notes

This step does not modify the storefront logic and does not add backend, payment or checkout features.

## v0.3.1 — Presentation Polish

Status: repository presentation polish  
Release type: documentation and portfolio improvement

### Added

- Added portfolio case study document.
- Added release notes document for v0.3.
- Added repository presentation notes.
- Added v0.3.1 presentation polish plan.
- Added screenshot folder and screenshot instructions.
- Added GitHub issue template for structured future tasks.
- Updated README with portfolio presentation guidance and screenshot plan.

### Not changed

- No frontend logic was rewritten.
- No product data was changed.
- No payment, backend or checkout system was added.

All notable changes to DeskLab Store are documented in this file.

## v0.3 — Premium Motion Documentation Baseline

Status: documented static release  
Hosting: GitHub Pages  
Release type: portfolio-ready validation baseline

### Added

- Updated project documentation for the v0.3 Premium Motion stage.
- Added structured repository documentation under `docs/`.
- Added current status document.
- Added project roadmap document.
- Added GitHub Pages notes document.
- Added publication notes document.
- Added validation checklist document.
- Clarified that the project is a static validation storefront, not a complete automated e-commerce platform.
- Clarified the manual product availability and payment-link workflow.
- Documented current limitations and future development stages.

### Confirmed

- The project runs locally with `python3 -m http.server 8000`.
- The project is published through GitHub Pages.
- The root `index.html` loads `style.css`, `v04-premium.css`, `app.js`, `v04-premium.js` and `products.json`.
- The product catalogue is stored in `products.json`.
- Legal notes are present as drafts under `legal/`.
- Supplier and margin support files are present under `data/`.

### Not included yet

- Backend
- Database
- Payment gateway
- Automated checkout
- Inventory system
- Order tracking dashboard
- Verified supplier integration
- Final legal documents
- Production customer support process

## v0.1 — Static MVP Baseline

Status: initial static MVP

### Added

- Static landing page.
- Product catalogue with five initial products.
- Basic styling.
- Product JSON file.
- Legal draft notes.
- Supplier checklist.
- Margin sheet.
- GitHub Pages publication target.

