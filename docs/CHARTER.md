# RockyOS — Engineering Development Charter (工程铁律三原则)

**Document ID:** RDU-CHARTER-001  
**Status:** In Effect (生效中)  
**Applicable Scope:** RockyOS Phase 1 & All Subsequent Engineering  

---

## 🛑 Core Pre-Implementation Rules (编码前必须严格遵循的三大铁律)

在编写任何一行业务代码、新增任何组件或进行任何系统迭代之前，所有开发者（包括 AI 助手）必须无条件确认并严格执行以下三条纪律：

### 纪律一：当前阶段只做 Phase 1 可上线最小版本 (MVP Scope Only)
* **核心目标**：绝不提前引入 Phase 3/4/5 的重量级外部依赖或复杂架构（如完整 CMS 后台、重型数据库服务等）。
* **交付范围**：
  1. 宇宙地图首页（Galaxy Universe Map）与六大星系世界入口原型；
  2. 毫秒级原生双语切换（英语为主 + 中文演示名片模式）；
  3. 微信扫码弹窗（含激光扫描微动效与一键复制微信号）；
  4. 10 年时间线成长日志骨架；
  5. 移动端与桌面端 100% 极速响应（CLS=0.00）。

---

### 纪律二：所有新功能必须先对应到某份文档 (Spec-First Rule)
* **不可随意发挥**：任何新增的页面、组件、功能按钮或样式规则，必须能追溯并对应到 `docs/` 下的某份架构规范中：
  - 愿景/价值观/生命历程 → 查阅 `docs/01_Vision.md`
  - 功能定义/前言剧场/设备断点 → 查阅 `docs/02_Requirements.md`
  - 页面结构/星系关系/导航层级/⌘K → 查阅 `docs/03_Information_Architecture.md`
  - 颜色变量/排版规范/动效时间 → 查阅 `docs/04_Design_System.md`
  - 交互流程/光标磁吸/阅读体验 → 查阅 `docs/05_UI_UX_Specification.md`
  - 技术架构/Next.js/类型定义 → 查阅 `docs/06_Technical_Architecture.md`
  - 演进阶段/版本节奏 → 查阅 `docs/07_Development_Roadmap.md`
  - 提示词模板 → 查阅 `docs/08_AI_Studio_Prompt_Library.md`
  - 运维/双区域部署/备案规范 → 查阅 `docs/09_Deployment_Maintenance.md`
* 若遇到未定义的需求，**先更新对应的文档，再写实现代码**。

---

### 纪律三：任何实现前必须先通读 02_Requirements.md 和 03_Information_Architecture.md (Pre-Flight Check)
* **避免跑偏走样**：每次开始实现具体功能前，必须先对照：
  1. `02_Requirements.md`：核对目标用户的期望、功能验收标准（AC）、交互细节与防错规范；
  2. `03_Information_Architecture.md`：核对该功能在六大世界中的具体位置、层级归属、返回路径与关联流转。
* 确保做出的每一个界面都“言之有物、层级清晰、绝无死胡同”。

---

## 📌 当前 Git 远端配置

- **GitHub 账户**: `rockybuildingaiweb3-boop`
- **项目仓库**: `https://github.com/rockybuildingaiweb3-boop/Rocky-Digital-Universe.git`
- **主分支**: `main`
