# 06. Technical Architecture: Rocky's Digital Universe

This document details the engineering stack, code organization, client-side translation engine, performance optimization, and deployment strategy for **Rocky's Digital Universe (RockyOS)**.

---

## 1. Architectural Philosophy

- **Zero Fragility / Zero Runtime Bloat**: Avoid massive multi-megabyte JavaScript bundles for what should be an ultra-fast, robust personal operating system.
- **Pure Web Standards**: HTML5, modern CSS3 (Custom Properties, Flexbox, CSS Grid, Media Queries), and Vanilla ECMAScript 6+.
- **Instant Client-Side i18n**: Sub-16ms language switching with zero network roundtrips.
- **Portability**: The entire codebase can be hosted on GitHub Pages, Vercel, Cloudflare Pages, Netlify, or self-hosted Nginx with zero compilation steps.

---

## 2. Directory Structure

```
Rocky-Digital-Universe/
├── docs/                               # Architectural & Strategic Specs
│   ├── 01-Vision.md
│   ├── 02-Requirements.md
│   ├── 03-Information-Architecture.md
│   ├── 04-Design-System.md
│   ├── 05-UI-UX.md
│   ├── 06-Technical-Architecture.md
│   ├── 07-Roadmap.md
│   ├── 08-AI-Prompts.md
│   └── CHANGELOG.md
│
├── app/                                # Application Core
│   ├── index.html                      # Semantic DOM with data-i18n attributes
│   ├── style.css                       # Design tokens, responsive layouts, glass effects
│   └── app.js                          # i18n engine, telemetry clock, modal controllers
│
├── public/                             # Static Assets
│   ├── favicon.svg
│   ├── wechat-qr.svg                   # WeChat connection placeholder / graphic
│   └── og-image.png                    # OpenGraph social share card
│
├── index.html                          # Root redirect or symlink to app/ for direct hosting
├── README.md                           # GitHub master presentation
└── .gitignore
```

---

## 3. Client-Side i18n Translation Engine

### 3.1 Mechanism
1. The DOM marks any translatable text or placeholder with a `data-i18n="key.path"` attribute:
   ```html
   <h1 data-i18n="hero.title">Not a Portfolio. My Personal Operating System.</h1>
   ```
2. In `app.js`, a structured dictionary stores translations for both languages (`en` and `zh`).
3. When the user toggles the language:
   ```javascript
   function setLanguage(lang) {
     localStorage.setItem('rocky_os_lang', lang);
     document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
     document.querySelectorAll('[data-i18n]').forEach(el => {
       const key = el.getAttribute('data-i18n');
       const translation = getNestedTranslation(dictionary[lang], key);
       if (translation) {
         if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
           el.placeholder = translation;
         } else {
           el.innerHTML = translation;
         }
       }
     });
   }
   ```
4. The preference is stored in `localStorage` and read on initial page load.

---

## 4. Performance & Core Web Vitals Targets

- **Largest Contentful Paint (LCP)**: < 0.8s
- **Cumulative Layout Shift (CLS)**: 0.00
- **First Input Delay (FID)**: < 10ms
- **Resource Footprint**: < 80 KB total uncompressed HTML + CSS + JS.

---

## 5. Deployment Options
1. **GitHub Pages**: Simply point repository settings to the root directory.
2. **Cloudflare Pages / Vercel**: Zero-config static output directory.
3. **Custom Domain**: Connect to `rocky.dev` or `rockyos.io`.
