# Catalyst design rules

The house rules for this site. They come from the Hallmark design skill (github.com/Nutlope/hallmark), cut down to what applies here, plus the decisions this site has already made. Every page, component and edit follows them. If a change needs to break one, say so in the pull request and record it under **Waivers** below.

The visual system (colours, fonts, radii, the blue gradient surfaces) is fixed. Change it only when that is the task.

## Never (hard rules)

### Colour and type
- Every colour and every font goes through a token in `:root` in `src/styles/global.css`, or a declared palette block (`.t-blue`, `.t-violet`, `.t-sky`, `.t-lilac`, `.t-indigo`). No hex, `rgb()` or `font-family` literal anywhere else. Transparency is `color-mix(in srgb, var(--token) 20%, transparent)`.
- No pure `#000` or `#fff` outside the token block: white is `var(--surface)`, the darkest ink is `var(--ink)` or `var(--night)`.
- No purple-to-blue gradient, no gradient text.
- Two families only: Syne (`--display`) for headings, Figtree (`--body`) for everything else. Mono (`--mono`) only for real codes, file names and figures.
- Body text 16px or larger. Running prose 45 to 75 characters wide.

### Labels and headings
- **No eyebrows.** No small line above a heading that just names the section ("How it works", "Who we are"). If the label holds a fact, move the fact into the heading or the text under it.
- **No tracked capitals.** Labels, captions, tags, table heads and nav links are in the body face, a step smaller, sentence case, no `text-transform: uppercase`, no `letter-spacing` above 0.03em. The only exception is the CATALYST wordmark.
- No single word in a heading picked out by colour, weight, italics or a highlight. A heading is one weight and one colour. (Highlighting words in body text, like the `mark` words, is fine.)

### Copy
- No em or en dashes in page copy. Use a comma, a colon or a new sentence.
- No meta strings joined with middle dots (`A · B · C`). No arrows typed into link or button text (`Learn more →`). No decorative status dots before labels.
- No buzzwords: seamless, robust, empower, supercharge, elevate, effortless, unlock, unleash, next-generation, world-class, best-in-class, industry-leading, mission-critical, future-proof. No filler openers ("In today's landscape"). No stock second action next to the main one (*Learn more*, *Get started*, *Book a demo*).
- **Never invent facts.** No made-up numbers, customer counts, testimonials, quotes, logos or case studies. Sample content inside product screens is labelled as sample data on the page.
- A form never shows success unless the request really went through.

### Layout
- `overflow-x: clip` on both `html` and `body`. Never `overflow-x: hidden`, never `100vw` widths.
- Grid tracks that hold images use `minmax(0, 1fr)`, never a bare `1fr`.
- No card inside a card: one containment layer. Inside a white panel, use hairlines and spacing, not another bordered box.
- The hero headline, its one sentence and the main button all fit on a 1280 x 800 screen without scrolling. Size heroes with `svh` or `dvh`, never `vh`.
- The container is capped (`.wrap`, 1280px) and centred. On wide screens the margins grow; the grids keep their column count.
- About 80 words at most in any one screen. One idea per section. Add a visual or a bigger heading before adding more words.

### Motion and interaction
- Animate only `transform` and `opacity`. Never `transition: all`. Never animate `width`, `height`, `top`, `left`, `right`, `margin` or `padding`.
- Every animation has a `prefers-reduced-motion: reduce` fallback (the global rule at the end of `global.css` covers transitions and keyframes; anything driven by JavaScript checks `matchMedia` itself).
- Content is visible with JavaScript off. A reveal only hides things under a class the script adds (for example `.armed`), never by default.
- At most one scroll-driven effect per page section. The home page already has the sticky "Your words" card stack: nothing pinned next to it.
- Every interactive element has a visible `:focus-visible` ring that appears instantly. Form fields use `outline` for focus, never a border colour change alone.
- Buttons have hover, active, focus and disabled states. Disabled uses the native attribute, lower opacity and `cursor: not-allowed`.
- Controls are 44 to 52px tall.
- No easing that overshoots on UI state (bounce, spring). The wordmark is the one exception (see Waivers).

### Pictures
- Show the product, don't describe it. Prefer real screenshots from `src/assets/screens/`. A built sample of the interface is fine when the screen does not exist yet, and it says it is sample data.
- No hand-drawn browser bars (traffic lights, URL pill) or OS windows. No emoji as icons: use `Icon.astro`.
- No drawn illustrations of objects, people or scenes. Diagrams of the real workflow are fine.
- Decorative SVGs and canvases carry `aria-hidden="true"`. Images carry a real `alt`.
- No glowing radial blobs behind text. Depth comes from lightness steps and shadows with an offset.

## Before you ship a change
- `npx astro check` and `npm run build` pass.
- Check the page at 375, 768, 1280 x 800, 1440 x 900 and 1920 wide: no horizontal scroll, the hero fits, nothing overlaps.
- Search the diff for `#`, `rgb(`, `uppercase`, `letter-spacing`, `·`, `→`, `—`, `transition: all`.

## Waivers
Deliberate exceptions, each with its reason. Add new ones here and in the stamp at the top of `global.css`.

- **Wordmark spring** (`.lt`, `catBump` in `global.css`): the CATALYST letters spring back when the header uncollapses. It is the brand's one character moment, not UI state.
- **Home hero bloom** (`.hero` in `index.astro`) and the Journey scene cards: the blue radial bloom is the brand surface itself.
- **Product screen mocks** (`src/components/screens/`, `src/components/step-art/`): they copy the product's own interface, so they keep its own palette, capitals and separators. Replace them with real screenshots when they can be captured.
