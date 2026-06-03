# Changelog

## v0.4.2 — Privacy-Safe Day Zero Launch

Status: privacy-safe operational launch  
Release type: real outreach preparation

### Added

- Added `.gitignore` protection for local private operational data.
- Added `local_private/` local trackers for real contacts and leads.
- Added privacy-safe public CSV templates under `data/templates/`.
- Added `tools/add_private_contact.py`.
- Added `tools/add_private_lead.py`.
- Added `tools/show_private_data.py`.
- Added privacy-safe operations documentation.
- Added Day Zero execution checklist.
- Added non-private Day Zero summary template.
- Updated README with privacy-safe operation rules.

### Principle

Real customer/contact data must stay local and must never be pushed to the public GitHub repository.

### Not added

- No checkout.
- No payment automation.
- No customer database.
- No analytics tracking.
- No automatic messaging.

## v0.4.1 — Soft Launch and Lead Tracking Kit

Status: first real validation sprint prepared  
Release type: operational sales validation

### Added

- Added soft launch messages for friends, potential buyers, stories/posts and follow-ups.
- Added Day Zero action plan.
- Added laptop stand hero product validation document.
- Added lead handling playbook.
- Added soft launch contact tracker CSV.
- Added local Python tool to add leads to `data/orders_tracker.csv`.
- Added local Python tool to show recorded leads.
- Updated README with v0.4.1 soft launch instructions.

### Not added

- No automatic checkout.
- No payment automation.
- No analytics tracking.
- No backend.
- No spam automation.

### Principle

DeskLab should now be tested with real people manually. The next milestone is not more code: it is 10 contacted people, 5 replies, 3 useful feedback notes and 1 serious product interest.

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

