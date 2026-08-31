# RockyOS — Product Requirements Document (PRD)

**Document ID:** RDU-PRD-001  
**Version:** 1.0.0 (Foundation Edition)  
**Status:** Approved  
**Last Updated:** August 31, 2026  
**Architect:** Rocky  

---

# 1. Purpose

This document establishes the official functional, architectural, and experiential requirements for **Rocky's Digital Universe (RockyOS)**.

Unlike traditional portfolio websites, résumés, or personal blogs, RockyOS is architected as an evolving, lifelong **Personal Operating System** designed to compound in value over a 10-year horizon (2024–2034). 

Every requirement defined herein serves the Product Vision: to preserve experience, demonstrate authentic execution capabilities, organize knowledge, inspire continuous learning, and foster deep human connections across cultures.

---

# 2. Product Scope & The Six Core Systems

RockyOS integrates six major systems into one seamless digital ecosystem. The experience is not a collection of fragmented links; it is a unified digital habitat.

```
+-----------------------------------------------------------------------------------+
|                        ROCKY'S DIGITAL UNIVERSE (ROCKYOS)                         |
|                         [ Personal Operating System ]                             |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [01] IDENTITY SYSTEM     [02] CAPABILITY SYSTEM     [03] KNOWLEDGE SYSTEM        |
|  - Who I am               - What I can build         - What I know & learn        |
|  - Bio, Story, Values     - Projects, Stack, Specs   - Deep essays, notes, AI     |
|                                                                                   |
|  [04] LABORATORY SYSTEM   [05] CONNECTION SYSTEM     [06] GROWTH SYSTEM           |
|  - Where ideas experiment - Connecting with people   - Recording the journey      |
|  - AI Demos, Tools, Lab   - WeChat, Email, Global    - 10-Yr Timeline, Changelog  |
|                                                                                   |
+-----------------------------------------------------------------------------------+
|            [ CINEMATIC OPENING ]  <--->  [ OS DASHBOARD & TELEMETRY ]             |
+-----------------------------------------------------------------------------------+
```

---

# 3. Target Platforms & Viewport Specifications

RockyOS must deliver an uncompromising, first-class experience across all modern form factors.

### 3.1 Desktop (1440px – 4K+)
- **Role**: The ultimate visual, storytelling, and interactive environment.
- **Experience**: Cinematic ambient canvas, multi-column bento grids, magnetic cursor effects, full OS telemetry bar, and spatial audio feedback (optional/subtle).

### 3.2 Laptop (1024px – 1439px)
- **Role**: Core professional evaluation environment.
- **Experience**: 100% feature parity with desktop, optimized layout scaling, responsive bento grids.

### 3.3 Tablet (768px – 1023px)
- **Role**: Tactile exploration.
- **Experience**: Two-column adaptive grid, touch-optimized gestures, fluid card interactions.

### 3.4 Mobile (360px – 767px)
- **Role**: High-speed, on-the-go discovery and client presentation.
- **Experience**: **Not a scaled-down desktop.** An intentionally crafted mobile operating interface:
  - Touch target size: Minimum 48 × 48 px.
  - Sticky glass header with instant one-tap language switch (`[ EN | 中文 ]`).
  - Single-column card stacking with swipe gestures.
  - Instant mobile WeChat QR modal and direct contact action sheets.

---

# 4. Internationalization (i18n)

RockyOS is designed from day one as a global platform connecting Western tech ecosystems with Chinese business and developer communities.

### 4.1 Supported Languages
- 🇺🇸 **English (Default)**: Primary language for international tech peers, global collaborators, and founders.
- 🇨🇳 **简体中文 (Simplified Chinese)**: Native experience for Chinese clients, business partners, and domestic collaboration.
- 🇩🇪 **Deutsch (German)**: European engineering precision standard.
- 🇫🇷 **Français (French)**: International diplomacy & design standard.
- 🇯🇵 **日本語 (Japanese)**: Craftsmanship & tech culture standard.

### 4.2 Core i18n Requirements
- **Instant Client-Side Switching**: Language toggle transitions sub-16ms without page reload or layout shift.
- **Zero "Machine-Translated" Tone**: Copy in each language must read with native fluency, cultural nuance, and professional resonance.
- **Bilingual Presentation Ergonomics**: Rocky can flip the site to Chinese during meetings with one click to demonstrate every module clearly to Chinese clients.
- **Persistent Preference**: Chosen language is saved to `localStorage` and automatically sets `document.documentElement.lang`.
- **Dynamic SEO**: Dynamic OpenGraph tags and hreflang meta tags for multi-language indexing.

