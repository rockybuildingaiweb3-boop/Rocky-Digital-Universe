# 05. UI/UX Specification: Rocky's Digital Universe

This specification outlines the interaction patterns, micro-animations, accessibility, and user experience nuances for **Rocky's Digital Universe (RockyOS)**.

---

## 1. UX Guiding Principles

1. **Feels Alive (Living Organism)**: Micro-telemetry, live local time, and subtle ambient glows evoke an operating system that is actively running 24/7/365.
2. **Effortless Presentation Ergonomics**: Rocky should be able to switch languages with a single thumb tap on mobile or single click on desktop during presentations, with zero awkward waiting or broken layouts.
3. **Frictionless Action**: Every call to action (exploring a card, reading a log, scanning WeChat) has instant visual feedback and clear closure.

---

## 2. Interactive Micro-Interactions

### 2.1 Language Toggle Animation
- **Trigger**: Click or tap on `[ EN | 中文 ]`.
- **Motion**:
  - The text elements smoothly fade out slightly (`opacity: 0.7`) and fade back in (`opacity: 1`) over `150ms`.
  - The active pill slider slides horizontally with a swift spring easing:
    ```css
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    ```
  - `document.documentElement.lang` updates dynamically to ensure screen readers and browser engines adjust immediately.

### 2.2 WeChat Modal Flow
```
[User clicks "WeChat / 微信" Button]
                │
                ▼
[Backdrop overlay fades in: 0 -> 0.75 opacity]
[Modal scales in: transform scale(0.95) -> scale(1.0)]
                │
                ▼
[Displays QR Code, WeChat ID, and "Copy ID" button]
                │
         ┌──────┴──────┐
         ▼             ▼
   [Click "Copy"]   [Click Outside / Press ESC]
         │             │
         ▼             ▼
  [Tooltip: Copied!]  [Modal scales down & fades out]
```

### 2.3 Bento Card Hover Effects
- **Resting State**: `border: 1px solid rgba(255, 255, 255, 0.08); transform: translateY(0)`.
- **Hover State**:
  - `border-color: rgba(6, 182, 212, 0.5)`
  - `box-shadow: 0 12px 32px -8px rgba(6, 182, 212, 0.18)`
  - `transform: translateY(-4px)`
  - Transition duration: `0.3s ease`.

---

## 3. Responsive Breakpoint Matrix

| Viewport | Width | Layout Adjustments |
| :--- | :--- | :--- |
| **Mobile** | `< 768px` | Single-column stack. Sticky topbar with compact language pill. Full-width cards. Touch-friendly targets (`>= 48px`). |
| **Tablet** | `768px - 1024px` | 2-column bento grids. Visible telemetry badges. |
| **Desktop** | `> 1024px` | Full multi-column bento grid. Maximum content width: `1200px` centered. Full telemetry ticker. |

---

## 4. Accessibility (a11y) Standards
- **Color Contrast**: All body text maintains at least `7:1` contrast ratio against dark obsidian backgrounds.
- **Focus Rings**: High-visibility cyan outline (`outline: 2px solid var(--accent-cyan)`) for keyboard tab navigation.
- **Screen Reader Clarity**: Translatable attributes (`data-i18n`) update live ARIA labels where appropriate.
