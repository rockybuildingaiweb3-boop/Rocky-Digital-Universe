# RockyOS — Deployment & Maintenance

**Document ID:** RDU-DM-001  
**Version:** 1.0.0 (Foundation Edition)  
**Status:** Approved  
**Last Updated:** August 31, 2026  
**Operational Lead & Architect:** Rocky  

---

# 1. Purpose

This document defines how **RockyOS (Rocky's Digital Universe)** is deployed, monitored, maintained, and evolved after initial release.

RockyOS is not a one-time launch project or an ephemeral portfolio.

It is a living digital universe spanning a 10-year evolutionary horizon (2024–2034) that must remain stable, secure, fast, and continuously up to date.

This document ensures that the product can be operated sustainably over the long term without losing quality, consistency, or architectural integrity.

---

# 2. Deployment Philosophy

RockyOS should be deployed with the exact same craftsmanship used to design and engineer it.

A polished product is not only about typography, glassmorphism, and code.  
It is equally about release discipline, zero-downtime reliability, observability, and long-term maintainability.

Deployment must therefore support:

* safe, automated releases
* preview environment validation
* instant zero-downtime rollback
* effortless content updates (articles, projects, growth logs)
* multilingual consistency (EN, ZH, DE, FR, JA)
* performance stability (Core Web Vitals budgets)
* continuous decadal compounding

---

# 3. Deployment Goals

The deployment process must achieve the following:

* make production releases predictable, routine, and stress-free
* eliminate deployment risks through automated preview checks
* keep preview, staging, and production environments strictly aligned
* enable fast feedback loops during local and AI-assisted development
* support high-velocity content updates without breaking layout balance
* preserve the integrity of the approved Six Worlds architecture

---

# 4. Multi-Tier Environment Strategy

RockyOS enforces a strict 3-tier environment isolation model.

```
+-------------------+      +-------------------+      +-------------------+
| 01. LOCAL DEV     | ───► | 02. PREVIEW / PR  | ───► | 03. PRODUCTION    |
| Local machine     |      | Vercel Edge Edge  |      | Global CDN Edge   |
| (port 3000/8080)  |      | Branch isolated   |      | Custom Domain     |
+-------------------+      +-------------------+      +-------------------+
```

---

## 4.1 Local Development

Used for active feature development, prototyping, and experimentation.

**Responsibilities & Tooling**:
* Feature development and component creation
* Component visual and state testing
* Layout verification across viewports
* Content authoring and frontmatter checks
* Debugging with hot module replacement (HMR)

---

## 4.2 Preview Environment (Vercel / Cloudflare Edge Previews)

Every pull request or feature branch automatically generates an isolated preview deployment.

**Responsibilities & QA Gates**:
* Full feature functionality review
* Design and typography regression review
* Content and copy proofreading
* Multilingual validation (sub-16ms language switching check)
* Mobile touch target verification (>= 48px targets)
* Comprehensive QA before merging into `main`

---

## 4.3 Production Environment

The official public gateway to RockyOS.

**Responsibilities**:
* Highly available global public access (99.99% uptime target)
* Global edge distribution with sub-50ms latency
* Search engine indexing and social preview cards
* Asset compression and caching
* Stable telemetry tracking

---

# 5. Global & Dual-Region Hosting Architecture

To support Rocky's vision of bridging Western international partners and Chinese domestic collaboration:

```
+---------------------------------------------------------------------------------+
|                       GLOBAL TRAFFIC ROUTING ARCHITECTURE                       |
+---------------------------------------------------------------------------------+
|                                                                                 |
|  [ INTERNATIONAL VISITORS ]                  [ MAINLAND CHINA VISITORS ]        |
|  (Global Tech, Employers, Partners)          (Domestic Clients, WeChat Scans)   |
|              │                                              │                   |
|              ▼                                              ▼                   |
|  [ Vercel / Cloudflare Global Edge ]         [ Tencent Cloud COS / AliCloud OSS ]|
|  - 300+ Edge POPs Worldwide                  - Mainland CDN Acceleration Nodes  |
|  - Sub-50ms Global Edge Response             - ICP Registered Custom Domain     |
|  - Automatic HTTPS & Brotli                  - Native WeChat Webview Optimized  |
|                                                                                 |
+---------------------------------------------------------------------------------+
```

### Strategy A: Global Edge Deployment (Primary)
- **Host**: Vercel / Cloudflare Pages
- **Build Output**: Static HTML/CSS/JS export or Next.js App Router Edge runtime
- **Custom Domain**: `rocky.dev` / `rockyos.io`
- **DNS**: Cloudflare Managed DNS with HTTP/3 and Full Strict SSL

### Strategy B: China Domestic Mirror (For High-Speed WeChat Walkthroughs)
- **Host**: Tencent Cloud COS / Alibaba Cloud OSS + Domestic CDN
- **Custom Domain**: `rockyos.cn` (with ICP filing placeholder: `粤ICP备20260831号-1`)
- **Optimization**: Zero external font blocking (Google Fonts mirrored or preloaded locally) to ensure instant loading inside WeChat in-app browser.

---

# 6. Deployment Workflow

A reliable deployment flow should follow this sequence:

```text
Idea
→ Technical Specification
→ Implementation
→ Local Verification
→ Git Push to Feature Branch
→ Automated Preview Deployment
→ Multilingual & Mobile QA Review
→ Approval & Merge to main
→ Automated Production Deployment
→ Post-Release Telemetry Verification
```

---

## 6.1 Feature Development Discipline
* Implement one feature, article, or fix at a time.
* Keep pull requests small, focused, and self-documenting.
* Ensure all TypeScript types pass cleanly (`npm run type-check`).

---

## 6.2 Preview Validation Checklist
Before approving any deployment into production, verify:
- [ ] Layout renders cleanly on desktop (1440px), tablet (768px), and mobile (375px).
- [ ] Language toggle instantly translates text without layout collapse or page refresh.
- [ ] WeChat QR modal opens, displays high-res QR, and copy button returns `Copied! / 已复制！`.
- [ ] Command Palette (`⌘K`) opens and executes queries.
- [ ] Accessibility focus indicators and color contrast ratios meet AA standards.
- [ ] Google Lighthouse score: Performance >= 95, Accessibility >= 95, SEO = 100.

---

## 6.3 Production Release & Post-Release Review
After deployment goes live:
* Verify live telemetry clock and `SYSTEM: ONLINE` beacon are operating.
* Confirm that no 404 broken links exist.
* Verify that social share cards (`og-image.png`) resolve correctly via Twitter Card Validator and OpenGraph testers.
* Confirm that changes are recorded in `docs/CHANGELOG.md`.

---

# 7. Release Strategy & Versioning Policy

RockyOS follows structured [Semantic Versioning 2.0.0](https://semver.org/):

```
MAJOR.MINOR.PATCH (e.g., v1.1.2)
  │     │     │
  │     │     └── PATCH: Typo fixes, CSS micro-adjustments, small bug fixes
  │     └──────── MINOR: New Knowledge Vault article, new project, new Lab tool
  └────────────── MAJOR: Architectural evolution (e.g. Next.js migration, AI agent)
```

### Release Categories:
1. **Patch Release**: Quick fixes (e.g. `v1.0.1` — font size calibration).
2. **Content Release**: Publishing new essays, case studies, or timeline entries (e.g. `v1.1.0`).
3. **Feature Release**: Implementing interactive tools, search upgrades, or animation layers (e.g. `v1.2.0`).
4. **Major Public Milestone**: Full phase transitions from the Roadmap (e.g. `v2.0.0` — Autonomous OS with RockyGPT).

---

# 8. Maintenance Philosophy & Core Areas

Maintenance is not a chore; it is an **ongoing act of craftsmanship**.

A personal operating system compounds in authority only if it receives consistent, thoughtful care.

```
+---------------------------------------------------------------------------------+
|                           THE 5 AREAS OF MAINTENANCE                            |
+---------------------------------------------------------------------------------+
|                                                                                 |
|  [01] CONTENT        [02] TECHNICAL       [03] DESIGN       [04] SEO & META     |
|  • Projects          • Build health       • Spacing rhythm  • Canonical URLs    |
|  • Knowledge essays  • Dependency safety  • Color contrast  • OpenGraph cards   |
|  • Growth logs       • Broken links       • Motion polish   • Structured data   |
|                                                                                 |
|                        [05] MULTILINGUAL COHERENCE                              |
|                        • Translation synchronization                            |
|                        • Native Chinese phrasing reviews                        |
|                        • CJK font rendering integrity                           |
|                                                                                 |
+---------------------------------------------------------------------------------+
```

---

# 9. Step-by-Step Maintenance Operational Runbooks

### Runbook 1: Adding a New Growth Log Entry (记录成长)
1. Open `app/app.js` (or `content/changelog/` in Next.js).
2. Add new entry to the timeline registry:
   ```javascript
   {
     period: "2026 Q4",
     titleEn: "Shipped Multi-Agent Orchestration Pipeline",
     titleZh: "发布多智能体协同流水线系统",
     descEn: "Engineered scalable autonomous agent workflows using LLM orchestration.",
     descZh: "完成基于大语言模型编排的高并发自主智能体工作流架构上线。"
   }
   ```
3. Update `docs/CHANGELOG.md` under the upcoming release header.
4. Commit:
   ```bash
   git add app/app.js docs/CHANGELOG.md
   git commit -m "feat(growth): log Q4 2026 milestone"
   git push origin main
   ```

### Runbook 2: Updating WeChat QR Code (微信名片更新)
1. Generate your latest personal or business WeChat QR code from your mobile app.
2. Export as high-resolution SVG or crisp PNG (minimum 600×600px).
3. Save into `public/wechat-qr.svg` (or `.png`).
4. Refresh browser and verify that the laser scan animation loops smoothly over the new code.
5. Commit and deploy.

### Runbook 3: Publishing a New Knowledge Vault Essay
1. Create new Markdown/MDX document under `content/articles/my-essay-title.mdx`.
2. Write frontmatter metadata (title, summary, tags, reading time, published date).
3. Ensure both English text and native Chinese summary are present.
4. Preview locally and verify layout rhythm and Table of Contents generation.
5. Push to GitHub.

---

# 10. Monitoring & Observability Strategy

Monitoring provides real-time visibility into system health without violating visitor privacy.

### 10.1 Key Telemetry Metrics
- **Performance**: Real User Monitoring (RUM) measuring FCP, LCP, CLS, and FID.
- **Availability**: Global HTTP uptime monitoring pinging `https://rockyos.io/` every 60 seconds.
- **Engagement**: Privacy-friendly analytics (e.g. Plausible, Cloudflare Web Analytics, or Umami):
  - Top visited worlds (Identity, Capability, Knowledge, Lab, Connect, Growth).
  - Language distribution (Percentage of visitors viewing in English vs. 简体中文).
  - Opening Prologue completion vs. skip rate.
  - WeChat QR modal trigger rate.

---

# 11. Backup, Disaster Recovery & High Availability

- **Single Source of Truth**: The complete repository is version-controlled on GitHub.
- **Instant Rollback**: If a deployment introduces an unforeseen defect, Vercel/Cloudflare allows **instant one-click rollback** to the prior build in `< 10 seconds`.
- **DNS Failover**: If the primary hosting provider suffers an outage, point DNS CNAME to the secondary static host (e.g. switch from Vercel to Cloudflare Pages or GitHub Pages) in `< 5 minutes`.

---

# 12. Security & Operational Hardening

- **Zero Database Attack Surface**: RockyOS is built on static and edge-rendered architectures, eliminating SQL injection and database breach risks.
- **Strict HTTPS & HSTS**: Forced HTTPS with HTTP Strict Transport Security (HSTS) max-age set to 63072000 (2 years).
- **Zero Secrets Committed**: All private tokens (API keys, webhook secrets) reside strictly in `.env.local` and encrypted environment variables.
- **Safe External Links**: All outbound links carry `rel="noopener noreferrer"` to prevent reverse tabnabbing.

---

# 13. Incident Response Protocol

When an issue occurs in production, respond with structured discipline:

```
[ ALERT: Incident Detected ]
              │
              ▼
[ STEP 1: Assess Severity Level ]
  • LOW (Typo, small visual glitch) ──────► Push patch to main within 24h
  • MEDIUM (Language toggle issue) ───────► Fix in preview branch, deploy within 2h
  • HIGH (Homepage fail, 500 error) ──────► Instant 1-Click Rollback in Vercel (< 1 min)
              │
              ▼
[ STEP 2: Root Cause Analysis (RCA) in Local Dev ]
              │
              ▼
[ STEP 3: Validate Safe Fix in Preview Environment ]
              │
              ▼
[ STEP 4: Redeploy to Production & Verify Telemetry ]
              │
              ▼
[ STEP 5: Document Incident & Prevention in docs/CHANGELOG.md ]
```

---

# 14. Maintenance Rhythm & Calendar

To keep RockyOS living and accurate:

| Rhythm | Operational Checklist |
| :--- | :--- |
| **Weekly** | Review recent commits, verify uptime telemetry, reply to direct inquiries from the Connection System. |
| **Monthly** | Review and publish new growth log entries or project notes; test WeChat QR scanning on mobile. |
| **Quarterly** | Revisit Roadmap priorities (`docs/07-Roadmap.md`), audit dependency versions, review performance metrics. |
| **Annual (August)** | Publish the official **Annual State of RockyOS Retrospective**; reflect on 10-year compounding momentum. |

---

# 15. Documentation Maintenance & Governance

The documentation suite is a first-class citizen of RockyOS. Whenever code or product behavior changes, the corresponding document must be updated in the same pull request:

* Vision changes → Update `docs/01-Vision.md`
* Requirements changes → Update `docs/02-Requirements.md`
* Sitemap or world changes → Update `docs/03-Information-Architecture.md`
* Design tokens or fonts change → Update `docs/04-Design-System.md`
* Interaction or animations change → Update `docs/05-UI-UX.md`
* Code stack or directory changes → Update `docs/06-Technical-Architecture.md`
* Milestone progress changes → Update `docs/07-Roadmap.md`
* New AI prompt patterns → Update `docs/08-AI-Prompts.md`
* Hosting or deployment rules change → Update `docs/09-Deployment-Maintenance.md`

---

# 16. Definition of Operational Success

Deployment and maintenance succeed when:
- Releases are predictable, calm, and fully automated.
- Production operates with 99.99% uptime and zero broken links.
- Content remains authentic, truthful, and actively compounding.
- Chinese clients enjoy flawless, high-speed WeChat walkthroughs.
- RockyOS continues to evolve alongside life over the entire 2024–2034 horizon.

---

# 17. Maintenance Motto

> **A great product is not only built well.**  
> **It is maintained with reverence.**  
> **RockyOS stays alive, accurate, fast, and compounding.**  
> *「伟大的产品不仅在于建造时的精妙，更在于日复一日的悉心守护。RockyOS 永远鲜活、精准、迅疾，持续复利。」*
