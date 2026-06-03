# DeskLab Store — Project Roadmap

## Roadmap principle

DeskLab Store should grow gradually. The project should avoid adding payment automation, fake inventory or aggressive commercial promises before supplier, legal, fiscal and operational checks are complete.

The roadmap separates what is already implemented from what is planned.

## v0.3 — Premium Motion Static Release

Status: current baseline

Main goals:

- maintain a working GitHub Pages site
- document the project clearly
- preserve the current static catalogue
- present the project honestly as a validation storefront
- prepare the repository for portfolio use

Expected evidence:

- site available on GitHub Pages
- local test works with Python HTTP server
- product catalogue loads from JSON
- documentation exists in README and docs folder
- repository has clean Git status after push

## v0.3.1 — Presentation Polish

Goal: improve project readability and GitHub presentation.

Tasks:

- add screenshots to `assets/screenshots/`
- add screenshot references to README
- add repository topics on GitHub
- add short project description in repository settings
- verify mobile layout
- verify all links
- create a clean release note for v0.3
- open initial GitHub issues for v0.4 work

Acceptance criteria:

- README explains the project in under one minute
- GitHub Pages link is visible
- screenshots show the homepage and catalogue
- project limitations are explicit
- repository looks intentional, not accidental

## v0.3.2 — Product Validation Layer

Goal: make the catalogue more useful for real validation.

Tasks:

- review each product in `products.json`
- add supplier candidates in a private/local file, not necessarily public
- improve margin assumptions
- classify products by risk
- remove products that are too fragile, unclear or legally risky
- prepare a real customer question template
- prepare a manual order note template

Acceptance criteria:

- every product has a clear reason to exist
- every product has a supplier-cost target
- every product has a shipping estimate
- every product has a margin goal
- high-risk products are avoided

## v0.4 — Manual Order Request System

Goal: improve the manual order workflow without adding full checkout.

Possible implementation options:

- mailto-based request
- form service integration
- local-only order request template
- Google Form or external form link
- simple JavaScript request summary

Recommended approach:

Start simple. Use an order request summary or form link before building a backend.

Acceptance criteria:

- customers can request information clearly
- no payment is taken automatically
- the seller can manually confirm availability
- the workflow is transparent

## v0.5 — Brand and Content Upgrade

Goal: improve trust and visual quality.

Tasks:

- replace placeholder SVGs with original or authorized product visuals
- improve brand copy
- add about section
- add FAQ section
- improve mobile product cards
- add trust-oriented microcopy
- add better empty states and error states

Acceptance criteria:

- the store looks coherent
- product visuals are legally safe
- no copyrighted product photos are used without permission
- the customer understands that availability is confirmed manually

## v0.6 — Payment Link Experiment

Goal: evaluate whether payment links can be introduced safely.

Requirements before this version:

- supplier availability verified
- tax/fiscal position reviewed
- legal terms reviewed
- returns workflow defined
- privacy notes reviewed
- customer support channel prepared

Possible implementation:

- product-specific payment links
- manual payment links sent after confirmation
- no automatic checkout until operations are ready

Acceptance criteria:

- payment links are not empty only after review
- each product has verified conditions
- legal/fiscal requirements have been considered
- customer communication is clear

## v1.0 — Operational Release

Goal: release only when DeskLab can operate as a real small store.

Possible requirements:

- verified suppliers
- clear margins
- final legal documents
- production contact channel
- stable payment process
- defined shipping process
- return/refund workflow
- support workflow
- customer data handling policy
- tested checkout or manual payment workflow

The project should not be marked v1.0 until those requirements are satisfied.

