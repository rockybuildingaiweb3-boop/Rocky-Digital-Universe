# 09. Deployment & Maintenance Guide: Rocky's Digital Universe

This document provides a comprehensive operational guide for deploying, updating, securing, and maintaining **Rocky's Digital Universe (RockyOS)** across diverse international and Chinese domestic hosting environments.

---

## 1. Hosting Strategies

Because RockyOS is built on pure web standards (HTML5, Modern CSS, Vanilla ES6+), it offers 100% portability with zero server-side build lock-in.

### Strategy A: Global Edge Deployment (Vercel / Cloudflare Pages / GitHub Pages)
Ideal for international visitors with global CDN distribution:
- **Cloudflare Pages**:
  - Build command: *(None)*
  - Build output directory: `.` or `app`
  - Global edge latency: < 50ms worldwide.
- **GitHub Pages**:
  - In repository settings -> Pages -> Deploy from branch -> `/ (root)`.
  - The root `index.html` seamlessly directs traffic to `app/index.html`.

### Strategy B: China Domestic Deployment (Tencent Cloud COS / Alibaba Cloud OSS + CDN)
For high-speed domestic access within mainland China:
- Upload files from `app/` and `public/` to OSS/COS bucket.
- Enable static website hosting.
- Configure CDN acceleration with an ICP-registered custom domain (e.g. `rockyos.cn` or `rocky.com.cn`).

---

## 2. Environment & Domain Setup

### Recommended DNS Configuration
```
Type     Name    Value
CNAME    @       cname.vercel-dns.com (or cloudflare edge)
CNAME    www     cname.vercel-dns.com
TXT      @       verification-code-here
```

### SSL / HTTPS Policy
- Enforce strict HTTPS redirection with HSTS enabled.
- Zero mixed-content warnings (all Google Fonts and CDNs loaded over HTTPS).

---

## 3. Maintenance Workflows

### 3.1 Adding a New Growth Log Entry (记录成长)
1. Open `app/app.js`.
2. Locate `growthTimeline` array in the translation dictionary:
   ```javascript
   {
     period: "2026 Q3",
     titleEn: "Launched AI Workflow Engine",
     titleZh: "发布智能工作流引擎",
     descEn: "Engineered high-concurrency cross-border automation pipeline.",
     descZh: "完成高并发跨境自动化业务管道架构搭建与上线。"
   }
   ```
3. Append new entry and commit to Git:
   ```bash
   git add app/app.js docs/CHANGELOG.md
   git commit -m "feat(growth): log Q3 2026 milestone"
   git push origin main
   ```

### 3.2 Updating WeChat QR Code (微信连接)
1. Export your latest WeChat personal or business QR code.
2. Save as SVG or high-res PNG into `public/wechat-qr.png` (or `.svg`).
3. Update image reference in `app/index.html` if filename changed.

### 3.3 Adding a Knowledge Vault Article
1. Create markdown note in your personal notes or repository.
2. Add summary card into `app/index.html` under `#vault` with corresponding bilingual keys in `app/app.js`.

---

## 4. Disaster Recovery & Backup
- Complete repository state is preserved in Git version control.
- In case of hosting failure, point DNS to an alternate static host (e.g. switch from Cloudflare to Vercel or GitHub Pages) in under 5 minutes.
