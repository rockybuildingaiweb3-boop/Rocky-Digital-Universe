# RockyOS — Technical Architecture Specification

**Document ID:** RDU-TA-001  
**Version:** 1.0.0 (Foundation Edition)  
**Status:** Approved  
**Last Updated:** August 31, 2026  
**Chief Architect:** Rocky  

---

# 1. Purpose

This document defines the comprehensive software engineering architecture for **RockyOS (Rocky's Digital Universe)**.

RockyOS is architected as an evolving, long-term personal operating system spanning a 10-year horizon (2024–2034). Unlike ephemeral websites or static portfolios, the technical foundation must support continuous expansion, multilingual content delivery, cinematic physics-based interaction, and seamless AI-assisted development across decades.

> **Architectural Law**: Technology choices and libraries will evolve; architectural principles and domain boundaries must remain stable.

---

# 2. Engineering Vision

RockyOS is engineered as a system that is:

* **Simple to Understand**: Obvious structure, self-documenting naming, and zero hidden magic.
* **Modular to Extend**: Each of the Six Worlds functions as an independent, self-contained subsystem.
* **Scalable Over Time**: Capable of housing 10 years of projects, articles, timeline entries, and experiments without structural redesign.
* **Maintainable by Humans & AI**: Highly legible abstractions, explicit TypeScript contracts, and AI Studio prompt readiness.
* **Sub-Second Performance**: 60 FPS transitions, sub-second Core Web Vitals, and zero bundle bloat.
* **Globally Native & Bilingual Fluid**: Sub-16ms client-side language switching for international partners and Chinese clients.
* **Automated & Intelligent**: Architecturally reserved for agentic workflows, Model Context Protocol (MCP), and RockyGPT.

```
+-----------------------------------------------------------------------------------+
|                           ROCKYOS SYSTEM ARCHITECTURE                             |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [PRESENTATION]   App Router (app/) · Galaxy Canvas · Command Palette (⌘K)        |
|                                                                                   |
|  [FEATURE WORLDS] Identity · Capability · Knowledge · Laboratory · Connect · Growth|
|                                                                                   |
|  [COMPONENTS]     Bento Cards · WeChat Modal · Orbital Header · Nav Beacons       |
|                                                                                   |
|  [CONTENT LAYER]  MDX Vault · Project Schemas · Growth Logs · Lab Experiments     |
|                                                                                   |
|  [CORE UTILITIES] i18n Engine · Fuzzy Search Index · Telemetry · Spring Physics   |
|                                                                                   |
|  [INFRASTRUCTURE] Edge CDN (Vercel / Cloudflare) · Git VCS · AI Studio Prompts   |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

---

# 3. Core Engineering Principles

### 3.1 Radical Simplicity
Prefer the simplest, most readable solution that completely solves the problem. Eliminate unnecessary abstraction layers, wrapper hell, and premature optimization.

### 3.2 Strict World Modularity
Each major world of RockyOS (`Identity`, `Capability`, `Knowledge`, `Laboratory`, `Connection`, `Growth`) is an isolated domain module. Features within one world must never tightly couple to internal implementations of another world.

### 3.3 Long-Term Maintainability
Code written today must remain effortlessly understandable and editable in 2034. File names, variable names, and component boundaries must communicate explicit human intent.

### 3.4 Uncompromising Performance & Ergonomics
A premium operating system feels weightless and instant. Every asset is optimized, unused scripts are pruned, and animation calculations stay strictly on compositor threads (`transform`, `opacity`).

### 3.5 AI-First Engineering Ergonomics
The repository structure is deliberately organized to make AI coding agents (Google AI Studio, Antigravity, Claude) dramatically more effective: small focused files, strict TypeScript interfaces, predictable file paths, and co-located tests/docs.

---

# 4. Official Technology Stack

## 4.1 Frontend Framework: Next.js (App Router)
- **Role**: Core application framework, hybrid SSG/SSR rendering, routing, and metadata generation.
- **Rationale**: Industry-standard React server components, automatic code splitting, static site generation (SSG) for edge speeds, built-in image optimization, and superior SEO indexing.

## 4.2 Language: TypeScript (Strict Mode)
- **Role**: Universal programming language across client, server, and scripts.
- **Rationale**: Compile-time safety, self-documenting data contracts, high-confidence refactoring, and superior LLM code generation accuracy.

## 4.3 Styling: Tailwind CSS & Custom CSS Properties
- **Role**: Design token mapping, layout utilities, and responsive breakpoints.
- **Rationale**: Co-locates styling with markup, eliminates dead CSS, pairs seamlessly with CSS custom properties (`--bg-core`, `--accent-cyan`), and enables atomic design tokens.

## 4.4 Animation & Motion: Framer Motion + GSAP
- **Framer Motion**: Default declarative animation layer for UI components, hover feedback, page transitions, and the Command Palette.
- **GSAP (GreenSock)**: Dedicated timeline engine reserved for the multi-scene **Human-AI Opening Prologue** and advanced canvas physics.

## 4.5 Content System: MDX (Markdown + React)
- **Role**: Authoring format for long-form Knowledge Vault essays, Project case studies, and Growth Log entries.
- **Rationale**: Combines the simplicity of Markdown with the power of embedded React components (interactive charts, bento widgets, live code runners) with zero external CMS lock-in.

## 4.6 Deployment & Hosting: Vercel / Edge CDN
- **Role**: Global edge deployment, preview branches, and serverless compute.
- **Rationale**: Instant global distribution, zero-config Next.js optimizations, automatic HTTPS, and global edge cache latency `< 50ms`.

## 4.7 Iconography: Lucide React
- **Role**: System icons (search, chevron, terminal, external-link, etc.).
- **Rationale**: Tree-shakable, geometric outline consistency, zero styling baggage.

## 4.8 Typography Stack
- **English / Latin**: `Inter` (body) & `Space Grotesk` (headings).
- **Simplified Chinese (`zh-CN`)**: `PingFang SC`, `Microsoft YaHei`, `Noto Sans SC`.
- **Japanese (`ja-JP`)**: `Noto Sans JP`, `Hiragino Kaku Gothic ProN`.
- **Monospace Telemetry**: `JetBrains Mono`, `Consolas`.

---

# 5. System Layer Architecture

```
Layer 6: INFRASTRUCTURE (Vercel Edge, GitHub Actions, DNS, Security Headers)
                           ▲
Layer 5: PRESENTATION (App Router, Layouts, Universe Canvas, Opening Prologue)
                           ▲
Layer 4: FEATURE SYSTEMS (Identity, Capability, Knowledge, Lab, Connect, Growth)
                           ▲
Layer 3: COMPONENT ATOMS (Buttons, Bento Cards, WeChat Modal, Badges, Sliders)
                           ▲
Layer 2: CONTENT & DATA (MDX Articles, Project Schemas, Changelog JSON)
                           ▲
Layer 1: CORE ENGINE (i18n Dictionary, Search Index, Telemetry Clock, Theme Provider)
```

---

# 6. Repository File & Folder Hierarchy

```text
Rocky-Digital-Universe/
├── app/                                 # Next.js App Router (Routes & Layouts)
│   ├── [lang]/                          # Multilingual route tree (en, zh, de, fr, ja)
│   │   ├── layout.tsx                   # Master root layout (Providers, Topbar, Footer)
│   │   ├── page.tsx                     # Universe Map (Galaxy Homepage)
│   │   ├── opening/                     # Human-AI Opening Prologue route
│   │   ├── identity/                    # World 01: Identity System pages
│   │   ├── capability/                  # World 02: Capability System pages
│   │   ├── knowledge/                   # World 03: Knowledge System pages
│   │   ├── laboratory/                  # World 04: Laboratory System pages
│   │   ├── connection/                  # World 05: Connection System pages
│   │   └── growth/                      # World 06: Growth System pages
│   ├── api/                             # Serverless API routes (telemetry, search)
│   ├── favicon.ico
│   └── globals.css                      # Master CSS tokens & Tailwind directives
│
├── components/                          # Shared UI Component Library
│   ├── atoms/                           # Buttons, Badges, Icons, Tooltips
│   ├── molecules/                       # StatCard, LangSwitch, ThemeToggle, Breadcrumb
│   ├── organisms/                       # Header, Footer, BentoGrid, WeChatModal
│   └── layout/                          # SectionContainer, Grid, ViewportBoundary
│
├── features/                            # Domain-Driven Modules (The Six Worlds)
│   ├── opening/                         # Prologue scene controllers & GSAP timeline
│   ├── identity/                        # Bio components, values timeline, photo wall
│   ├── capability/                      # Project cards, tech pills, resume renderer
│   ├── knowledge/                       # MDX reader, Table of Contents, reading beam
│   ├── laboratory/                      # AI prompt copyier, code sandbox, demo widgets
│   ├── connection/                      # WeChat QR popover, mailto copy, contact form
│   ├── growth/                          # 10-year timeline, changelog filter, milestones
│   └── search/                          # Command Palette (⌘K) spotlight engine
│
├── content/                             # Structured MDX Articles & Documents
│   ├── articles/                        # Knowledge Vault long-form posts
│   ├── projects/                        # Detailed project case studies
│   ├── experiments/                     # Lab prototype briefs
│   └── changelog/                       # Version release notes
│
├── data/                                # Static Config & Data Registries
│   ├── i18n/                            # Localized strings (en.json, zh.json, etc.)
│   ├── navigation.ts                    # World routes, anchors & labels
│   ├── site-metadata.ts                 # Global metadata, SEO defaults, author info
│   └── timeline.ts                      # 10-year evolutionary milestone milestones
│
├── hooks/                               # Custom Reusable React Hooks
│   ├── use-language.ts                  # i18n switcher & persistence hook
│   ├── use-theme.ts                     # Dark/Light theme state machine
│   ├── use-command-palette.ts           # ⌘K shortcut listener & modal state
│   ├── use-cursor-pos.ts                # Magnetic cursor coordinates
│   └── use-reading-progress.ts          # Scroll percentage for article progress beam
│
├── lib/                                 # Universal Utilities & Helpers
│   ├── mdx.ts                           # Contentlayer / MDX parser and frontmatter
│   ├── search.ts                        # In-memory fuzzy token indexing
│   ├── telemetry.ts                     # UTC clock & system uptime calculations
│   └── utils.ts                         # Tailwind clsx/cn class merger
│
├── types/                               # Universal TypeScript Interfaces
│   ├── content.ts                       # Project, Article, Milestone interfaces
│   ├── i18n.ts                          # Translation keys & locale types
│   └── navigation.ts                    # Route & breadcrumb definitions
│
├── public/                              # Static Public Assets
│   ├── assets/                          # SVG icons, diagrams, logos
│   ├── wechat-qr.svg                    # High-res WeChat QR code asset
│   └── og-image.png                     # Social share image card
│
├── docs/                                # Complete Architecture & Specification Suite
│   ├── 01-Vision.md
│   ├── 02-Requirements.md
│   ├── 03-Information-Architecture.md
│   ├── 04-Design-System.md
│   ├── 05-UI-UX.md
│   ├── 06-Technical-Architecture.md
│   ├── 07-Roadmap.md
│   ├── 08-AI-Prompts.md
│   └── 09-Deployment-Maintenance.md
│
├── tailwind.config.ts                   # Tailwind theme extensions & custom tokens
├── tsconfig.json                        # Strict TypeScript configuration
├── next.config.mjs                      # Next.js compiler & i18n routing options
└── README.md                            # Repository master documentation
```

---

# 7. Core Content Models & TypeScript Schemas

All content in RockyOS conforms to strict, immutable TypeScript interfaces.

```typescript
// types/content.ts

/**
 * World 02: Capability System Project Model
 */
export interface Project {
  id: string;
  slug: string;
  title: Record<string, string>;       // Multilingual: { en: "...", zh: "..." }
  summary: Record<string, string>;
  category: 'web-systems' | 'ai-engineering' | 'enterprise-bridge' | 'product-strategy';
  status: 'active' | 'completed' | 'compounding';
  featured: boolean;
  role: string;
  technologies: string[];
  metrics: {
    label: Record<string, string>;
    value: string;
  }[];
  demoUrl?: string;
  githubUrl?: string;
  architectureDiagram?: string;
  lessonsLearned: Record<string, string[]>;
  publishedAt: string;
}

/**
 * World 03: Knowledge System Article Model
 */
export interface Article {
  slug: string;
  title: Record<string, string>;
  summary: Record<string, string>;
  contentPath: string;                // Path to .mdx file
  tags: string[];
  category: 'system-thinking' | 'engineering' | 'ai-notes' | 'book-vault';
  readingTimeMinutes: number;
  wordCount: number;
  publishedDate: string;
  updatedDate: string;
  canonicalUrl: string;
}

/**
 * World 06: Growth System Milestone & Changelog
 */
export interface GrowthLogEntry {
  version: string;
  period: string;                     // e.g. "2026 Q3"
  date: string;
  title: Record<string, string>;
  category: 'milestone' | 'architecture' | 'reflection' | 'ecosystem';
  summary: Record<string, string>;
  highlights: Record<string, string[]>;
  telemetryImpact?: string;
}

/**
 * World 04: Laboratory Sandbox Experiment
 */
export interface LabExperiment {
  id: string;
  name: string;
  purpose: Record<string, string>;
  status: 'prototype' | 'alpha' | 'live' | 'archived';
  category: 'ai-prompt' | 'agent-workflow' | 'mcp-tool' | 'micro-utility';
  demoComponent?: string;
  codeSnippet?: string;
  githubUrl?: string;
}
```

---

# 8. Internationalization (i18n) Engine

RockyOS implements a **dual-tier localization architecture**:

```
Tier 1: URL Route Prefix (/en, /zh, /de, /fr, /ja) -> Guarantees Search Engine Indexing (SEO)
Tier 2: In-Memory Client Dictionary -> Enables Sub-16ms Zero-Reload Language Switching
```

### 8.1 In-Memory Fast Switching Mechanism
```typescript
// hooks/use-language.ts
export type SupportedLocale = 'en' | 'zh' | 'de' | 'fr' | 'ja';

export function useLanguage() {
  const [currentLocale, setCurrentLocale] = useState<SupportedLocale>('en');

  const switchLanguage = (newLocale: SupportedLocale) => {
    // 1. Persist user preference locally
    localStorage.setItem('rockyos_locale', newLocale);
    
    // 2. Dynamically update HTML lang attribute
    document.documentElement.lang = newLocale === 'zh' ? 'zh-CN' : newLocale;

    // 3. Fast state update without destroying scroll position or unmounting DOM
    setCurrentLocale(newLocale);
    
    // 4. Silently push URL state for bookmarking
    window.history.replaceState(null, '', `/${newLocale}${window.location.pathname.substring(3)}`);
  };

  return { locale: currentLocale, switchLanguage };
}
```

### 8.2 Client Presentation Ergonomics
During meetings with Chinese clients, Rocky clicks `[ 中文 ]` or triggers `⌘K -> 切换中文`. The entire interface flips instantaneously to high-standard Simplified Chinese, allowing immediate walkthrough without loading delays.

---

# 9. Search & Command Palette (`⌘K`) Architecture

Search is handled client-side using a lightweight in-memory inverted token index:

```typescript
// lib/search.ts
export interface SearchItem {
  id: string;
  title: string;
  category: 'World' | 'Project' | 'Article' | 'Experiment' | 'Action';
  keywords: string[];
  url?: string;
  action?: () => void;
}

export class SearchEngine {
  private index: SearchItem[] = [];

  public registerItems(items: SearchItem[]) {
    this.index.push(...items);
  }

  public query(term: string): SearchItem[] {
    const cleanTerm = term.toLowerCase().trim();
    if (!cleanTerm) return [];

    return this.index.filter(item => 
      item.title.toLowerCase().includes(cleanTerm) ||
      item.keywords.some(kw => kw.toLowerCase().includes(cleanTerm))
    );
  }
}
```

- **Query Speed**: `< 8ms` for datasets up to 5,000 items.
- **Grouped Result UI**: Categorizes hits into Worlds, Flagship Projects, Knowledge Notes, and System Actions.

---

# 10. The Opening Experience State Machine

The Human-AI collaborative prologue is governed by a finite state machine:

```
[ STATE: IDLE ]
      │ (Check localStorage for 'rocky_prologue_seen')
      ├── Seen within 24h? ──► [ STATE: SKIP_DIRECT_TO_HOME ]
      ▼ (First visit)
[ STATE: SCENE_1_HESITATION ] ("I questioned AI.")
      │ (Wait 3.2s)
      ▼
[ STATE: SCENE_2_HANDSHAKE ] ("I learned to work with AI.")
      │ (Wait 3.2s)
      ▼
[ STATE: SCENE_3_ALLIANCE ] ("Together, we achieved more than either alone.")
      │ (Wait 3.2s)
      ▼
[ STATE: SCENE_4_VAULT_DOOR ] (4 Sequential Knocks Trigger Door Opening)
      │ (Door Unlatches & Camera Glides Forward)
      ▼
[ STATE: UNIVERSE_MAP_ENTERED ] (Mark 'rocky_prologue_seen' in localStorage)
```

- **Skip Accessibility**: A persistent `[ Skip Prologue / 跳过 ]` button in the top-right corner allows instantaneous escape.
- **Replay Hook**: Exposed via `app/opening/page.tsx` or the topbar `Replay Prologue` button.

---

# 11. Performance Architecture & Web Vitals Budget

RockyOS enforces strict performance budgets verified via automated CI:

| Metric | Target Budget | Enforcement Mechanism |
| :--- | :--- | :--- |
| **First Contentful Paint (FCP)** | `< 0.6s` | Inline critical CSS & preloaded hero typography |
| **Largest Contentful Paint (LCP)** | `< 1.0s` | Static HTML generation + WebP/AVIF imagery |
| **Cumulative Layout Shift (CLS)** | `0.00` | Explicit width/height on all containers & images |
| **First Input Delay (FID) / INP** | `< 10ms` | Zero heavy third-party tracking scripts |
| **Total JavaScript Bundle Size** | `< 95 KB` | Dynamic code splitting & tree-shaking |
| **Animation Frame Rate** | `60 FPS` | Hardware-accelerated CSS properties only |

---

# 12. SEO & Structured Data Architecture

To ensure RockyOS ranks authoritatively for technical articles, projects, and personal brand keywords:

1. **Dynamic Metadata per World**:
   ```typescript
   export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
     return {
       title: "Rocky's Digital Universe // Personal Operating System",
       description: "A 10-year living digital ecosystem documenting growth, engineering capabilities, and knowledge.",
       openGraph: {
         images: ['/og-image.png'],
         locale: params.lang === 'zh' ? 'zh_CN' : 'en_US',
       },
       alternates: {
         languages: {
           'en-US': '/en',
           'zh-CN': '/zh',
         }
       }
     };
   }
   ```
2. **JSON-LD Schema Markup**: Embedded `Person` and `TechArticle` schema for rich Google search snippets.

---

# 13. Security & Operational Hardening

Even as a static/hybrid platform, RockyOS enforces enterprise-grade security headers:
- **Content Security Policy (CSP)**: Disallows unauthorized external script injection.
- **Strict-Transport-Security (HSTS)**: Forced 2-year HTTPS redirection.
- **X-Content-Type-Options**: `nosniff`.
- **Zero Secrets in Repo**: All API keys or environment configs must live in `.env.local` and Vercel Encrypted Secrets.

---

# 14. AI Collaboration Architecture (AI Studio & Antigravity)

The repository is tailored for fluid pair-programming with advanced AI agents:

1. **Co-located Documentation**: Every directory (`features/capability/`) contains its own localized documentation or typing file so AI subagents can immediately grasp context.
2. **Prompt Library Sync**: `docs/08-AI-Prompts.md` stores prompt templates that Google AI Studio can execute directly to generate new Growth Logs, project briefs, or bilingual translations in Rocky's exact tone of voice.
3. **Deterministic File Boundaries**: No massive 3,000-line monolithic files; components are split at `250 lines` maximum.

---

# 15. Development Workflow & Git Standards

```text
Feature Branch (feat/world-name)
           │
           ▼
