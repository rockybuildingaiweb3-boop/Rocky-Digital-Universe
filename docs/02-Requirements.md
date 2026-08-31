# 02. Requirements Specification: Rocky's Digital Universe

This document details the functional and non-functional requirements for **Rocky's Digital Universe (RockyOS)**.

---

## 1. Product Objectives & Target Personas

### 1.1 Core Objectives
1. **Personal Brand & Authority**: Project Rocky as a forward-thinking, technically proficient, and articulate builder with an international outlook.
2. **Effortless Bilingual Demonstration**: Enable Rocky to switch from native English to Chinese instantly with one click during customer pitches, interviews, or consultations.
3. **Frictionless Communication**: Enable rapid connection via both global channels (Email, GitHub, LinkedIn, X) and Chinese domestic channels (WeChat 微信).
4. **Living Chronology**: Provide a sustainable structure for publishing updates, logs, and essays over a 10-year period (2024–2034).

### 1.2 Target Personas
- **International Tech Partners / Clients**: Looking for top-tier engineers/builders with fluent English and modern execution capabilities.
- **Chinese Enterprise / Business Clients**: Need clear, native Chinese explanations of services, reliability guarantees, and direct WeChat communication.
- **Fellow Developers & Thinkers**: Seeking deep-dive technical insights, mental models, and personal operating frameworks.

---

## 2. Functional Requirements (FR)

### FR-01: Global Navigation & OS Status Header
- **FR-01.1**: Display system identity: `ROCKY // OS` / `Rocky's Digital Universe`.
- **FR-01.2**: Live Telemetry Badge: Show real-time local clock and `SYSTEM STATUS: NORMAL // UPTIME 99.99%`.
- **FR-01.3**: Language Switcher: High-contrast toggle button `[ EN | 简体中文 ]`. Clicking immediately translates the UI without page reload and persists selection to `localStorage`.
- **FR-01.4**: Theme Switcher: Dark / Light mode toggle with smooth CSS variable transition.
- **FR-01.5**: Smooth Navigation Anchor Links: Links to `Vision`, `Growth Log`, `Capabilities`, `Vault`, and `Connect`.

### FR-02: Hero & Vision Kernel
- **FR-02.1**: Prominent headline defining the vision: *"Not a Portfolio. My Personal Operating System."*
- **FR-02.2**: Bilingual Mission Statement paragraph explaining the 10-year evolutionary journey.
- **FR-02.3**: Dual Call-to-Action buttons:
  - Primary: `Explore Capabilities / 探索能力` (smooth scroll to Capability Matrix).
  - Secondary: `Initiate Connection / 建立连接` (smooth scroll to Nexus Connect).
- **FR-02.4**: Live Stat Badges: Display key metrics (e.g. `10-Year Horizon`, `Bilingual Native`, `Continuous Delivery`).

### FR-03: Pillar 1 — Growth Log (记录成长)
- **FR-03.1**: Chronological timeline displaying evolution stages (e.g. `2024 - Present: Foundation & Expansion`, `Future: 2026-2034 Roadmap`).
- **FR-03.2**: Tagging system for entries (e.g. `Milestone`, `System Upgrade`, `Reflection`, `Architecture`).
- **FR-03.3**: Interactive toggle to expand/collapse detailed release notes.

### FR-04: Pillar 2 — Capability Matrix (展示能力)
- **FR-04.1**: Bento-grid layout presenting core capabilities:
  - Full-Stack Architecture & High-Performance Web
  - AI & Intelligent Automation Systems
  - Product Strategy & User-Centric Engineering
  - Cross-Border Solutions & Bilingual Execution
- **FR-04.2**: Visual skill tags (e.g. `TypeScript`, `Python`, `Next.js`, `Cloud Architecture`, `AI Studio`).
- **FR-04.3**: Hover elevation effect with subtle cyber glow.

### FR-05: Pillar 3 — Knowledge Vault (分享知识)
- **FR-05.1**: Curated card grid of Rocky's mental models, essays, and technical notes.
- **FR-05.2**: Reading time indicators, category pills (`System Thinking`, `Engineering`, `Productivity`), and publish dates.
- **FR-05.3**: External or modal preview support for deep reading.

### FR-06: Pillar 4 — Nexus Connect & WeChat Bridge (连接他人)
- **FR-06.1**: Direct Contact Form with input validation (Name, Email, Message).
- **FR-06.2**: **Interactive WeChat (微信) QR Code Trigger**:
  - Clicking "WeChat / 微信" opens a centered modal with a high-resolution QR code, Rocky's WeChat ID, and a "Click to Copy WeChat ID" button with instant feedback tooltip.
- **FR-06.3**: Direct email `mailto:` and copy-to-clipboard button.
- **FR-06.4**: Social links: GitHub, LinkedIn, X (Twitter).

### FR-07: Footer & ICP Record Support
- **FR-07.1**: System copyright with dynamic year.
- **FR-07.2**: International format and placeholder for Chinese regulatory filing (`ICP Record / 粤ICP备XXXXXXXX号`) when deployed domestically or viewed in Chinese mode.

---

## 3. Non-Functional Requirements (NFR)

### 3.1 Performance & Speed
- **Load Time**: < 1.0s first contentful paint (FCP) on modern broadband.
- **Zero Heavy Framework Lock-in**: Pure HTML5, modern modular CSS, and vanilla JS.
- **Asset Size**: Optimized SVG icons and clean CSS styling without megabyte-heavy vendor libraries.

### 3.2 Responsive Design & Device Support
- **Full Viewport Adaptability**: Seamless layouts from 360px (mobile phones) to 4K ultra-wide monitors.
- **Touch Ergonomics**: Minimum tap target of 44x44px for buttons and switcher controls on mobile.

### 3.3 Internationalization (i18n) & Typography
- **Zero-Latency Language Switching**: In-memory JSON dictionary; changes happen in < 16ms without network requests.
- **Font Stack Optimization**:
  - Latin: Modern grotesque sans-serif (`Space Grotesk`, `Inter`).
  - Chinese: `-apple-system, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC"`.
  - Line-height for Chinese text maintained at `1.7`–`1.8` for readability.

### 3.4 SEO & Social Sharing
- OpenGraph (OG) and Twitter card meta tags.
- Dynamic `document.documentElement.lang` update (`en` or `zh-CN`) when toggling languages.
