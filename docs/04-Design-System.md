# 04. Design System: Rocky's Digital Universe

This document formalizes the visual tokens, typography hierarchies, color harmonies, and component standards for **Rocky's Digital Universe (RockyOS)**.

---

## 1. Design Direction: "Cosmic Personal OS"

The visual aesthetic bridges **high-end futuristic operating systems** with **warm editorial craftsmanship**. It avoids gimmicky sci-fi tropes in favor of crisp, modern, ultra-legible digital surfaces.

- **Foundational Feel**: Deep obsidian space, frosted glassmorphism, subtle grid guides, laser-crisp borders.
- **Accents**: Cyber Cyan (`#06b6d4`) for intelligence and clarity; Electric Indigo (`#6366f1`) for depth; Emerald Green (`#10b981`) for online telemetry.
- **Surface Elevation**: Frosted glass (`backdrop-filter: blur(16px)`) layered over subtle dark gradients.

---

## 2. Color Tokens (CSS Custom Properties)

```css
:root {
  /* Dark Mode (Default OS Theme) */
  --bg-core: #07090e;
  --bg-surface: #0e121b;
  --bg-surface-elevated: #151b27;
  --bg-glass: rgba(14, 18, 27, 0.75);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-active: rgba(6, 182, 212, 0.4);

  /* Primary Accent & Glow */
  --accent-cyan: #06b6d4;
  --accent-cyan-glow: rgba(6, 182, 212, 0.25);
  --accent-indigo: #6366f1;
  --accent-emerald: #10b981;
  --accent-amber: #f59e0b;

  /* Typography Colors */
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;
  --text-inverse: #07090e;

  /* Radius & Shadows */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-full: 9999px;
  --shadow-card: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  --shadow-glow: 0 0 25px rgba(6, 182, 212, 0.35);
}

/* Light Theme Variables */
[data-theme="light"] {
  --bg-core: #f8fafc;
  --bg-surface: #ffffff;
  --bg-surface-elevated: #f1f5f9;
  --bg-glass: rgba(255, 255, 255, 0.82);
  --border-subtle: rgba(0, 0, 0, 0.08);
  --border-active: rgba(6, 182, 212, 0.5);

  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #94a3b8;
  --text-inverse: #ffffff;
}
```

---

## 3. Typography Matrix (Dual-Language Optimized)

Chinese characters require specific line-heights and font fallback sequences to render harmoniously next to Latin numbers and letters.

### Font Families
```css
/* Monospace / Telemetry */
--font-mono: 'JetBrains Mono', 'Fira Code', Consolas, Monaco, monospace;

/* English Primary */
--font-sans-en: 'Space Grotesk', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;

/* Chinese Primary Fallback Sequence */
--font-sans-zh: -apple-system, BlinkMacSystemFont, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "WenQuanYi Micro Hei", "Noto Sans SC", sans-serif;
```

### Type Scale & Hierarchy

| Role | Size | Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- |
| **System Tag / Overline** | 12px / 0.75rem | 700 (Mono) | 1.2 | +0.12em (Uppercase) |
| **Hero Display (H1)** | 48px - 64px | 800 | 1.15 | -0.03em |
| **Section Title (H2)** | 32px - 40px | 700 | 1.25 | -0.02em |
| **Card Title (H3)** | 20px - 24px | 600 | 1.35 | -0.01em |
| **Body (English)** | 16px - 18px | 400 | 1.65 | normal |
| **Body (Chinese)** | 15px - 17px | 400 | **1.78** (Comfortable CJK rhythm) | +0.02em |
| **Caption / Meta** | 13px - 14px | 500 | 1.5 | normal |

---

## 4. Core UI Components

### 4.1 Navigation Glass Bar
- Fixed top, sticky position.
- Height: `72px` with a frosted background (`backdrop-filter: blur(16px)`).
- Embedded status beacon: pulsating green dot showing `ONLINE`.

### 4.2 Language Switcher Pill
- Sleek segmented toggle: `[ EN | 中文 ]`.
- Active language highlighted with a subtle cyan glow and bright text.
- One-click zero-latency transition.

### 4.3 Bento-Grid Capability Cards
- Distinctive asymmetric grid items.
- Glassmorphism background with `1px` gradient border.
- Interactive hover state: border illuminates in cyan, card rises by `4px`, and subtle inner radial glow follows the cursor.

### 4.4 WeChat QR Modal
- Centered popup modal with smooth scale & fade animation (`cubic-bezier(0.16, 1, 0.3, 1)`).
- Shows Rocky's WeChat QR code, WeChat ID, and an instant "Copy ID" button with copy feedback.
- Accessible dismissal via backdrop click or `Escape` key.
