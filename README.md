# Checklist — Design System

A professional, scalable Checklist web application demonstrating **Design System thinking**, built with React, TypeScript, Vite, Tailwind CSS, and Storybook.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| **React 18** | UI rendering |
| **TypeScript** (strict) | Type safety |
| **Vite** | Fast bundler + HMR |
| **Tailwind CSS** | Utility-first styling |
| **Storybook 8** | Component development & documentation |
| **ESLint + Prettier** | Code quality + formatting |

---

## Getting Started

```bash
npm install
npm run dev          # Start the app  (http://localhost:5173)
npm run storybook    # Open Storybook (http://localhost:6006)
npm run build        # Production build
npm run lint         # Lint all files
npm run format       # Format with Prettier
```

---

## Project Structure

```
src/
├── components/        # Reusable UI components (Design System atoms/molecules)
│   ├── Button/
│   ├── Input/
│   ├── Checkbox/
│   ├── Card/
│   ├── Badge/
│   ├── EmptyState/
│   ├── TaskItem/
│   └── TaskList/
├── tokens/            # TypeScript design token constants
├── hooks/             # Custom React hooks (useTasks, useFilter)
├── pages/             # Page-level components (ChecklistPage)
├── layouts/           # Structural shells (AppLayout)
├── stories/           # Storybook stories for every component
├── styles/            # Global CSS (Tailwind entry point + tokens)
├── types/             # Shared TypeScript types
└── utils/             # Pure utility functions
```

Each component follows the same internal structure:
```
ComponentName/
├── ComponentName.tsx        # Implementation
├── ComponentName.types.ts   # Props interface
└── index.ts                 # Barrel export
```

---

## Design System

### Design Tokens

All visual decisions are centralized in two places:

1. **`tailwind.config.js`** — extends Tailwind's theme with brand colors, radii, and shadows.  
2. **`src/tokens/`** — TypeScript constants mirroring the same values for programmatic access.  
3. **`src/styles/global.css`** — CSS custom properties (`--color-primary`, etc.) for raw CSS consumers.

The 4 px spacing grid, type scale, and color palette are consistent across all three.

### Components & Variants

| Component | Variants / Notes |
|---|---|
| `Button` | `primary`, `secondary`, `danger`, `ghost` · sizes `sm/md/lg` · loading state |
| `Input` | label, helper text, error state, left/right icon slots |
| `Checkbox` | checked, unchecked, indeterminate — animated SVG checkmark |
| `Card` | `default`, `elevated`, `outlined`, `ghost` · interactive hover-lift |
| `Badge` | `primary`, `success`, `danger`, `warning`, `neutral` · optional dot |
| `EmptyState` | `empty` (no tasks), `filtered` (no matches) · custom SVG illustrations |
| `TaskItem` | hover-reveal delete button · strikethrough on completion |
| `TaskList` | segmented filter control · live stats footer |

---

## Architecture Decisions

### Why Tailwind?
- Zero runtime: all styles are purged at build time — no unused CSS ships.  
- Co-located: reading a component tells you exactly what it looks like without a separate CSS file.  
- Variant maps (`VARIANT_CLASSES`, `SIZE_CLASSES`) use complete static strings so Tailwind's JIT scanner detects every class.

### State Management
- **`useTasks`** — all CRUD operations, `useCallback`-wrapped for referential stability, with `localStorage` persistence.  
- **`useFilter`** — isolated filter state, composable and independently testable.  
- No external state library needed: React's built-in hooks cover this app's scope cleanly.

### Accessibility
- All form controls use `useId()` for stable `htmlFor`/`id` pairing.  
- Custom Checkbox keeps the native `<input>` in the DOM (only visually hidden via `sr-only`) — no custom ARIA wiring needed.  
- `aria-invalid` + `aria-describedby` on Input for error announcements.  
- Keyboard focus rings use `focus-visible:` (keyboard-only, not on click).  
- `aria-live="polite"` on `EmptyState` announces list changes to screen readers.

### Scalability
- **Barrel exports** (`index.ts`) let consumers import from `@components/Button` instead of deep paths.  
- **Path aliases** (`@components`, `@hooks`, `@tokens`, etc.) are configured in both `vite.config.ts` and `tsconfig.json` for consistent resolution.  
- Adding a new component only requires creating the component folder — no global registry to update.

---

## Storybook

Every component has a story file in `src/stories/` with:
- Default render
- All variants side-by-side
- Interactive stories (controlled state via `useState`)
- Edge cases (loading, disabled, long text, empty)

Run `npm run storybook` and browse the **Design System** section.
