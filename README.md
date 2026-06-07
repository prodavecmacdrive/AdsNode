# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

# AdsNode

AdsNode is a specialized, lightweight CRM and collaboration platform designed specifically for Playable Ads developers and their clients. It replaces chaotic communication in messaging apps with a structured, visual, and gate-driven pipeline built around interactive creative assets.

AdsNode minimizes production friction by forcing structured onboarding, aggregating developer feedback into clean batches, and providing an interactive sandbox for non-technical stakeholders to test and approve HTML5 creatives.

---

## Core Features & Workflow

### 1. Passwordless Magic Links

Clients don't need to register or remember credentials. The Administrator creates a client profile and generates a unique secure URL token (e.g., `AdsNode.com/client-iu39f87ewjk9q2`), giving them instant desktop access only to their respective projects.

### 2. Smart App-Store Briefing

Initiating a project is simplified through a step-by-step wizard:

- **App Integration:** Automatically pulls app icons and titles using App Store or Google Play URLs (with manual override for unreleased apps/NDAs).
- **Visual Moodboard:** A flexible canvas where clients drop text, images, videos, and references without being constrained by rigid form fields.
- **Asset Management & Networks:** Built-in file directory supporting global game assets (fonts, UI kits) and creative-specific uploads, paired with ad network targets (Unity Ads, AppLovin, Facebook, etc.).

### 3. The 4-Tab Creative Gateway

Every playable creative or variant (sub-playable) is structured into four explicit, isolated production phases:

1.  **Specs (ТЗ):** Houses the core brief, moodboard, and network targets. Requires digital client approval before production begins.
2.  **Dev & Q&A:** The active workspace. The developer posts specific visual question cards (with screenshots/embeds). Client feedback is restricted to these cards, eliminating lost questions.
3.  **Pre-Final Sandbox:** An interactive preview environment. Includes a multi-device viewport emulator (`📱 Portrait`, `📱 Landscape`, `💻 Tablet`) to test scaling and responsive behaviors natively in the browser.
4.  **Final Export:** A clean download hub where production-ready ZIP archives are automatically grouped by network specifications and variations.

### 4. Batched Point-and-Comment System

- **Contextual Pins:** Clients can switch to a review mode (Figma-style) and drop a pin anywhere on the canvas, moodboard, or live iframe demo.
- **Expanded Feedback:** Pins expand from simple text fields into mini-moodboards if the client needs to attach visual reference screenshots or arrows.
- **Developer Batching:** To prevent notification spam, developer replies and tweaks accumulate locally and are dispatched to the client as a single comprehensive review batch.

### 5. Hierarchical Log & Immutable Version History

- **Context-Aware Chat:** A unified log that filters communication based on hierarchy (Global -> Game Level -> Playable Level -> Variant Level).
- **Time Travel:** Every approval, specification shift, or build upload is logged. Clicking any event in the history timeline rolls the workspace back into a read-only state of that exact point in time, protecting the developer from scope creep.

---

## Technical Stack Architecture

AdsNode is architected as a lean, highly responsive desktop web application:

- **Frontend:** React / TypeScript
- **Backend & Database:** Supabase / Firebase (BaaS leveraging real-time subscriptions for notifications, secure asset storage, and instant database updates)
- **Previews:** Isolated `<iframe>` rendering with custom wrapper components for device emulation and aspect-ratio constraints.

---

## Target Device Support

- **Desktop:** 100% optimized for complete production management, asset uploads, and node configurations.
- **Mobile:** A responsive splash/placeholder screen redirecting users to use a desktop browser for stable rendering of complex HTML5 sandboxes, visual canvases, and coordinate-precise pinning.
