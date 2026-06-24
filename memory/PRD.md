# Nino — Portfolio PRD

## Problem Statement
"Build portfolio based on picture, using TypeScript" — recreate the personal
portfolio shown in the user-supplied screenshots (5 screens: Hero, Highlights/
workexperience, Awards & Certifications, and Projects Gallery) for Febry, a
software-engineering student working as PM · Software · Data Analyst.

## Architecture
- React 19 (CRA + craco) migrated to TypeScript (`tsconfig.json`, `.tsx`)
- Static single-page portfolio with smooth-scroll nav (no backend used)
- TailwindCSS for utilities + custom CSS variables for the brand system
- Font: Plus Jakarta Sans (Google Fonts)
- Icons: `lucide-react`

## File Layout
```
frontend/src/
├── App.tsx                # Composition root
├── index.tsx              # ReactDOM bootstrap
├── index.css              # Brand tokens & component styles
├── types.d.ts             # CSS module declarations
├── data/portfolio.ts      # Typed static content (profile, awards, projects…)
└── components/
    ├── Navbar.tsx         # Floating pill nav with active-section sync
    ├── Hero.tsx           # Headline, photo & floating chips
    ├── Highlights.tsx     # "My Journey" stats card
    ├── workexperience.tsx   # Image cards with category pill
    ├── Awards.tsx         # 3-up scholarship/award cards
    ├── Certifications.tsx # Accordion list
    ├── Projects.tsx       # Masonry gallery (3-col → 1-col)
    └── ConnectBar.tsx     # Sticky bottom CTA bar
```

## Implemented (2026-01-19)
- TypeScript pipeline added (typescript, @types/react, @types/react-dom, @types/node)
- Hero: status pill, role line, gradient name, wave emoji, CTA buttons, two
  floating chips (Agile & Scrum, QA & Scoping) overlaid on portrait
- Highlights card with 3 stat tiles (gradient numbers)
- workexperience grid with image cards + category tag + organizer footer
- Awards & Scholarships 3-card grid with side accent bar
- Certifications accordion (first item open by default)
- Projects masonry gallery with image overlay + tag pills
- Sticky "Let's connect" pill bar (Email / Instagram / LinkedIn / GitHub / GitLab)
- Smooth-scroll nav synced to scroll position
- `data-testid` on every interactive / informational element

## Backlog (P1)
- Replace placeholder Unsplash images with real Nino assets
- Real CV file behind "View CV" button
- Wire `mailto:` / real social URLs
- Mobile fine-tuning of hero chip positions (<640px)
- Per-project detail pages (optional)

## Backlog (P2)
- Dark mode toggle
- Form-based contact modal (instead of just mail link)
- i18n (EN / ID)
- Lighthouse / SEO sweep
