# RockyOS — Design System Specification

**Document ID:** RDU-DS-001  
**Version:** 1.0.0 (Foundation Edition)  
**Status:** Approved  
**Last Updated:** August 31, 2026  
**Design Lead & Architect:** Rocky  

---

# 1. Purpose

The Design System establishes the visual, interactive, and emotional design tokens and component standards for **RockyOS (Rocky's Digital Universe)**.

Its purpose is not merely to maintain visual consistency, but to engineer an enduring digital experience reflecting Rocky's core philosophy: growth, engineering discipline, and human connection across cultures.

Every design choice, layout proportion, and micro-animation reinforces one foundational axiom:

> **"Technology should feel human."**  
> *「技术的终极归宿是人性的温度。」*

---

# 2. Design Philosophy

RockyOS is not built to impress with superficial fireworks; it is designed to be **remembered**.

```
+-----------------------------------------------------------------------------------+
|                           THE DESIGN TRIANGLE OF ROCKYOS                          |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                               HUMANITY (Warmth)                                   |
|                                       ▲                                           |
|                                      ╱ ╲                                          |
|                                     ╱   ╲                                         |
|                                    ╱  ★  ╲                                        |
|                                   ╱       ╲                                       |
|                                  ▼─────────▼                                      |
|             ENGINEERING (Precision)       LONG-TERMISM (Simplicity)               |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### 2.1 Human × Technology
Technology should never feel cold, alien, or indifferent. The synthesis of human warmth and machine intelligence is the foundational narrative of RockyOS. Visuals balance mathematical precision with tactile empathy.

### 2.2 Simplicity Creates Confidence
Minimal interfaces dramatically reduce cognitive friction. Visitors should invest their attention in Rocky's ideas, code, and growth trajectory — not fighting through UI clutter. Nothing exists purely for decorative excess; every pixel serves communication.

### 2.3 Motion Creates Emotion
Motion should explain, guide, and ground the visitor — never distract or disorient. Animations communicate spatial hierarchy, physical continuity, and state changes.

### 2.4 Space Creates Elegance
Whitespace is not an absence of content; it is an active architectural element. It gives ambitious ideas space to breathe and establishes visual calm.

---

# 3. Design DNA

RockyOS fuses the finest design disciplines of modern computing into a cohesive, proprietary aesthetic:

| Source of Inspiration | Distilled Quality | Application in RockyOS |
| :--- | :--- | :--- |
| **Apple** | Restraint & Storytelling | Human-centered narrative cadence, spacious typography, physical tactile feel. |
| **Linear** | Motion Precision & Keyboard UX | Snappy micro-interactions, Command Palette (`⌘K`), high-efficiency navigation. |
| **Vercel** | Developer Aesthetics & Crispness | Monospace telemetry, laser-sharp 1px borders, high-contrast typography. |
| **Stripe** | Visual Rhythm & Atmospheric Gradients | Subtle iridescent glows, frosted glassmorphism, mathematical rhythm. |
| **Anthropic** | Warmth & Editorial Readability | Warm ivory accents, readable long-form essays, thoughtful margins. |
| **OpenAI** | Clean Modern Intelligence | Purpose-driven simplicity, calm surfaces, focused dialogues. |
| **RockyOS Core** | **Humanity + AI + 10-Year Growth** | Celestial constellation map, living telemetry, native bilingual fluid engine. |

---

# 4. Visual Identity & Brand Atoms

### 4.1 Emotional Keywords
`Warm Technology` · `Cosmic Elegance` · `Architectural Precision` · `Curiosity` · `Craftsmanship` · `Timeless`

### 4.2 Brand Mark: The Orbital Singularity
The RockyOS emblem combines a 34px celestial orbital ring (representing continuous 10-year compounding evolution) with a centered cyan nucleus (representing the human core):

```
       .---.
     /   o   \      Outer Orbit: Compounding Evolution (10-Year Horizon)
    |    ●    |     Inner Nucleus: The Living Core (RockyOS)
     \       /      Trailing Comet: Continuous Growth & Exploration
       '---'
```

---

# 5. Color System & Design Tokens

Colors communicate emotional tone before typography communicates data. RockyOS employs a structured color architecture based on the **Cosmic Palette**.

## 5.1 Color Roles & Semantic Values

| Swatch | Color Name | HEX Code | CSS Token | Emotional & Functional Role |
| :--- | :--- | :--- | :--- | :--- |
| ⬛ | **Universe Black** | `#07090e` | `--bg-core` | Deep space background; represents boundless exploration. |
| ◼️ | **Surface Carbon** | `#0e121b` | `--bg-surface` | Default card & glass container background. |
| ◻️ | **Cosmic White** | `#f8fafc` | `--text-primary` | High-clarity primary typography; 100% legibility. |
| 🔷 | **AI Blue** | `#3b82f6` | `--accent-ai-blue` | Intelligence, machine synergy, primary interactive state. |
| 💠 | **Aurora Cyan** | `#06b6d4` | `--accent-cyan` | Telemetry beacons, active highlights, laser outlines. |
| 🟢 | **Growth Green** | `#10b981` | `--accent-growth-green`| Progress, health, uptime status, WeChat connection bridge. |
| 🟣 | **Knowledge Purple**| `#8b5cf6` | `--accent-purple` | Deep thinking, mental models, essays, creative curiosity. |
| 🟠 | **Signal Orange** | `#f59e0b` | `--accent-orange` | Important warnings, milestones, formative life pivots. |
| 🌌 | **Nebula Indigo** | `#6366f1` | `--accent-indigo` | Cosmic ambient glow, multi-layered gradient backdrop. |

## 5.2 Complete CSS Variable Architecture

```css
:root {
  /* -------------------------------------------------------------------------
     DARK MODE TOKENS (Default OS Theme: Universe Black)
     ------------------------------------------------------------------------- */
  --bg-core: #07090e;
  --bg-surface: #0e121b;
  --bg-surface-elevated: #151b27;
  --bg-surface-hover: #1c2434;
  --bg-glass: rgba(14, 18, 27, 0.75);
  --bg-glass-heavy: rgba(7, 9, 14, 0.88);

  /* Border Tokens */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.16);
  --border-active: rgba(6, 182, 212, 0.5);
  --border-glow: rgba(6, 182, 212, 0.3);

  /* Core Accent Palette */
  --accent-cyan: #06b6d4;
  --accent-cyan-glow: rgba(6, 182, 212, 0.28);
  --accent-ai-blue: #3b82f6;
  --accent-indigo: #6366f1;
  --accent-growth-green: #10b981;
  --accent-growth-glow: rgba(16, 185, 129, 0.25);
  --accent-purple: #8b5cf6;
  --accent-orange: #f59e0b;

  /* Typography Colors */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-inverse: #07090e;

  /* Radius Matrix */
  --radius-xs: 4px;
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 22px;
  --radius-xl: 32px;
  --radius-full: 9999px;

  /* Shadows & Holographic Elevation */
  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
  --shadow-md: 0 8px 24px -4px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 16px 40px -8px rgba(0, 0, 0, 0.65);
  --shadow-cyan-glow: 0 0 28px rgba(6, 182, 212, 0.32);
  --shadow-emerald-glow: 0 0 28px rgba(16, 185, 129, 0.3);

  /* Motion & Easing */
  --ease-spring: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  --duration-fast: 150ms;
  --duration-normal: 250ms;
  --duration-slow: 450ms;
}

/* ---------------------------------------------------------------------------
   LIGHT MODE TOKENS (Reading Paper Aesthetic)
   --------------------------------------------------------------------------- */
[data-theme="light"] {
  --bg-core: #f8fafc;
  --bg-surface: #ffffff;
  --bg-surface-elevated: #f1f5f9;
  --bg-surface-hover: #e2e8f0;
  --bg-glass: rgba(255, 255, 255, 0.85);
  --bg-glass-heavy: rgba(248, 250, 252, 0.94);

  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-medium: rgba(0, 0, 0, 0.15);
  --border-active: rgba(6, 182, 212, 0.6);
  --border-glow: rgba(6, 182, 212, 0.2);

  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #94a3b8;
  --text-inverse: #ffffff;

  --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.04);
  --shadow-md: 0 8px 24px -4px rgba(0, 0, 0, 0.08);
  --shadow-lg: 0 16px 40px -8px rgba(0, 0, 0, 0.12);
  --shadow-cyan-glow: 0 0 28px rgba(6, 182, 212, 0.18);
}
```

---

# 6. Typography System (Dual-Language Optimized)

Typography is the supreme carrier of thought. Chinese characters and Latin letterforms have fundamentally distinct typographic weights, proportions, and reading cadences.

## 6.1 Font Stack Hierarchy

```css
/* Monospace Telemetry & System Status */
--font-mono: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;

/* Western / Latin Primary Font Stack */
--font-sans-en: 'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

/* Chinese / CJK Font Stack (Prioritizes native Apple & Windows CJK engines) */
--font-sans-zh: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", "Noto Sans SC", sans-serif;

/* Japanese Font Stack */
--font-sans-ja: -apple-system, BlinkMacSystemFont, "Hiragino Kaku Gothic ProN", "Yu Gothic", "Meiryo", "Noto Sans JP", sans-serif;
```

## 6.2 Typographic Hierarchy & Scale

| Style Level | Desktop Size | Mobile Size | Weight | Line Height (EN) | Line Height (ZH) | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Hero** | 64px / 4.0rem | 36px / 2.25rem | 800 | 1.12 | 1.25 | -0.03em |
| **H1 (World Title)** | 42px / 2.625rem | 28px / 1.75rem | 700 | 1.20 | 1.35 | -0.02em |
| **H2 (Section Heading)**| 32px / 2.0rem | 24px / 1.5rem | 700 | 1.28 | 1.45 | -0.015em |
| **H3 (Card Title)** | 22px / 1.375rem | 18px / 1.125rem | 600 | 1.35 | 1.55 | -0.01em |
| **Body Large** | 18px / 1.125rem | 16px / 1.0rem | 400 | 1.68 | **1.78 (Comfortable)** | normal |
| **Body Regular** | 16px / 1.0rem | 15px / 0.9375rem| 400 | 1.65 | **1.75 (Standard)**| normal |
| **Telemetry / Caption** | 13px / 0.8125rem| 12px / 0.75rem | 500 (Mono) | 1.45 | 1.55 | +0.06em (Uppercase) |
| **Code / Data** | 14px / 0.875rem | 13px / 0.8125rem| 500 (Mono) | 1.60 | 1.60 | 0.00em |

> **Critical Typographic Rule for Chinese (`zh-CN`):**  
> Chinese characters are square glyphs with uniform density. Setting line-height below `1.70` causes severe visual fatigue. In RockyOS, Chinese body text is strictly rendered at `line-height: 1.75 – 1.80` with a subtle `letter-spacing: +0.02em`.

---

# 7. Grid & Spatial Layout System

The spatial system enforces clean architectural alignment across all form factors.

```
+-----------------------------------------------------------------------------------+
|  12-Column Desktop Grid (Max: 1440px Centered)                                    |
|  [ Col ][ Col ][ Col ][ Col ][ Col ][ Col ][ Col ][ Col ][ Col ][ Col ][ Col ][ Col ] |
|  |<--- 24px Gutter --->|                                                          |
+-----------------------------------------------------------------------------------+
```

### 7.1 Viewport Breakpoints & Grids

| Device Tier | Breakpoint | Grid Columns | Margin Padding | Gutter Width | Maximum Container |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Desktop Ultra** | `> 1440px` | 12 Columns | 48px | 28px | 1360px |
| **Laptop / Desktop**| `1024px – 1440px` | 12 Columns | 32px | 24px | 1200px |
| **Tablet** | `768px – 1023px` | 8 Columns | 24px | 20px | 100% Fluid |
| **Mobile** | `< 768px` | 4 Columns | 16px | 16px | 100% Fluid |

### 7.2 Whitespace Scale (The Breathing Rhythm)
Whitespace values are multiples of 4 and 8:
- `--space-1`: `4px`
- `--space-2`: `8px`
- `--space-3`: `12px`
- `--space-4`: `16px`
- `--space-6`: `24px`
- `--space-8`: `32px`
- `--space-12`: `48px`
- `--space-16`: `64px`
- `--space-24`: `96px`

---

# 8. Component Design Specifications

Every interface element in RockyOS conforms to three strict rules:
1. **Understandable** (Zero ambiguity in function)
2. **Useful** (Directly solves a communication or navigation need)
3. **Beautiful** (Exquisite craftsmanship and micro-feedback)

---

### 8.1 Buttons & Action Triggers

```
[ Primary Action ]   [ Secondary Border ]   [ WeChat Connector ]
+------------------+  +--------------------+  +--------------------+
| Explore Matrix → |  | Contact Channel    |  | 微信扫码连接 💬     |
+------------------+  +--------------------+  +--------------------+
 (Cyan Gradient)       (Slate Elevated)       (Emerald Glow)
```

- **Primary Button**: Gradient fill (`linear-gradient(135deg, var(--accent-cyan), var(--accent-indigo))`), white text, subtle cyan drop shadow.
  - Hover: `transform: translateY(-2px); box-shadow: var(--shadow-cyan-glow);`
  - Active: `transform: translateY(0);`
- **Secondary Button**: Frosted carbon surface (`var(--bg-surface-elevated)`), 1px border (`var(--border-subtle)`).
  - Hover: `border-color: var(--accent-cyan); color: #fff;`
- **WeChat Direct Button**: Deep emerald tint (`rgba(16, 185, 129, 0.12)`), green border (`rgba(16, 185, 129, 0.35)`).
  - Hover: `box-shadow: var(--shadow-emerald-glow); border-color: #10b981;`

---

### 8.2 Bento Grid Cards

Bento grid cards feature asymmetric dimensions to establish visual hierarchy:
- **Surface**: `backdrop-filter: blur(16px); background: var(--bg-glass);`
- **Border**: `1px solid var(--border-subtle)`
- **Hover Micro-Interaction**:
  - Border transitions to `rgba(6, 182, 212, 0.45)`.
  - Card rises by `4px` with smooth spring easing.
  - Subtle radial gradient glow tracks cursor position.

---

### 8.3 WeChat Interactive QR Modal

A specialized component designed for Chinese partner walkthroughs:
- **Backdrop**: Dark blur overlay (`rgba(0, 0, 0, 0.78); backdrop-filter: blur(12px)`).
- **Modal Surface**: Centered card with scale-in animation (`scale(0.95) -> scale(1.0)` over 250ms).
- **Scanning Animation**: Vertical laser scan line looping continuously across the QR code.
- **Click-to-Copy Feedback**: Clicking "Copy WeChat ID" swaps button state to green with `Copied! / 已复制！` for 2 seconds.

---

### 8.4 Command Palette (`⌘K` / `Ctrl+K`)

- **Appearance**: Floating center spotlight modal (`max-width: 620px`).
- **Input Field**: High-contrast search input with blinking cyan cursor.
- **Results List**: Categorized search hits (`Worlds`, `Projects`, `Knowledge`, `Actions`).
- **Keyboard Ergonomics**: `↑` and `↓` navigate rows; `Enter` selects; `Esc` dismisses.

---

# 9. Motion & Animation System

Animations in RockyOS are physical, purposeful, and calibrated to avoid cognitive exhaustion.

```
                  PHYSICAL EASING CURVE
           1.0 |                   .------
               |                .-'
               |              .'
               |            .'
               |          .'
           0.0 +--------------------------
               0.0                       1.0
               cubic-bezier(0.16, 1, 0.3, 1)
```

### 9.1 Timing Standards

| Interaction Type | Duration | Easing Curve | Purpose |
| :--- | :--- | :--- | :--- |
| **Hover Feedback** | `150ms` | `ease-out` | Immediate tactile acknowledgement |
| **Button Click / Tap** | `120ms` | `var(--ease-spring)` | Physical compression feedback |
| **Modal Scale In/Out** | `250ms` | `var(--ease-spring)` | Natural physical expansion |
| **Language Crossfade** | `180ms` | `linear` | Seamless, flicker-free text swap |
| **Page / Section Glide**| `550ms` | `cubic-bezier(0.22, 1, 0.36, 1)` | Cinematic momentum scroll |
| **Opening Prologue** | `12–15s` | Staged timeline | Emotional Human-AI narrative |

### 9.2 Reduced Motion Compliance
For users who enable `prefers-reduced-motion: reduce`:
- Transform translations are reduced to `0px`.
- Animations switch to subtle instant opacity fades.
- The 4-scene prologue displays a serene, static narrative card.

---

# 10. Interactive Cursor System (Desktop)

On non-touch devices, the cursor becomes an exploratory compass:
1. **Default State**: A 6px cyan core with a soft 28px ambient halo following with subtle spring lag.
2. **Hovering Clickable Elements**: The cursor magnetic-snaps to button centers; halo expands to 48px with a blur aura.
3. **Hovering Text / Reading Mode**: Cursor transitions into a crisp, high-visibility vertical reading beam.
4. **Touch Fallback**: Automatically disabled on mobile/tablet devices to conserve battery and avoid touch latency.

---

# 11. Iconography Standards

- **Style**: Geometric outline with rounded joins (`stroke-width: 2px; stroke-linecap: round; stroke-linejoin: round`).
- **Size Grid**: Standardized at `16×16px`, `20×20px`, and `24×24px`.
- **Purpose**: Every icon directly reinforces comprehension (e.g., terminal icon for code, flask for laboratory, radar beacon for telemetry).

---

# 12. Imagery & Asset Integrity

- **Authenticity First**: Zero generic corporate stock photos (no fake smiling models in glass conference rooms).
- **Real Screenshots & Schematics**: Real code snippets, actual project architectures, and authentic personal moments.
- **Format**: Vector SVGs for illustrations and icons; modern WebP/AVIF for photographic assets.

---

# 13. Accessibility (a11y) Guarantee

- **Contrast Ratios**: Body text achieves at least `7:1` AAA contrast ratio against Universe Black; secondary text achieves `>= 4.5:1` AA ratio.
- **Focus Rings**: High-visibility cyan outline (`outline: 2px solid var(--accent-cyan); outline-offset: 3px`).
- **Screen Reader Support**: All interactive buttons, modals, and language toggles carry explicit ARIA attributes (`aria-label`, `aria-expanded`, `role="dialog"`).

---

# 14. Dark & Light Theme Philosophy

- **Dark Mode (Default)**: The **Universe Black** experience. Evokes the boundless cosmos, nocturnal deep focus, and high-tech elegance.
- **Light Mode**: The **Reading Paper** experience. Soft ivory slate background (`#f8fafc`) engineered for bright daylight reading and long-form study.
- **Transition**: Smooth 350ms CSS variable fade simulating the gentle transition between day and night.

---

# 15. The Emotional Journey

Every visitor should traverse this emotional progression:

```
    CURIOSITY  ──►  EXPLORATION  ──►  DISCOVERY  ──►  CONNECTION
        ▲                                                  │
        │                                                  ▼
     RETURN   ◄───  INSPIRATION  ◄───  RESPECT   ◄─────────┘
```

1. **Curiosity**: The opening prologue and Universe Map spark wonder.
2. **Exploration**: Fluid navigation invites the visitor to explore the 6 Worlds.
3. **Discovery**: Finding deep mental models, high-performance web systems, and genuine growth logs.
4. **Connection**: Effortless contact via WeChat QR or direct transmission.
5. **Respect**: Recognizing rigorous craftsmanship and authentic execution.
6. **Inspiration**: Leaving inspired to build, write, and create in their own life.
7. **Return**: Returning to RockyOS as a living compass over the next decade.

---

# 16. Design Principles Summary

1. **Technology should feel human.**
2. **Less interface, more understanding.**
3. **Every interaction teaches; every page tells a story.**
4. **Every animation has intention; never animate for decoration alone.**
5. **Growth never stops.**
6. **Consistency creates trust; elegance comes from restraint.**
7. **Curiosity drives exploration; humanity always comes first.**

---

# 17. Design Motto

> **Design is not decoration.**  
> **Design is communication.**  
> **RockyOS is not designed merely to look beautiful.**  
> **It is designed to be meaningful.**  
> *「设计不是装饰，设计是心智的沟通。RockyOS 并非因美丽而生，而是因有意义而存在。」*