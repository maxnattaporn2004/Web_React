# ดีน่า คาร์อินชัวรันซ์ — Dena Car Insurance Website

A Thai-language **car insurance broker website** (brand: *ดีน่า* / Dena), built as a
frontend-only demo with **React 19** and **Vite 8**. The site lets visitors browse
insurance products, promotions and news articles, contact the company (with an
embedded Google Map), and includes a client-side login/register screen.

> **Demo only — no backend.** All content (reviews, promotions, news, logos,
> contact details) is mock/placeholder data. The auth form validates input but
> never sends it anywhere; it shows an honest "no backend connected" message
> instead. Several images are hot-linked from external sources
> (`deenabroker.com`, `placehold.co`, `i.pravatar.cc`), so an internet
> connection is needed for full visuals.

---

## Features

Navigation is handled by a lightweight **hash router** implemented in
`src/App.jsx` — no routing library is installed.

| Route              | Page                    | Notes                                                                                                        |
| ------------------ | ----------------------- | ------------------------------------------------------------------------------------------------------------ |
| `#/`               | Home (default)          | Header, hero slider, vehicle-category grid, promo cards, tips carousel, partner-logo carousel, reviews, footer |
| `#/login`          | Auth — Login            | Renders standalone (no header/footer)                                                                          |
| `#/register`       | Auth — Registration     | Renders standalone (no header/footer)                                                                          |
| `#/car-insurance`  | Car Insurance (`ประกันภัยรถยนต์`) | Vehicle/usage filters + selectable insurance types                          |
| `#/promotions`     | Promotions (`โปรโมชั่น`)    | Sample promotion cards                                                                          |
| `#/news`           | News (`ข่าวสาร`)             | Searchable, category-filterable, paginated article list                                     |
| `#/contact`        | Contact (`ติดต่อเรา`)        | Contact details card + embedded Google Maps                                                                        |

### Home page
- **Hero section** with an image carousel (prev/next arrows, pagination dots,
  fade transition).
- **Vehicle-category grid** — 8 insurance categories (car, pickup, van, truck,
  taxi, motorcycle, พรบ., other).
- **Promo card grid** of campaign images.
- **"สาระน่ารู้" (Tips) section** — article cards, 3 per page with pagination
  dots, driven by the shared news dataset.
- **Partner insurance logo carousel** — 4 logos per page with dots
  (placeholder logos).
- **Customer review slider** — sample reviews with arrows and dots.
- **Footer** — company blurb, quick links, placeholder contact details,
  social-media icons, and a dynamic copyright year.

### Car Insurance page
- Hero banner with curved wave edge.
- **`VehicleFilter`** — two dropdowns: vehicle type (sedan groups, pickup
  groups, van, motorcycle) and usage type (personal, commercial, company,
  hire).
- **`InsuranceType`** — selectable pill buttons (ชั้น 1, พ.ร.บ., 3 พลัส,
  2 พลัส, ชั้น 3).

### News page
- **`NewsSidebar`** — search box + category filter buttons (categories are
  derived automatically from the data).
- **`NewsCard`** list, 3 per page with prev/next controls.
- Empty state when a search/filter combination matches nothing.

### Contact page
- Cream header band with a wavy edge, decorative blue blob, and the
  "ช่องทางการติดต่อ" title with an orange location pin.
- **`ContactUs`** — centred card split into two columns: company/address/phone/
  LINE details on a cream background (phone and LINE are `tel:`/external links)
  and a responsive **Google Maps** iframe embedded from the address query
  (no API key required).
- Stacks into a single column on tablet/mobile.

### Auth page
- Login and registration modes with client-side validation (email format,
  minimum 6-character password, password confirmation, required terms
  checkbox).
- Show/hide password toggles, "Remember me", placeholder
  "Forgot password?" / "Terms" links, and mode switching that resets the form.
- Accessible markup: labels, `aria-invalid`, `aria-describedby`,
  `aria-pressed`, `role="status"` feedback.

---

## Tech Stack

| Layer            | Choice                                                                            |
| ---------------- | --------------------------------------------------------------------------------- |
| UI library       | React `^19.3.1` (with `StrictMode`)                                               |
| Build tool       | Vite `^8.3.4` + `@vitejs/plugin-react`                                            |
| Language         | JavaScript (JSX) — no TypeScript                                                   |
| Styling          | Plain CSS, one stylesheet co-located per component                                 |
| Linting          | ESLint `^10` flat config + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` |
| Routing          | Hand-rolled hash-based routing in `src/App.jsx` (no library)                       |
| Backend / state  | None — mock data only, local component state (`useState`/`useEffect`)              |

---

## Getting Started

### Prerequisites
- **Node.js** (LTS recommended) and **npm**

### Installation

```bash
npm install
```

### Run locally (dev server with HMR)

```bash
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

