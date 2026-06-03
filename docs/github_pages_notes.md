# DeskLab Store — GitHub Pages Notes

## Public URL

Expected public site:

```text
https://antonmorosi06.github.io/desklab-store/
```

## Recommended configuration

GitHub repository settings:

```text
Settings
Pages
Build and deployment
Source: Deploy from a branch
Branch: main
Folder: / root
```

## Local testing

Use a local HTTP server:

```bash
cd ~/Desktop/desklab-store
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Why not open index.html directly?

The catalogue is loaded from `products.json` using JavaScript `fetch`. Some browsers restrict local file loading when opening `index.html` directly from Finder. Running a local server avoids that issue and gives a more realistic test environment.

## Hard refresh

If the online site still shows an older version after a push, use:

```text
CMD + SHIFT + R
```

This forces the browser to refresh cached CSS and JavaScript.

## Useful checks

Check the public page headers:

```bash
curl -I https://antonmorosi06.github.io/desklab-store/
```

A working deploy should return a `200` response.

Check the page title:

```bash
curl -L -s https://antonmorosi06.github.io/desklab-store/ | grep -i "<title>"
```

Expected title:

```text
DeskLab Store — Minimal tech essentials
```

## Common problems

### 404 page

Possible causes:

- GitHub Pages is not enabled.
- Branch is not set to `main`.
- Folder is not set to `/ root`.
- Deployment has not finished yet.
- Repository name or URL is wrong.

### CSS or JavaScript not updating

Possible causes:

- browser cache
- GitHub Pages deployment delay
- old file still referenced in `index.html`

Fix:

- hard refresh
- check file names
- verify paths are relative
- check GitHub Pages deployment settings

### Product catalogue not loading

Possible causes:

- `products.json` has invalid JSON
- site was opened directly from Finder
- wrong path in JavaScript
- browser blocked local fetch

Fix:

```bash
python3 -m json.tool products.json
python3 -m http.server 8000
```

