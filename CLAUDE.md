# Stonebridge — CLAUDE.md

## Project overview

Institutional website for Stonebridge, a governance & regulatory advisory firm.
Built with Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui.

**Dev server:** `npm run dev` (port 8080) — **Build:** `npm run build`

---

## Architecture

```
src/
  pages/        Index, Mandats, Situations, Doctrine, Contact, NotFound
  components/   Navigation, MobileNavigation, Layout, Footer, NavLink + shadcn ui/
  contexts/     LanguageContext.tsx   (EN/FR switch, localStorage)
  hooks/        useScrollReveal.ts   (IntersectionObserver)
  assets/       bridge-hero.jpg
```

**Routing** (App.tsx):
- `/` → Index (hero)
- `/mandats` → Mandats
- `/situations` → Situations
- `/doctrine` → Doctrine
- `/contact` → Contact

---

## Visual identity

| Token | Value | Usage |
|-------|-------|-------|
| Navy | `#0F1B2D` | Header, footer, hero overlay, CTA bg |
| Gold | `#BFA46F` | **One use only**: 120px × 1px line under "STONEBRIDGE" on hero + contact form button border |
| Graphite | `#2F2F2F` | Body text on light pages |
| Warm off-white | `#FAF8F5` | Light section bg (odd) |
| Warm beige | `#EDE9E3` | Light section bg (even) |
| White | `#ffffff` | Page title section bg |

**Fonts:**
- Titles/display: **Playfair Display** (serif) — `font-serif`
- Body/UI: **Inter** (sans) — `font-sans`, weight 300

**Border-radius:** max 2px (`borderRadius: '2px'`)

**DO NOT** use gold on button hover states — hover = white bg / navy text only.

---

## CSS classes (index.css)

| Class | Description |
|-------|-------------|
| `.institutional-heading` | Playfair Display, uppercase, clamp(2rem,4vw,3rem) |
| `.institutional-body` | Inter 300, clamp(1rem,1.1vw,1.0625rem), lh 1.75, max-w 44rem |
| `.institutional-label` | Inter 400, 0.6875rem, tracking 0.18em, uppercase |
| `.reveal` | Scroll animation target — starts opacity:0 translateY(20px) |
| `.reveal.is-visible` | Triggered by IntersectionObserver → opacity:1 translateY(0) |
| `.reveal-delay-N` | Stagger delays: 1→120ms, 2→240ms, 3→360ms, 4→480ms |
| `.hero-fade-in` | Immediate CSS animation (no scroll needed) for hero content |
| `.hero-fade-delay-N` | Stagger: 1→200ms, 2→400ms, 3→600ms, 4→800ms |

---

## Navigation

**Desktop** (`Navigation.tsx`):
- `hidden lg:block` — never visible on mobile
- `grid grid-cols-3`: logo (justify-self-start) | links (justify-center) | EN/FR (justify-end)
- `transparent` prop: starts transparent on homepage, becomes navy at scroll > 60px
- `isSolid = !transparent || scrolled`
- Nav items: Mandats, Situations, Doctrine, Contact (Overview commented out)

**Mobile** (`MobileNavigation.tsx`):
- `lg:hidden` wrapper
- Header bar: transparent → navy at scroll > 60px (or when menu open)
- Hamburger → fullscreen navy overlay with staggered link animations

---

## Page structure pattern

All secondary pages follow this pattern:
```tsx
const Page = () => {
  const { t } = useLanguage();
  useScrollReveal(); // always called at top

  return (
    <Layout variant="light">
      {/* Title section — always white bg */}
      <section style={{ backgroundColor: '#ffffff' }} className="px-8 md:px-16 lg:px-24 pt-40 md:pt-48 pb-24">
        <h1 className="reveal font-serif uppercase" style={{ color: '#0F1B2D', ... }}>
          {t('EN title', 'FR title')}
        </h1>
      </section>

      {/* Content sections — alternating #EDE9E3 / #FAF8F5 */}
      {sections.map((s, i) => (
        <section key={i} style={{ backgroundColor: s.bg }} className="px-8 md:px-16 lg:px-24 py-24 md:py-32">
          <div className="max-w-3xl">
            <div className={`reveal reveal-delay-${(i % 3) + 1}`}>
              <h2 className="institutional-label mb-8" style={{ color: '#0F1B2D', opacity: 0.55 }}>{s.label}</h2>
              <p className="institutional-body">{s.body}</p>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};
```

Section bg array order: `['#EDE9E3', '#FAF8F5', '#EDE9E3', '#FAF8F5', ...]`

---

## i18n

```tsx
const { t, language, setLanguage } = useLanguage();
// Usage:
t('English text', 'Texte français')
// Returns the string for the active language
```

Language stored in `localStorage` under key `stonebridge-lang`.

---

## Hero (Index.tsx)

- Full-viewport hero with `bridge-hero.jpg` background
- Dark overlay: `rgba(15, 27, 45, 0.72)`
- Content z-10 above overlay, centered
- STONEBRIDGE → Playfair Display, clamp(3rem,7vw,5rem), tracking 0.22em
- Gold line: 120px × 1px, `#BFA46F`, margin 24px auto 28px
- CTA button: transparent bg, white border `rgba(255,255,255,0.45)`, hover → white bg / navy text

---

## Layout component

```tsx
<Layout variant="light">  // variant: 'light' | 'dark'
```

- Wraps page with Navigation + MobileNavigation (solid navy, no transparent prop)
- Appends Footer
- Background: `#F5F5F5` (light) or `#0F1B2D` (dark)

---

## Key constraints

1. Gold used in **two places only**: hero gold line + contact form submit button border
2. No gold on hover states — always white/navy inversion
3. No rounded corners beyond 2px
4. `@import` Google Fonts must stay **before** `@tailwind` in index.css
5. Desktop nav (`Navigation`) has `hidden lg:block` — never on mobile
6. Mobile nav (`MobileNavigation`) has `lg:hidden` — never on desktop