---

# 5. The Opening Experience: Human & AI Collaboration

## 5.1 Narrative Intent
The website does not open with a spinning wheel or generic loader. It opens with an interactive cinematic narrative expressing Rocky's foundational philosophy toward Artificial Intelligence:

> **"From questioning, to understanding, to transcending together."**

## 5.2 The Four Cinematic Scenes

```
+------------------------------------------------------------------------------+
| SCENE 1: THE HESITATION                                                      |
| Visual: Human silhouette withdraws hand from robot's outstretched hand.      |
| Message: "I questioned AI."                                                  |
| Emotion: Skepticism, curiosity, distance.                                    |
+------------------------------------------------------------------------------+
                                      │
                                      ▼
+------------------------------------------------------------------------------+
| SCENE 2: THE HANDSHAKE                                                       |
| Visual: Human steps forward, accepting the robot's handshake in warm light.  |
| Message: "I learned to work with AI."                                        |
| Emotion: Trust, empathy, active collaboration.                               |
+------------------------------------------------------------------------------+
                                      │
                                      ▼
+------------------------------------------------------------------------------+
| SCENE 3: THE ALLIANCE                                                        |
| Visual: Human and robot stand side by side, raising thumbs together.         |
| Message: "Together, we achieved more than either of us could alone."         |
| Emotion: Partnership, multiplier effect, shared victory.                     |
+------------------------------------------------------------------------------+
                                      │
                                      ▼
+------------------------------------------------------------------------------+
| SCENE 4: THE THRESHOLD & THE 4 KNOCKS                                        |
| Visual: Both stand before a massive, glowing closed vault door.              |
| Interaction: They knock together 4 times:                                    |
|   Knock 1 -> "I questioned AI."                                              |
|   Knock 2 -> "I learned to work with AI."                                    |
|   Knock 3 -> "I began to see what we could become together."                 |
|   Knock 4 -> The door smoothly unlatches and slides open.                    |
| Transition: Camera glides forward through the door straight into RockyOS.     |
+------------------------------------------------------------------------------+
```

## 5.3 UX & Accessibility Guardrails
- **Skippable**: A subtle `[ Skip Narrative / 跳过 ]` button in the corner allows returning visitors to enter immediately.
- **Replayable**: An OS topbar action (`Replay Prologue`) allows visitors to revisit the experience anytime.
- **Visit Memory**: Skips automatically on repeat visits within 24 hours (`localStorage.getItem('rocky_seen_intro')`).
- **Reduced Motion**: Respects `prefers-reduced-motion: reduce`, displaying a graceful static card instead of intense transitions.

---

# 6. Homepage: The OS Dashboard

The homepage is not a landing page; it is the **Operating System Dashboard**.

### 6.1 Telemetry & System Header
- **Brand Identity**: `ROCKYOS // DIGITAL UNIVERSE` with cosmic orbital logo.
- **System Telemetry Beacon**: Live pulsating green light: `SYSTEM: ONLINE // 99.99% UPTIME`.
- **System Clock**: Real-time UTC / Local time display (`HH:MM:SS`).
- **Control Center**: Instant language selector (`[ EN | 中文 | DE | FR | JA ]`), Dark/Light mode toggle, and Quick Connect CTA.

### 6.2 Hero Kernel
- **Display Title**: *"Not a Portfolio. My Personal Operating System."*
- **Vision Statement**: The authentic 10-year mission statement in the active language.
- **Primary CTAs**:
  - Primary: `Explore Capabilities / 探索能力` (Smooth navigation to Capability System).
  - Secondary: `Initiate Connection / 建立连接` (Smooth navigation to Connection System).
  - Fast-Action: `WeChat Connect / 微信扫码` (Instant popup of WeChat QR Modal).
- **Core Telemetry Badges**: 10-Year Horizon, 6 Interconnected Systems, 100% Native Bilingual, 24/7 Open Bridge.

---

# 7. Detailed Requirements for the Six Core Systems

## 7.1 System 01 — Identity System (Who I Am)
- **Purpose**: Present the human being, philosophy, and values behind the technology.
- **Contents**:
  - Narrative Biography & Personal Story (Life journey, origins, mindset).
  - Core Personal Values (Craftsmanship, Long-termism, Intellectual Honesty).
  - Interests & Dimension: Lifelong learning, reading, technology, philosophy.
- **Interactive Component**: Visual timeline of formative milestones.