Local Typecheck (`npm run type-check`) & Linting
           │
           ▼
Vercel Edge Preview Deployment (Automatic PR Preview)
           │
           ▼
Human & AI Code Review Against Architecture Specs
           │
           ▼
Squash & Merge into `main` -> Automatic Production Release
```

---

# 16. Technical Motto

> **Technology should enable ideas.**  
> **Architecture should outlive frameworks.**  
> **RockyOS is engineered for evolution.**  
> *「技术成就思想，架构超越框架。RockyOS 为持续进化而生。」*

---

# Appendix A — Engineering Conventions

### A.1 File & Directory Naming
- Route segments: Lowercase kebab-case (`app/[lang]/capability/page.tsx`).
- React Components: PascalCase (`BentoGrid.tsx`, `WeChatModal.tsx`).
- Utilities & Hooks: Lowercase kebab-case (`use-language.ts`, `telemetry.ts`).

### A.2 Conventional Commits
- `feat(capability): add bento grid filtering by tech stack`
- `fix(i18n): correct Chinese character line-height in safari`
- `docs(architecture): update technical specification for Next.js app router`
- `perf(motion): optimize GSAP timeline garbage collection in opening scene`

### A.3 The AI-Ready Refactoring Rule
> If a file cannot clearly answer *"What single domain capability is this file responsible for?"* in one sentence, it must be refactored into smaller sub-modules.
