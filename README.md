# Privacy Policy Pages

Public GitHub Pages privacy policy hub for Gergő's apps, browser extensions, and future software projects.

## Magyar

Ez a repository nyilvános adatvédelmi irányelveket tartalmaz Gergő alkalmazásaihoz és böngészőbővítményeihez. A cél az, hogy a Chrome Web Store és más app store-ok számára stabil, publikus URL-en legyenek elérhetők a privacy policy oldalak.

### Fontos Szabályok

- Ez a repository szándékosan publikus.
- Csak publikus adatvédelmi irányelvek és kapcsolódó statikus assetek kerülhetnek ide.
- Privát app-forráskód, API kulcs, token, credential, `.env` fájl és személyes privát adat nem kerülhet ide.
- Apponként külön alkönyvtárat használunk.

### Jelenlegi Oldalak

- PassSmith Studio:
  - English: `passsmith-studio/en/`
  - Magyar: `passsmith-studio/hu/`
  - Deutsch: `passsmith-studio/de/`

### GitHub Pages Beállítás

1. GitHub repository `Settings`
2. `Pages`
3. `Build and deployment`
4. `Source`: `Deploy from a branch`
5. Branch: `main`
6. Folder: `/ (root)`

Várható URL:

```text
https://gergos-workland.github.io/privacy-policy-pages/
```

PassSmith Studio Chrome Web Store privacy URL:

```text
https://gergos-workland.github.io/privacy-policy-pages/passsmith-studio/en/
```

### Ellenőrzés

```bash
npm test
```

## English

This repository hosts public privacy policy pages for Gergő's apps, browser extensions, and future software projects. Its purpose is to provide stable public URLs for Chrome Web Store and other app store privacy policy requirements.

### Important Rules

- This repository is intentionally public.
- It must contain only public privacy policies and related static assets.
- Do not add private app source code, API keys, tokens, credentials, `.env` files, or private personal data.
- Each app should use its own subfolder.

### Current Pages

- PassSmith Studio:
  - English: `passsmith-studio/en/`
  - Hungarian: `passsmith-studio/hu/`
  - German: `passsmith-studio/de/`

### GitHub Pages Setup

1. Open repository `Settings`
2. Open `Pages`
3. Under `Build and deployment`
4. Set `Source` to `Deploy from a branch`
5. Branch: `main`
6. Folder: `/ (root)`

Expected URL:

```text
https://gergos-workland.github.io/privacy-policy-pages/
```

PassSmith Studio Chrome Web Store privacy URL:

```text
https://gergos-workland.github.io/privacy-policy-pages/passsmith-studio/en/
```

### Check

```bash
npm test
```