## 7.2 System 02 — Capability System (What I Can Build)
- **Purpose**: Demonstrate tangible execution rather than hollow self-promotion.
- **Contents**:
  - High-performance Full-Stack Web Applications (Sub-second load times, modern CSS).
  - AI & Intelligent Systems (LLM orchestration, agentic pipelines, prompt ops).
  - System Architecture & Engineering Standards (Clean boundaries, modularity).
  - Interactive Project Showcase with live demo links, GitHub repos, and architecture diagrams.
- **Layout**: Bento-grid with hover elevation, category filtering, and tech stack tags.

## 7.3 System 03 — Knowledge System (What I Know & Continue to Learn)
- **Purpose**: Transform personal learning into public value (Build in Public).
- **Contents**:
  - Technical Articles & Engineering Deep-Dives.
  - Mental Models & Frameworks (System thinking, decision making).
  - Curated Book Notes & Reading Reflections.
- **Features**: Reading time estimator, category filtering, clean distraction-free reading view.

## 7.4 System 04 — Laboratory System (Where Ideas Become Experiments)
- **Purpose**: A playground for continuous innovation, interactive tools, and creative exploration.
- **Contents**:
  - AI Studio Prompt Library & Live Interactive Demos.
  - Automation scripts and developer mini-tools.
  - Prototype sandbox for experimental UI/UX patterns.
- **Features**: Interactive input fields, live code runner / demo toggles.

## 7.5 System 05 — Connection System (Connecting with People)
- **Purpose**: Remove all friction between discovering Rocky and having a meaningful conversation.
- **Contents**:
  - **Interactive WeChat (微信) QR Modal**:
    - High-res QR code with animated scanning line.
    - Rocky's WeChat ID display.
    - One-click "Copy ID" with instant feedback tooltip.
  - **Direct Contact Form**: Clean form with validation (Name, Email/WeChat, Project Scope).
  - **Direct Email**: Click-to-copy email badge with mailto fallback.
  - **Global Channels**: Verified links to GitHub, LinkedIn, X (Twitter).

## 7.6 System 06 — Growth System (Recording the Journey)
- **Purpose**: Demonstrate ongoing momentum and compounding growth over a 10-year horizon.
- **Contents**:
  - The 10-Year Evolution Roadmap (2024–2034).
  - Living Changelog & Milestone Release Notes.
  - Monthly & Annual Retrospectives.
- **Features**: Filter by tag (`#Milestone`, `#Architecture`, `#Reflection`).

---

# 8. Interaction & Motion Design

Interaction quality is treated as a first-class feature.

### 8.1 Motion Principles
- **Intentionality**: Never animate for decoration alone. Motion communicates spatial depth, hierarchy, and state changes.
- **60 FPS Performance**: Hardware-accelerated transforms (`transform`, `opacity`) without layout thrashing.
- **Cinematic Flow**: Smooth momentum scrolling and subtle parallax between ambient layers.

### 8.2 Micro-Interactions
- **Cards & Bento Grid**: Hover elevation (+4px), border illumination (Cyber Cyan / Emerald glow), and cursor-following radial gradient.
- **Interactive Cursor (Desktop)**: Custom magnetic cursor that snaps to interactive buttons, emits a subtle ambient particle aura, and expands when hovering text.
- **Language Switch**: Smooth 150ms crossfade with horizontal pill slider easing (`cubic-bezier(0.16, 1, 0.3, 1)`).

---

# 9. Visual Design & Theme System

### 9.1 Visual Aesthetic: "Warm Cyber Futurism"
- **Mood**: Elegant, minimal, sophisticated, futuristic, yet warm and human-centered.
- **Core Dark Palette (Default)**: Deep Space Obsidian (`#07090e`), Surface Carbon (`#0e121b`), Elevated Slate (`#151b27`).
- **Core Accents**:
  - Cyber Cyan (`#06b6d4`): Intelligence, clarity, architecture.
  - Electric Indigo (`#6366f1`): Creativity, depth, imagination.
  - Emerald Green (`#10b981`): Health, uptime, WeChat connection.
  - Amber Gold (`#f59e0b`): Milestones, wisdom, warmth.
- **Light Theme**: Clean titanium paper aesthetic (`#f8fafc` background, `#0f172a` typography) for bright-room readability.

### 9.2 Typography Hierarchy
- **Latin Sans**: `Space Grotesk` (Headlines) & `Inter` (Body).
- **Chinese / CJK**: `-apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC"`.
- **CJK Line Height**: Maintained strictly at `1.75`–`1.8` for superior Chinese character legibility.
- **Monospace Telemetry**: `JetBrains Mono` / `Consolas`.

