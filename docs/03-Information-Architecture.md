# 03. Information Architecture: Rocky's Digital Universe

This document maps the structural hierarchy, navigation flows, and data schemas that power **Rocky's Digital Universe (RockyOS)**.

---

## 1. High-Level Site Hierarchy

```
[ Root: Rocky's Digital Universe (RockyOS) ]
  │
  ├── [ Navigation Bar / OS System Header ]
  │     ├── Brand Identity ("ROCKY // OS")
  │     ├── Telemetry (Live System Clock & Status: ONLINE)
  │     ├── Navigation Links (Vision, Growth, Capabilities, Vault, Nexus)
  │     ├── Language Toggle: [ EN | 简体中文 ]
  │     └── Theme Toggle: [ Dark / Light ]
  │
  ├── [ Section 00: Hero & Kernel Philosophy ]
  │     ├── Headline: "Not a Portfolio. My Personal Operating System."
  │     ├── Sub-headline & 10-Year Mission Statement
  │     ├── Telemetry Stats (Horizon: 10 Yrs, Active Systems, Global Status)
  │     └── Primary CTAs: [ Explore Matrix ] [ Connect With Rocky ]
  │
  ├── [ Section 01: Growth Log (记录成长) ]
  │     ├── Section Manifesto ("Documenting evolution over a decade")
  │     ├── Milestone Timeline (2024 -> 2026 -> 2034)
  │     │     ├── Node: Genesis & Foundation (2024)
  │     │     ├── Node: System Expansion & AI Integration (2025-2026)
  │     │     └── Node: Future Horizon & Autonomous Scale (2027+)
  │     └── System Changelog Filter (Milestones, Architecture, Reflections)
  │
  ├── [ Section 02: Capability Matrix (展示能力) ]
  │     ├── Section Manifesto ("Real-world execution, engineered to scale")
  │     └── Bento Grid Cards:
  │           ├── Card 1: Modern Full-Stack Systems & High-Perf Web
  │           ├── Card 2: AI Engineering & Intelligent Workflows
  │           ├── Card 3: Enterprise Solutions & Cross-Border Delivery
  │           └── Card 4: Product Strategy & Technical Leadership
  │
  ├── [ Section 03: Knowledge Vault (分享知识) ]
  │     ├── Section Manifesto ("Synthesized models, architectures, and essays")
  │     └── Featured Knowledge Cards:
  │           ├── Model 01: Building Personal Operating Systems
  │           ├── Model 02: High-Leverage Engineering with AI
  │           └── Model 03: Cross-Cultural Tech Product Strategy
  │
  ├── [ Section 04: Nexus Connect (连接他人) ]
  │     ├── Section Manifesto ("Direct line to collaborate, consult, or connect")
  │     ├── Direct Inquiry Form
  │     ├── Channel Badges:
  │     │     ├── [ WeChat / 微信 ] -> Triggers QR Code Modal
  │     │     ├── [ Email / 邮箱 ] -> Click to Copy & Mailto
  │     │     ├── [ GitHub ] -> External Link
  │     │     └── [ LinkedIn / X ] -> External Link
  │     └── Interactive WeChat Modal (QR display, copy ID, auto-dismiss)
  │
  └── [ System Footer ]
        ├── System Manifest & Philosophy summary
        ├── Dynamic Copyright & Revision info (`v1.0.0`)
        └── Dual-language compliance / ICP record placeholder
```

---

## 2. User Journey & Demonstration Flow

### Flow A: International Visitor / Partner (English Default)
1. **Lands on Page**: Receives high-impact, cyber-clean aesthetic in English.
2. **Scans Vision**: Immediately understands Rocky's positioning: a long-term builder with an engineering mindset, not an ordinary portfolio.
3. **Explores Capability Matrix**: Reviews bento-grid cards detailing tech stacks, architectures, and delivered business value.
4. **Validates Track Record**: Reads the Growth Log to verify consistency and momentum.
5. **Reaches Out**: Uses the Nexus Connect form or direct email/LinkedIn to initiate an inquiry.

### Flow B: Chinese Customer Walkthrough (Rocky's Presentation Mode)
1. **Meeting Starts**: Rocky opens the website or shares screen with the Chinese client.
2. **Instant Language Switch**: Rocky clicks `[ 简体中文 ]` in the top right corner.
3. **Seamless Demonstration**:
   - The entire UI instantly transitions into natural, polished Simplified Chinese.
   - Rocky walks the client through the **4 Pillars** (记录成长, 展示能力, 分享知识, 连接他人).
   - Shows real-world solutions and explains project capabilities with zero translation delay.
4. **Instant Closing / Connection**: Rocky clicks the "WeChat / 微信" button, popping up the WeChat QR code so the client can immediately scan their phone to add Rocky on WeChat.

---

## 3. Data Schemas (JSON Architecture for `i18n`)

The information architecture relies on a centralized key-value dictionary to support rapid text swapping:

```json
{
  "en": {
    "nav": {
      "vision": "Vision",
      "growth": "Growth Log",
      "capabilities": "Capabilities",
      "vault": "Vault",
      "connect": "Connect"
    },
    "hero": {
      "tag": "PERSONAL OPERATING SYSTEM v1.0",
      "title": "Not a Portfolio.\nMy Personal Operating System.",
      "mission": "This is my digital universe: an evolving space to document growth, showcase capabilities, share knowledge, and connect with the world across the next decade."
    }
  },
  "zh": {
    "nav": {
      "vision": "愿景",
      "growth": "成长记录",
      "capabilities": "能力矩阵",
      "vault": "知识库",
      "connect": "连接他人"
    },
    "hero": {
      "tag": "个人成长操作系统 v1.0",
      "title": "不仅是一个作品集。\n这是我的个人操作系统。",
      "mission": "这是我的数字世界：一个记录成长、展示能力、分享知识、连接他人的地方。它记录着未来十年的真实进化。"
    }
  }
}
```
