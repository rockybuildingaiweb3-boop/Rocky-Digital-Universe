# RockyOS — Documentation Suite Guide

<div align="center">

```
  ____            _             ___  ____  
 |  _ \ ___   ___| | ___   _   / _ \/ ___| 
 | |_) / _ \ / __| |/ / | | | | | | \___ \ 
 |  _ < (_) | (__|   <| |_| | | |_| |___) |
 |_| \_\___/ \___|_|\_\\__, |  \___/|____/ 
                       |___/               
```

**Rocky's Digital Universe // Documentation Framework**  
*The Operating System of My Digital Life (2024 — 2034)*  
*「这是我的数字世界：一个记录成长、展示能力、分享知识、连接他人的地方。」*

---

[![Documentation Status](https://img.shields.io/badge/Docs-Complete%20(9%2F9)-10b981?style=flat-square)](.)
[![Horizon](https://img.shields.io/badge/Horizon-10--Year%20(2024--2034)-6366f1?style=flat-square)](07_Development_Roadmap.md)
[![Version](https://img.shields.io/badge/Version-1.0.0%20(Foundation)-06b6d4?style=flat-square)](01_Vision.md)
[![Language](https://img.shields.io/badge/Language-English%20%7C%20%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87-f59e0b?style=flat-square)](02_Requirements.md)

</div>

---

# 1. Overview & Directory Structure

Welcome to the central documentation hub for **Rocky's Digital Universe (RockyOS)**.

This directory houses the 9 foundational architectural specifications governing the design, engineering, user experience, and 10-year evolutionary roadmap of RockyOS.

```text
docs/
├── README.md                          # 👈 Master Guide & Reading Index (You are here)
├── 01_Vision.md                       # Product Vision & Six Core Systems
├── 02_Requirements.md                 # Product Requirements Document (PRD)
├── 03_Information_Architecture.md     # World Architecture & Galaxy Constellation
├── 04_Design_System.md                # Design System Tokens & Dual-Language Typography
├── 05_UI_UX_Specification.md          # Interaction Physics, Cursor & User Journeys
├── 06_Technical_Architecture.md       # Next.js, TypeScript, MDX & Dual-Tier i18n
├── 07_Development_Roadmap.md          # 10-Year Evolutionary Horizons (2024–2034)
├── 08_AI_Studio_Prompt_Library.md     # 24 Reusable AI Studio Prompt Templates
└── 09_Deployment_Maintenance.md       # Dual-Region Hosting, Operations & Runbooks
```

---

# 2. Recommended Reading Sequence (阅读顺序建议)

To understand RockyOS efficiently without getting lost in technical minutiae, we recommend reading the documents in three structured tiers:

```
TIER 1: FOUNDATION & PHILOSOPHY (Must Read First / 必读核心)
  01_Vision.md ──► 02_Requirements.md ──► 03_Information_Architecture.md
                                │
                                ▼
TIER 2: CRAFTSMANSHIP & IMPLEMENTATION (Engineering & Design / 实现规范)
  04_Design_System.md ──► 05_UI_UX_Specification.md ──► 06_Technical_Architecture.md
                                │
                                ▼
TIER 3: COMPOUNDING & OPERATIONS (Living Systems / 持续维护与演进)
  07_Development_Roadmap.md ──► 08_AI_Studio_Prompt_Library.md ──► 09_Deployment_Maintenance.md
```

---

# 3. Document Directory & Specification Matrix

| # | File Name | Document ID | Target Audience | Primary Function & Contents |
| :-: | :--- | :--- | :--- | :--- |
| **01** | **[01_Vision.md](01_Vision.md)** | `RDU-VIS-001` | Everyone | **Core Philosophy**: Establishes *"Not a Portfolio. My Personal Operating System."* Defines the 10-year horizon and introduces the **Six Core Systems**. |
| **02** | **[02_Requirements.md](02_Requirements.md)** | `RDU-PRD-001` | PMs / Engineers | **PRD & Scope**: Defines multi-device viewports, 5-language internationalization, and the 4-scene **Human-AI Opening Prologue**. |
| **03** | **[03_Information_Architecture.md](03_Information_Architecture.md)** | `RDU-WA-001` | Architects / UI | **World Architecture**: Organizes the Six Worlds into an interactive celestial galaxy. Details Command Palette (`⌘K`) and WeChat walkthrough flows. |
| **04** | **[04_Design_System.md](04_Design_System.md)** | `RDU-DS-001` | Designers / Devs | **Visual Tokens**: Cosmic Palette CSS properties, dual-language typography hierarchy (`1.78` line-height for CJK), buttons, and bento cards. |
| **05** | **[05_UI_UX_Specification.md](05_UI_UX_Specification.md)** | `RDU-UX-001` | UX / Motion Devs | **Sensory Experience**: Spring motion physics (`cubic-bezier(0.16, 1, 0.3, 1)`), 8-state magnetic cursor, 7-part project case study narrative. |
| **06** | **[06_Technical_Architecture.md](06_Technical_Architecture.md)** | `RDU-TA-001` | Engineers / AI | **Engineering Architecture**: Next.js App Router, strict TypeScript interfaces, sub-16ms dual-tier i18n, and performance budgets. |
| **07** | **[07_Development_Roadmap.md](07_Development_Roadmap.md)** | `RDU-RD-001` | Strategic Planners | **10-Year Plan**: Phased deliverables across 5 horizons (Genesis, Core Engine, Ecosystem, Autonomous OS, Decadal Legacy). |
| **08** | **[08_AI_Studio_Prompt_Library.md](08_AI_Studio_Prompt_Library.md)** | `RDU-PL-001` | AI Agents / Rocky | **AI Studio Prompts**: 24 structured prompt templates for generating code, articles, growth logs, and translations in Rocky's voice. |
| **09** | **[09_Deployment_Maintenance.md](09_Deployment_Maintenance.md)** | `RDU-DM-001` | DevOps / Admins | **Operational Runbooks**: Dual-region hosting (Vercel Edge + China CDN), backup/rollback, WeChat QR update workflows, and incident response. |

---

# 4. Which Documents Must Be Read First? (哪些必须先读？)

### 🔴 Mandatory Reading (先读这三篇，建立全局认知)
If you only have 10 minutes to understand the project:
1. **[01_Vision.md](01_Vision.md)**: Explains the fundamental mental model of why RockyOS is an evolving personal operating system rather than a static resume.
2. **[02_Requirements.md](02_Requirements.md)**: Explains the functional scope, target personas, and the emotional opening prologue.
3. **[03_Information_Architecture.md](03_Information_Architecture.md)**: Shows how the Six Worlds interconnect as a celestial universe map.

### 🟡 Implementation Reading (开始编码与设计时阅读)
Read these when implementing components, pages, or styling:
- **[04_Design_System.md](04_Design_System.md)** & **[05_UI_UX_Specification.md](05_UI_UX_Specification.md)** for visual tokens, typography, and motion easing.
- **[06_Technical_Architecture.md](06_Technical_Architecture.md)** for TypeScript interfaces, directory conventions, and i18n logic.

### 🟢 Ongoing Operational Reading (日常维护与协作时参考)
Consult these during ongoing sprints and maintenance:
- **[08_AI_Studio_Prompt_Library.md](08_AI_Studio_Prompt_Library.md)** whenever delegating tasks to Google AI Studio, Antigravity, or Claude.
- **[09_Deployment_Maintenance.md](09_Deployment_Maintenance.md)** when deploying updates, updating the WeChat QR code, or monitoring production health.

---

# 5. Living Documents & Update Cadence (后续更新机制)

The documentation suite is a living, version-controlled asset. It is not frozen in stone.

```
+-----------------------------------------------------------------------------------+
|                           DOCUMENTATION UPDATE CADENCE                            |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|  [HIGH-FREQUENCY UPDATES]                                                         |
|  • 07_Development_Roadmap.md      (Check off delivered milestones monthly)        |
|  • 08_AI_Studio_Prompt_Library.md (Add new tested prompt patterns continuously)   |
|  • 09_Deployment_Maintenance.md   (Update runbooks and production metrics)        |
|                                                                                   |
|  [QUARTERLY UPDATES]                                                              |
|  • 03_Information_Architecture.md (Add newly planned world sub-pages)             |
|  • 06_Technical_Architecture.md   (Record framework upgrades and schema changes)  |
|                                                                                   |
|  [ANNUAL STABLE REVIEWS]                                                          |
|  • 01_Vision.md & 02_Requirements.md (Refreshed each August during Annual Review) |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### Documentation Governance Rules:
1. **Rule 1: Code and Docs Move Together**: Never commit a significant architectural or layout change without updating the corresponding specification file.
2. **Rule 2: AI-Ready Clarity**: Every document must clearly answer its domain responsibility to ensure AI pair-programming tools work with maximum accuracy.
3. **Rule 3: Bilingual Preservation**: All user-facing interaction flows must maintain alignment across both English and Chinese presentation modes.

---

# 6. Documentation Suite Motto

> **Clear documentation creates clear architecture.**  
> **Clear architecture creates timeless software.**  
> **RockyOS is built with intention, not improvisation.**  
> *「清晰的文档构建清晰的架构，清晰的架构铸就传世的软件。RockyOS 始于深思熟虑，而非信手涂鸦。」*