---

# 10. Module Page Architecture

Every one of the Six Core Systems has a dedicated, full-page experience:
1. **Hero Section**: System title, philosophy quote, and status telemetry.
2. **Overview**: Executive summary of what this system contains and why it matters.
3. **Detailed Content**: The full meat (articles, projects, interactive sandbox, bio timeline).
4. **Interactive Components**: Filters, search bars, modals, live demos.
5. **Clear Navigation & Return Path**: Effortless return to the OS Dashboard hub.

---

# 11. Performance & Non-Functional Requirements (NFR)

### 11.1 Performance Targets
- **Core Web Vitals**:
  - First Contentful Paint (FCP): < 0.6s
  - Largest Contentful Paint (LCP): < 1.0s
  - Cumulative Layout Shift (CLS): 0.00
  - First Input Delay (FID): < 10ms
- **Asset Overhead**: Total initial HTML + CSS + JS payload < 100 KB uncompressed.

### 11.2 Accessibility (a11y)
- WCAG 2.1 Level AA compliance.
- Keyboard navigability with visible focus indicators.
- Respects `prefers-reduced-motion`.
- Proper ARIA attributes for modals, language switchers, and tabs.

### 11.3 Security & Reliability
- 100% static client-side generation; zero database attack surface.
- Content Security Policy (CSP) compliant.
- Strict HTTPS enforcement.

---

# 12. Functional Requirements Checklist (Must Haves)

| Requirement | Description | Status |
| :--- | :--- | :--- |
| **FR-01: Responsive Engine** | Flawless rendering from 360px mobile to 4K desktop | ✅ Core Implemented |
| **FR-02: Multi-Language Switch** | Instant client-side i18n (EN, ZH, DE, FR, JA) | ✅ EN/ZH Implemented, Expandable |
| **FR-03: Opening Experience** | 4-Scene Human & AI collaborative narrative | 📋 In Roadmap |
| **FR-04: OS Dashboard Header** | Telemetry beacon, live UTC clock, theme & lang toggles | ✅ Core Implemented |
| **FR-05: Six Core Systems** | Identity, Capability, Knowledge, Lab, Connection, Growth | ✅ Architecture Formalized |
| **FR-06: WeChat QR Integration** | Modal popup with scanning line and click-to-copy ID | ✅ Core Implemented |
| **FR-07: Interactive Bento Grid** | Hover elevation, tech badges, and capability cards | ✅ Core Implemented |
| **FR-08: 10-Year Timeline Log** | Chronological roadmap and milestone tracker | ✅ Core Implemented |
| **FR-09: Knowledge Vault** | High-density reading cards and mental model summaries | ✅ Core Implemented |
| **FR-10: Contact Center** | Direct inquiry form with local validation + mailto | ✅ Core Implemented |
| **FR-11: Dark & Light Themes** | Instant theme toggle with localStorage persistence | ✅ Core Implemented |
| **FR-12: SEO & Meta Standards** | Semantic HTML5, OpenGraph, dynamic title & lang tag | ✅ Core Implemented |

---

# 13. Future Evolution Roadmap (Expansion Systems)

1. **RockyGPT / AI Companion**: An intelligent conversational agent trained on Rocky's writing, mental models, and code to converse with visitors 24/7.
2. **Interactive Knowledge Graph**: 3D force-directed graph visualizing relationships between articles, projects, and concepts.
3. **Digital Memory Archive**: Searchable repository of curated books, highlights, and historical code snippets.
4. **Voice Navigation**: Optional voice command recognition for hands-free OS exploration.
5. **Open API**: Read-only JSON endpoint (`/api/v1/telemetry`) exposing RockyOS uptime and recent logs.

---

# 14. Definition of Success

RockyOS succeeds when:
- A visitor understands who Rocky is, what he builds, and what he believes within **60 seconds**.
- An employer or partner immediately trusts Rocky's execution competence.
- A Chinese customer enjoys a friction-free, culturally fluent walkthrough and easily adds Rocky on WeChat.
- A fellow developer gains a useful mental model or technical insight.
- Future Rocky can look back 5 or 10 years from now and see a clean, authentic, compounding record of personal evolution.
- The website becomes more valuable with every passing year.

---

# 15. Product Motto

> **Build. Learn. Share. Connect. Grow. Forever.**  
> *建造。学习。分享。连接。进化。直至永远。*