### Production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Lint the project

```bash
npm run lint
```

---

## Available npm Scripts

| Script          | Command          | Description                                   |
| --------------- | ---------------- | --------------------------------------------- |
| `npm run dev`   | `vite`           | Start the Vite dev server (with HMR)          |
| `npm run build` | `vite build`     | Bundle the app for production into `dist/`    |
| `npm run lint`  | `eslint .`       | Run ESLint over the project                   |
| `npm run preview`| `vite preview`  | Serve the production build locally            |

---

## Project Structure

```
my-app/
├── index.html                 # Vite entry HTML (#root + /src/main.jsx)
├── vite.config.js             # Vite config (react plugin only)
├── eslint.config.js           # ESLint 10 flat config (react-hooks, react-refresh)
├── package.json
├── public/
│   ├── favicon.svg            # Site icon, referenced from index.html
│   └── icons.svg
└── src/
    ├── main.jsx               # createRoot + <StrictMode> entry
    ├── App.jsx                # App shell + hash-based routing
    ├── App.css
    ├── index.css              # Global styles / base background
    ├── assets/                # Local images (hero.png, react.svg, vite.svg)
    ├── data/
    │   └── newsData.js        # Shared news dataset (used by home + news page)
    └── componant/             # All React components (note: folder name as-is)
        ├── Header.jsx / Header.css              # Navbar + mobile hamburger menu
        ├── HeroSection.jsx / .css               # Hero text + Carousel
        ├── Carousel.jsx / .css                  # Image slider (shared CSS primitives)
        ├── HeroGrid.jsx / .css                  # 8 vehicle-category icons
        ├── CardHero.jsx / .css                  # Promo card grid
        ├── InformationHero.jsx / .css           # "สาระน่ารู้" tips carousel
        ├── LogoCarousel.jsx / .css              # Partner logo carousel
        ├── CustomerReviews.jsx / .css           # Review slider
        ├── Footer.jsx / .css                    # Footer (links, contact, social)
        ├── AuthPage.jsx / .css                  # Login + register form
        ├── CarInsurance.jsx / .css              # Car insurance page shell
        ├── VehicleFilter.jsx / .css             # Vehicle + usage dropdowns
        ├── InsuranceType.jsx / .css             # Insurance type pill buttons
        ├── PromotionSection.jsx / .css          # Promotions page
        ├── NewsSection.jsx / .css               # News page (filter + pagination)
        ├── NewsCard.jsx                         # Single news card (styled by NewsSection.css)
        ├── NewsSidebar.jsx                      # Search + category filter (styled by NewsSection.css)
        └── ContactUs.jsx / .css                 # Contact page (details card + Google Maps)
```

---

## Development Notes

- **Hash routing:** `src/App.jsx` listens to `hashchange` and renders a page
  per route. `#/login` and `#/register` render the auth screen alone; the other
  routes (home, car-insurance, promotions, news, contact) wrap their page
  between `Header` and `Footer`. Changing routes scrolls back to the top.
  The navbar's "ติดต่อเรา" link points to `#/contact`.
- **Shared data:** `src/data/newsData.js` is the single source of articles for
  both the home-page tips section and the news page — edit it once to update
  both.
- **Shared CSS primitives:** carousel arrows (`.btn-next-back`, from
  `Carousel.css`) and pagination dots (`.pagination-dots` / `.pagination-dot`,
  from `InformationHero.css`) are reused by several components via direct CSS
  imports instead of being duplicated.
- **`NewsCard` / `NewsSidebar`** have no stylesheet of their own; they are
  styled by `NewsSection.css`.
- **Placeholder content to replace with real data:** the logo text in the
  header/footer, the footer's contact details, social-media links, partner
  logos, promotions, and article "Read More" links all point to placeholders
  or `#`. (The `#/contact` page already uses the real company address, phone
  and LINE ID.)
- **The `src/componant/` folder name is intentional** in the current codebase —
  imports across the app match this spelling.
- **External images:** hero/category/article images are hot-linked from
  `deenabroker.com`; review avatars from `i.pravatar.cc`; promo and logo
  placeholders from `placehold.co`. Replace them with local assets (e.g. in
  `src/assets/` or `public/`) before going offline or to production.

---

## Built With

Scaffolded from the official **Vite React** template (`npm create vite@latest`),
then extended into the insurance-broker site described above. The stack remains
React + Vite with ESLint configured for React Hooks and React Refresh rules.
