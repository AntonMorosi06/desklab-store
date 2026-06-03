# DeskLab Store — Portfolio Case Study

## Project overview

DeskLab Store is a static storefront prototype designed to validate a small catalogue of desk setup, study and productivity accessories. The project is built with HTML, CSS, JavaScript and JSON, and is deployed publicly through GitHub Pages.

The core idea is intentionally practical: before building a full e-commerce platform with payments, stock, automated checkout and order management, the project validates whether a narrow set of products can be presented clearly, priced realistically and checked manually through a controlled availability workflow.

## Problem

A common mistake in early e-commerce projects is building the technical platform before validating the actual products, suppliers, margins and operational responsibilities. This creates unnecessary complexity and can lead to unrealistic shipping promises, unclear legal terms, weak margins and fragile customer communication.

DeskLab Store addresses this by starting from a simple but structured validation storefront.

## Solution

The project presents a small catalogue of desk-related accessories and documents the workflow around manual validation:

1. A visitor explores the product catalogue.
2. The product information is loaded from a JSON file.
3. Availability and shipping are not promised automatically.
4. The seller checks supplier conditions manually.
5. Payment links are not activated until the product and conditions are verified.

This keeps the project realistic and avoids pretending that the store is already a complete production e-commerce system.

## Technical implementation

The current implementation uses:

- `index.html` for the static page structure
- `style.css` for the base visual system
- `v04-premium.css` for the premium motion layer
- `app.js` for catalogue interaction
- `v04-premium.js` for motion and experience enhancements
- `products.json` as the product data source
- SVG assets for lightweight product visuals
- GitHub Pages for public hosting

The project intentionally does not include a backend, database or payment gateway at this stage.

## Product model

Each product in `products.json` includes structured information such as:

- product id
- name
- category
- price
- comparison price
- availability status
- risk level
- supplier cost target
- shipping estimate
- margin goal
- short description
- long description
- features
- image path
- optional payment link

This makes the catalogue easy to edit and prepares the project for future migration to a backend or CMS.

## Current status

DeskLab Store is currently at the v0.3 Premium Motion stage. It is a portfolio-ready static validation storefront, not a complete commercial system.

Working:

- static site
- GitHub Pages deployment
- JSON catalogue
- product cards
- visual identity
- premium motion files
- draft legal notes
- supplier and margin support files
- documentation baseline

Not implemented yet:

- backend
- database
- automated checkout
- payment system
- inventory system
- order tracking
- production legal policy
- customer account system

## What this project demonstrates

DeskLab Store demonstrates:

- frontend structure
- static deployment
- JSON data modeling
- product thinking
- release discipline
- documentation discipline
- honest technical scoping
- early business validation strategy

## Next steps

The most important next steps are:

1. Add screenshots to the repository.
2. Verify mobile layout.
3. Review each product against supplier and margin assumptions.
4. Design a manual order request flow.
5. Review legal and fiscal requirements before enabling payments.
6. Decide whether to keep the project static or migrate toward a backend later.

