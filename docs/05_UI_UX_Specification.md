# RockyOS — UI / UX Specification

**Document ID:** RDU-UX-001  
**Version:** 1.0.0 (Foundation Edition)  
**Status:** Approved  
**Last Updated:** August 31, 2026  
**UX Architect:** Rocky  

---

# 1. Purpose

This document establishes the interaction specifications, motion curves, spatial ergonomics, and emotional progression for **RockyOS (Rocky's Digital Universe)**.

The objective of RockyOS is not simply functional usability.  
The objective is creating an **unforgettable, transcendent digital experience**.

Every interaction should feel intentional.  
Every transition should feel meaningful.  
Every page should feel physically alive.

---

# 2. UX Philosophy: The Living Universe

Traditional web design treats users as passive consumers scrolling flat pages. RockyOS transforms the visitor into an **active explorer of a living digital universe**.

```
+-----------------------------------------------------------------------------------+
|                            THE THREE PILLARS OF ROCKYOS UX                        |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|      01. THE INTERFACE DISAPPEARS         02. CONTINUOUS NARRATIVE FLOW           |
|      Cognitive friction drops to zero.    No dead ends, no jarring reloads;       |
|      Only ideas, code, and story remain.  every view leads into the next chapter. |
|                                                                                   |
|      03. TACTILE PHYSICALITY              04. DUAL-ECOSYSTEM ERGONOMICS           |
|      Spring physics, gravitational        Frictionless international English      |
|      cursors, and ambient breathing.      with instant one-click WeChat/Chinese.  |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

---

# 3. Comprehensive User Journeys

RockyOS tailors its experiential path depending on the visitor's state, context, and intent.

```
FIRST-TIME VISITOR FLOW
[ First Arrival ]
       │
       ▼
[ Prologue: Human × AI Collaboration (12–15s / Skippable) ]
       │
       ▼
[ The 4 Knocks: Vault Door Smoothly Unlatches ]
       │
       ▼
[ Camera Enters The Galaxy Homepage (Universe Map) ]
       │
       ▼
[ Hover & Select One of Six Celestial Worlds ]
       │
       ▼
[ Cinematic Warp Transition (600ms) into Dedicated World ]
       │
       ▼
[ Discover Deep Content, Mental Models, Code & Demos ]
       │
       ▼
[ Follow Natural Continuum Links / Command Palette (⌘K) ]
       │
       ▼
[ Return Home / Initiate Contact via WeChat or Email ]
       │
       ▼
[ Leave Inspired with Lasting Memory ]
```

```
RETURNING VISITOR FLOW
[ Return Visit (Within 24 Hours) ]
       │
       ▼
[ Direct Bypass of Prologue -> Instant Galaxy Homepage ]
       │
       ▼
[ Telemetry Ticker: "Welcome Back // What's New in v1.0.0" ]
       │
       ▼
[ ⌘K Command Palette / Quick Search / Jump to Growth Log ]
```

```
CHINESE CLIENT PRESENTATION FLOW (ROCKY'S WALKTHROUGH MODE)
[ Rocky Opens Site in Meeting / Screenshare ]
       │
       ▼
[ Default: Flawless International English UI ]
       │
       ▼
[ Rocky clicks "中文" in Header or presses ⌘K -> "切换中文" ]
       │
       ▼
[ Sub-16ms In-Place Transformation: All Copy Switches to Executive Chinese ]
       │
       ▼
[ Rocky walks through Capabilities, Architecture, and AI Demos ]
       │
       ▼
[ Rocky clicks "微信名片 / 扫码连接" -> High-Res WeChat QR Modal with Laser Scan ]
       │
       ▼
[ Client scans WeChat on phone -> Instant connection closed ]
```

---

# 4. Homepage Experience: The Galaxy Universe Map

The homepage is not a conventional landing page; it is the **Universe Map** — an interactive, living celestial constellation.

```
+-----------------------------------------------------------------------------------+
| [ROCKYOS]           [SYSTEM: ONLINE / 99.99%]  [12:34:56 UTC]       [⌘K] [EN | 中文] |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|                                 (01) IDENTITY                                     |
|                                       ●                                           |
|                                     ╱   ╲                                         |
|                                    ╱     ╲                                        |
|                   (06) GROWTH     ●───────● (02) CAPABILITY                       |
|                        │          │   ★   │          │                            |
|                        │          │ KERNEL│          │                            |
|                   (03) KNOWLEDGE  ●───────● (04) LABORATORY                       |
|                                    ╲     ╱                                        |
|                                     ╲   ╱                                         |
|                                       ●                                           |
|                                (05) CONNECTION                                    |
|                                                                                   |
|             [ Breathing Celestial Orbs · Gravitational Cursor Field ]             |
+-----------------------------------------------------------------------------------+
```

### 4.1 Ambient States & Behaviors
- **Breathing Orbs**: Each of the Six Worlds pulses with a gentle 4-second sinusoidal scale cycle (`scale(0.98) -> scale(1.02)`).
- **Gravitational Field**: Moving the desktop cursor near any planetary orb exerts subtle attraction: starlight particles bend toward the cursor.
- **Energy Filaments**: Thin neon SVG energy lines pulse between connected worlds, visually demonstrating how Knowledge feeds the Laboratory and Growth chronicles Capability.

### 4.2 Hover State
- The targeted planet smoothly expands by `8%` over `180ms`.
- Ambient radial glow deepens by `40%` with cyan/indigo iridescent lighting.
- A holographic badge fades in displaying the World's subtitle and active module count.
- Adjacent connected worlds brighten subtly in response.

### 4.3 Click Transition (Camera Warp)
- The camera smoothly accelerates toward the clicked world.
- Background stars streak into subtle motion blur lines over `600ms`.
- The clicked node expands to fill the viewport seamlessly morphing into the world's Hero header.
- **Zero jarring blank white screens; total motion continuity.**

---

# 5. Omnipresent Navigation System

Navigation must remain continuously accessible while refusing to obstruct immersion.

### 5.1 Minimal Floating OS Topbar
- Fixed glass bar (`height: 72px; backdrop-filter: blur(18px)`).
- **Left**: RockyOS Emblem with pulsing orbital ring.
- **Center**: Active world breadcrumb indicator with glowing cyan delimiter.
- **Right**: Telemetry pill (Online status + UTC clock), `⌘K` search trigger, language switcher, and theme toggle.

### 5.2 Contextual Breadcrumbs
Located directly beneath the topbar on all inner pages:
```
Universe > Capability World > Projects > AI Automation Pipeline
```
Clicking any ancestor node glides the visitor backwards in spatial depth.

### 5.3 The Command Palette (`⌘K` / `Ctrl+K`)
A keyboard-first powerhouse inspired by modern developer command centers:

```
+-----------------------------------------------------------------------+
|  🔍  Type a command or search anything...                      [ESC]  |
+-----------------------------------------------------------------------+
|  NAVIGATION                                                           |
|  ● Jump to Capability World (展示能力)                           Enter |
|  ● Jump to Knowledge Vault (知识智库)                            Enter |
|  ● Jump to Laboratory Sandbox (创新实验)                         Enter |
|                                                                       |
|  QUICK ACTIONS                                                        |
|  ⚡ Open WeChat QR Code (展开微信名片)                           Enter |
|  🌐 Switch Language to 简体中文                                 Enter |
|  🌓 Toggle Light / Dark Mode                                    Enter |
|                                                                       |
|  PROJECTS & ARTICLES                                                  |
|  📄 High-Performance Zero-Bloat Web Architecture                Enter |
|  🛠️ AI Studio Prompt Engineering Workflow                        Enter |
+-----------------------------------------------------------------------+
```

---

# 6. Uniform Page Rhythm & Visual Cadence

Every page in RockyOS conforms to an organic reading and discovery cadence:

```
+-----------------------------------------------------------------------+
| 01. HERO KERNEL                                                       |
| Title, philosophical motto, live telemetry status                     |
+-----------------------------------------------------------------------+
                                   │
                                   ▼
+-----------------------------------------------------------------------+
| 02. SYSTEM OVERVIEW                                                   |
| High-density executive summary & domain boundaries                   |
+-----------------------------------------------------------------------+
                                   │
                                   ▼
+-----------------------------------------------------------------------+
| 03. CORE DETAILED CONTENT                                             |
| Bento cards, deep-dive articles, live code, interactive sandboxes     |
+-----------------------------------------------------------------------+
                                   │
                                   ▼
+-----------------------------------------------------------------------+
| 04. RELATED WORLDS & MENTAL CONNECTIONS                               |
| Contextual bridges connecting this page to sibling worlds             |
+-----------------------------------------------------------------------+
                                   │
                                   ▼
+-----------------------------------------------------------------------+
| 05. CONTINUOUS EXPLORATION PORTAL                                     |
| "Where to travel next in the universe"                                |
+-----------------------------------------------------------------------+
                                   │
                                   ▼
+-----------------------------------------------------------------------+
| 06. HORIZON FOOTER                                                    |
| System version, last updated, philosophical quote, contact bridge     |
+-----------------------------------------------------------------------+
```

> **Absolute Rule**: **No dead ends.** Every page naturally propels the visitor toward another discovery.

---

# 7. Motion & Animation Physics Specification

RockyOS uses calibrated spring physics modeled on physical mass, friction, and inertia.

| Interaction Scope | Duration | Easing Curve | Visual Physical Property |
| :--- | :--- | :--- | :--- |
| **Opening Prologue** | `12–15s` | Sequential cinematic | Human-AI narrative timeline |
| **Camera Warp Transition** | `600ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Spatial depth flight & zoom |
| **Micro Hover State** | `150–200ms` | `ease-out` | Tactile surface lift (+4px) |
| **Bento Card Expansion** | `250–350ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Physical card unfurling |
| **WeChat Modal In/Out** | `300ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Spring scale (0.95 -> 1.0) |
| **Search Palette Spotlight** | `120ms` | `ease-out` | Instant HUD overlay |
| **Theme Transition (Day/Night)** | `400ms` | `ease-in-out` | Smooth celestial color shift |

---

# 8. Interactive Cursor System (Desktop)

On desktop and pointer-driven devices, the cursor is not an inert operating system arrow; it is an **active sensory compass**.

```
[ Normal Cursor ]       [ Hovering Button ]       [ Reading Mode ]
      ●                        (  ●  )                   |
 (6px Cyan Dot)           (48px Magnetic Halo)     (Precision Beam)
```

### State Machine of the Cursor:
1. **Normal**: Crisp 6px cyan core with a soft 24px halo trailing at `0.15` spring damping.
2. **Hovering Interactive Element**: Snaps magnetically to the center of buttons, badges, and cards; halo expands to 48px with a subtle radial blur.
3. **Active (Click / Tap Down)**: Compresses slightly (`scale(0.8)`) providing physical click feedback.
4. **Dragging**: Halo transforms into horizontal directional arrows.
5. **Loading / Telemetry**: Core dot pulses in emerald green with a miniature rotating orbital tick.
6. **Searching (`⌘K`)**: Turns into a small focused lens ring.
7. **Text / Reading**: Transforms into a high-legibility vertical cyan beam that moves smoothly across paragraphs.
8. **Disabled / Non-Interactive**: Fades to `25%` opacity.

---

# 9. Scroll & Spatial Reveal Experience

- **Momentum Scrolling**: Natural inertial gliding that never hijacks or stutters the browser's native scroll engine.
- **Single-Trigger Reveal**: As sections scroll into the viewport, elements gently rise `20px` with a subtle opacity fade from `0` to `1`. Animations trigger **only once** per session to avoid annoying flickering during re-scrolling.
- **Continuous Reading Flow**: Reading long articles or timeline logs never triggers sudden layout shifts (Cumulative Layout Shift strictly `0.00`).

---

# 10. Deep Reading Experience (Knowledge System)

Engineered for deep focus and zero distraction:
- **Optimal Line Length**: Maximum content width clamped to `720px` for comfortable eye-tracking.
- **Dynamic Table of Contents (TOC)**: Floats unobtrusively in the left margin, highlighting active headings as the reader scrolls.
- **Reading Progress Beam**: A microscopic 2px cyan line along the very top of the viewport indicating exact article progress.
- **Reading Time Metric**: Displays calculated reading time (e.g. `5 MIN READ // 1,200 WORDS`).
- **Marginalia & Mental Models**: Interactive callouts that expand when clicked, revealing supporting diagrams without losing reading context.

---

# 11. Project Case Study Experience (Capability System)

Every flagship project in the Capability World is presented as a complete engineering story:

```
[ 1. Project Hero: Title, Live Link, GitHub Repo, Primary Impact Metric ]
                                   │
                                   ▼
[ 2. The Problem Statement: Why this project needed to exist ]
                                   │
                                   ▼
[ 3. Architectural Blueprint: Clean SVG/Mermaid system diagram ]
                                   │
                                   ▼
[ 4. Visual Evidence: Real HD screenshots & interactive video demo ]
                                   │
                                   ▼
[ 5. Production Tech Stack: Verified pills with version numbers ]
                                   │
                                   ▼
[ 6. Hard-Won Lessons: Genuine engineering hurdles and mental models ]
                                   │
                                   ▼
[ 7. Related Knowledge Articles & Next Project Teaser ]
```

---

# 12. Universal Search Experience

Search is treated as a conversational query interface into RockyOS:
- **Instant Response**: Results render in `< 10ms` using in-memory token indexing.
- **Grouped Categorization**: Automatically groups results into `Worlds`, `Projects`, `Knowledge Vault`, `Lab Experiments`, and `System Commands`.
- **Fuzzy Matching**: Tolerates minor typos (e.g. searching "wechat" or "wx" surfaces the WeChat QR modal trigger).
- **Conversational Tone**: Entering questions like *"How do you use AI?"* highlights the AI Studio prompt library and the Human-AI Opening Prologue.

---

# 13. Bilingual Ergonomics (Language Switching)

- **Zero Page Reload**: State is translated instantaneously via client-side DOM mapping (`data-i18n`).
- **Scroll Preservation**: The user's exact scroll position is preserved during translation — no jumping back to the top of the page.
- **Typography Balancing**: Toggling to Chinese dynamically applies `PingFang SC` / `Microsoft YaHei` font sequences and expands line-height to `1.78` to eliminate text crowding.

---

# 14. Theme Switching: Day & Night in the Universe

- **Day / Night Metaphor**: Switching themes does not produce a harsh white flash. The background smoothly transitions across 400ms from Universe Black (`#07090e`) into Reading Paper Slate (`#f8fafc`).
- **Ambient Lighting Adjustment**: Radial background glows dim smoothly, and text colors transition with calibrated contrast curves.

---

# 15. Error & Fallback Experience

Errors are contextualized as cosmic phenomena rather than technical failures.

### 15.1 404 — Lost in the Universe
- **Visual**: A gentle drifting astronaut or celestial satellite.
- **Headline**: *"Coordinates Unknown // Lost in the Universe"*
- **Message**: *"The celestial coordinates you requested do not exist in this sector of RockyOS."*
- **Action**: One-click button `[ Return to Universe Map ]` or quick input to search.

### 15.2 500 — Temporary Disturbance
- **Headline**: *"System Telemetry Disturbance"*
- **Message**: *"RockyOS encountered an unexpected anomaly. Our automated self-healing protocols are re-aligning the system."*

### 15.3 Offline Mode
- A discrete topbar beacon turns amber: `OFFLINE CACHE ACTIVE`. All cached articles and project briefs remain 100% readable.

---

# 16. Meaningful Empty States

An empty state is treated as an active invitation to explore another corner of the universe:
- **No Search Results**: *"No celestial bodies found for this query. Explore the Knowledge Vault or press Esc to return home."*
- **No Filter Matches**: *"No projects match this specific filter. View all projects or try the Laboratory Sandbox."*

---

# 17. Skeleton Loading & Progressive Shimmer

- **Zero Spinning Wheels**: Generic circular loaders are strictly banned.
- **Soft Shimmer Skeletons**: Content placeholders display a gentle dark-slate gradient shimmer matching the exact dimensions of the incoming cards.
- **The Prologue as True Loader**: On initial load, the Human-AI opening narrative gracefully masks any background asset caching.

---

# 18. The Horizon Footer: The Invitation to Return

The footer represents the conclusion of one exploration and the open invitation for another:

```
+-----------------------------------------------------------------------------------+
|  ROCKYOS // DIGITAL UNIVERSE                                                      |
|  "People do not remember pages. People remember experiences."                     |
|                                                                                   |
|  Current Version: v1.0.0 (Foundation)    Latest Update: August 31, 2026          |
|  Active Learning: LLM Orchestration, System Architecture, Cross-Border Execution   |
|  Built with Pure Web Standards + AI Synergy                                      |
|                                                                                   |
|  [Identity]  [Capability]  [Knowledge]  [Laboratory]  [Connection]  [Growth]      |
|                                                                                   |
|  Contact: rocky@digitaluniverse.dev // WeChat: RockyUniverse_OS                   |
|  © 2024 — 2034 Rocky. All Systems Operational.                                   |
|                                                                                   |
|                   "See you in the next chapter of the journey."                   |
+-----------------------------------------------------------------------------------+
```

---

# 19. UX Principles Summary

1. **Never surprise negatively.**
2. **Reward curiosity at every junction.**
3. **Eliminate cognitive and technical friction.**
4. **Preserve context and spatial orientation.**
5. **Guide naturally without aggressive popups or nagging banners.**
6. **Make exploration deeply enjoyable.**
7. **Always leave visitors wanting to discover one more thing.**

---

# 20. Quantitative & Qualitative Success Metrics

| Metric | Target | Verification Method |
| :--- | :--- | :--- |
| **Intuitive Navigation** | > 95% of users navigate to desired world within 10s | User testing / event telemetry |
| **Bilingual Flip Latency** | < 16ms zero-reload swap | Chrome Performance Profiler |
| **WeChat Modal Conversion**| 1 click to view, 1 click to copy ID | Interaction event logging |
| **60 FPS Animation Budget** | 0 dropped frames during transitions | Chrome DevTools Frame Rate monitor |
| **Zero Layout Shift (CLS)** | CLS = 0.00 | Google Lighthouse Web Vitals |
| **Emotional Resonance** | Visitors remember Rocky's story and vision | Qualitative feedback |

---

# 21. UX Motto

> **People do not remember pages.**  
> **People remember experiences.**  
> **RockyOS exists to create experiences.**  
> *「人们不会记住网页，人们只会记住体验。RockyOS 的存在，就是为了创造难忘的体验。」*