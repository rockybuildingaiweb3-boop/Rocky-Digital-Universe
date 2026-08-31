/**
 * Rocky's Digital Universe (RockyOS)
 * Core System Engine: Zero-Latency i18n, Telemetry Clock, WeChat Modal, and UI Interactions
 */

// Bilingual Translation Dictionary (English Default, Simplified Chinese for Client Demonstration)
const i18nDictionary = {
  en: {
    nav: {
      status: "SYSTEM: ONLINE",
      vision: "Vision",
      growth: "Growth Log",
      capabilities: "Capabilities",
      vault: "Knowledge Vault",
      nexus: "Nexus Connect",
      quickConnect: "Connect"
    },
    hero: {
      badge: "ROCKYOS v1.0 // PERSONAL OPERATING SYSTEM",
      title: 'Not a Portfolio.<br><span class="gradient-text">My Personal Operating System.</span>',
      mission: "This is my digital universe: a living space to document growth, showcase capabilities, share knowledge, and connect with the world. Not just displaying who I am today, but chronicling the next decade of personal evolution.",
      ctaPrimary: 'Explore Capabilities <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
      ctaSecondary: "Initiate Connection",
      wechatDirect: "WeChat QR / 微信连接"
    },
    stats: {
      horizon: "Long-Term Horizon",
      architecture: "OS Core Structure",
      architectureSub: "Growth · Skills · Vault · Nexus",
      bilingual: "Bilingual Native",
      delivery: "Open Bridge",
      deliverySub: "WeChat & Global Nexus"
    },
    growth: {
      tag: "01 // RECORD GROWTH (记录成长)",
      title: "The 10-Year Evolution Log",
      desc: "Chronicling milestones, structural upgrades, and engineering philosophies as they evolve over time.",
      m1: {
        badge: "PHASE 1 / CURRENT",
        title: "Genesis: Rocky's Digital Universe Blueprint",
        body: "Architecting RockyOS — transitioning from traditional static portfolios to a self-evolving Personal Operating System. Established the 9-document specification suite, dual-language engine, and cosmic UI design system."
      },
      m2: {
        badge: "PHASE 2 / EXPANSION",
        title: "Global Delivery & AI Automation Pipeline",
        body: "Scaling cross-border engineering solutions, integrating intelligent agent workflows, and expanding the Knowledge Vault with proprietary mental models and business architectures."
      },
      m3: {
        badge: "PHASE 3 / HORIZON",
        title: "Autonomous Ecosystem & Long-Term Compounding",
        body: "A decade of accumulated engineering momentum: deploying autonomous multi-agent networks, mentoring builders, and maintaining an open knowledge commons for future innovators."
      }
    },
    caps: {
      tag: "02 // SHOWCASE CAPABILITIES (展示能力)",
      title: "Execution & Architectural Matrix",
      desc: "Real execution power. Building systems that bridge international technology standards with deep domestic execution.",
      c1: {
        badge: "SYSTEMS & WEB",
        title: "High-Performance Full-Stack Web Architecture",
        body: "Engineering ultra-fast, zero-bloat web applications and digital interfaces. Expert in modern semantic DOM, responsive CSS architectures, micro-animations, and sub-second Core Web Vitals."
      },
      c2: {
        badge: "INTELLIGENCE",
        title: "AI Studio & Agentic Automation",
        body: "Harnessing state-of-the-art LLMs, multi-agent workflows, and prompt engineering to automate complex operational and technical pipelines."
      },
      c3: {
        badge: "GLOBAL BRIDGE",
        title: "Bilingual Delivery & Cross-Border Strategy",
        body: "Bridging international standard expectations with native Chinese business requirements, facilitating frictionless cross-cultural technical delivery."
      },
      c4: {
        badge: "STRATEGY",
        title: "Product Craftsmanship & Long-Term Thinking",
        body: "Engineering with a 10-year mindset: building architectures that don't need rewriting every 6 months. Clean domain boundaries, ergonomic user experience, and verifiable commercial impact."
      }
    },
    vault: {
      tag: "03 // SHARE KNOWLEDGE (分享知识)",
      title: "The Thinking & Architecture Vault",
      desc: "Codified mental models, engineering standards, and principles discovered through real-world building.",
      readMore: "Read Principle →",
      a1: {
        cat: "SYSTEM THINKING",
        title: "Why Personal Operating Systems Outperform Static Resumes",
        summary: "Portfolios capture static past trophies. A Personal OS records momentum, living mental models, and a 10-year evolutionary trajectory that compounds with time."
      },
      a2: {
        cat: "ENGINEERING",
        title: "The Zero-Bloat Web: Building High-Speed Bilingual Engines",
        summary: "How to deliver sub-16ms bilingual switches and 99+ Core Web Vitals using pure web standards without bloated dependencies or server lag."
      },
      a3: {
        cat: "CROSS-CULTURAL",
        title: "Bilingual Presentation: How to Pitch to Chinese & Global Clients",
        summary: "Bridging international engineering expectations with the communication rhythms of Chinese business partners (e.g. WeChat agility and trust-building)."
      }
    },
    nexus: {
      tag: "04 // CONNECT WITH OTHERS (连接他人)",
      title: "Nexus Communications Hub",
      desc: "Reach out for high-impact technical collaboration, advisory, or direct project delivery.",
      formTitle: "Send a Direct Transmission",
      nameLabel: "Your Name / Identity",
      namePh: "e.g. Alexander Chen",
      emailLabel: "Email Address / WeChat",
      emailPh: "name@company.com or WeChat ID",
      msgLabel: "Project Scope or Message",
      msgPh: "Tell me about your vision, technical requirements, or consultation...",
      submitBtn: 'Transmit Message <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',
      channelsTitle: "Direct Connectivity Channels",
      channelsDesc: "Connect immediately via your preferred network. For Chinese partners, scanning the WeChat QR code provides instant mobile chat.",
      wechatBtn: "WeChat QR Code",
      wechatSub: "Click to View QR & ID",
      emailBtn: "Direct Email",
      clickCopy: "Copy",
      githubSub: "Code Repositories & OSS"
    },
    modal: {
      badge: "WECHAT CONNECT // 微信连接",
      title: "Scan to Connect on WeChat",
      desc: "Use WeChat camera or QR scanner on mobile to connect directly with Rocky.",
      idLabel: "WeChat ID / 微信号:",
      copyBtn: "Copy ID"
    },
    footer: {
      quote: '"This is my digital universe: a space to document growth, showcase capabilities, share knowledge, and connect with the world."',
      icp: "ICP Record: 粤ICP备20260831号-1 (Placeholder)"
    }
  },

  zh: {
    nav: {
      status: "系统状态: 在线运行",
      vision: "系统愿景",
      growth: "记录成长",
      capabilities: "展示能力",
      vault: "知识智库",
      nexus: "连接他人",
      quickConnect: "立即洽谈"
    },
    hero: {
      badge: "ROCKYOS v1.0 // 个人成长操作系统",
      title: '不仅是一个作品集。<br><span class="gradient-text">这是我的个人操作系统。</span>',
      mission: "这是我的数字世界：一个记录成长、展示能力、分享知识、连接他人的地方。不仅展示现在的自己，更记录未来十年成长的自己。网站应该随着人生一起成长。",
      ctaPrimary: '探索核心能力 <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>',
      ctaSecondary: "建立直接连接",
      wechatDirect: "微信名片 / 扫码连接"
    },
    stats: {
      horizon: "十年进化周期",
      architecture: "系统四大支柱",
      architectureSub: "成长 · 能力 · 知识 · 连接",
      bilingual: "原生双语自由",
      delivery: "全时开放桥梁",
      deliverySub: "微信与全球网络直接触达"
    },
    growth: {
      tag: "01 // 记录成长 (RECORD GROWTH)",
      title: "十年成长轨迹与演进日志",
      desc: "记录真实的技术突破、架构演进与人生心法，让数字世界随生命一同进化。",
      m1: {
        badge: "第一阶段 / 进行中",
        title: "创世纪：Rocky 数字宇宙架构确立",
        body: "架构 RockyOS — 从静态作品集转变为可持续演进的个人操作系统。建立 9 篇完备工程规范、双语极速切换引擎与现代宇宙感 UI。"
      },
      m2: {
        badge: "第二阶段 / 规模扩张",
        title: "全球项目交付与 AI 自动化管道",
        body: "拓展高标准的跨文化工程交付，集成前沿大模型与智能体工作流，并向知识智库输出专有思维模型与系统蓝图。"
      },
      m3: {
        badge: "第三阶段 / 自主生态",
        title: "自主智能生态与十年复利积累",
        body: "十载工程势能沉淀：部署多智能体自治协同网络，赋能更多年轻构建者，并向社区持续开源高质量知识资产。"
      }
    },
    caps: {
      tag: "02 // 展示能力 (SHOWCASE CAPABILITIES)",
      title: "硬核交付与系统架构能力",
      desc: "拒绝浮夸营销，专注于真实的系统交付。架设国际化标准与国内深度商业落地的坚固桥梁。",
      c1: {
        badge: "系统工程与 Web",
        title: "高并发极速全栈 Web 架构设计",
        body: "专注于构建零冗余、极速加载的现代化 Web 应用。精通现代语义 DOM、模块化 CSS 架构、丝滑微交互以及毫秒级 Core Web Vitals 性能优化。"
      },
      c2: {
        badge: "前沿智能",
        title: "AI Studio 提示工程与 Agent 自动化",
        body: "利用顶尖大语言模型、多智能体协同流水线与深度提示工程，自动化处理复杂的业务逻辑与研发流程。"
      },
      c3: {
        badge: "全球桥梁",
        title: "原生双语交付与跨文化商业对接",
        body: "完美融合国际软件工程的高标准与中国本土商业沟通的高效率，支持随时一键切换中文模式，面向国内客户流畅拆解业务价值。"
      },
      c4: {
        badge: "顶层策略",
        title: "产品长期主义与系统工匠精神",
        body: "以 10 年为视野进行架构推演：编写无需频繁重构的清晰模块化代码。严谨的领域边界划分、符合人体工程学的交互设计与清晰的商业回报。"
      }
    },
    vault: {
      tag: "03 // 分享知识 (SHARE KNOWLEDGE)",
      title: "深度思考与工程模型智库",
      desc: "沉淀在真实开发与商业实战中提炼出的心法、工程准则与思维模型。",
      readMore: "阅读核心心法 →",
      a1: {
        cat: "系统思维",
        title: "为什么个人操作系统远胜于静态作品集？",
        summary: "作品集只记录过去的陈旧战利品；个人操作系统记录的是生命动量、活着的思维模型以及随时间持续复利的十年进化轨迹。"
      },
      a2: {
        cat: "工程极简",
        title: "零依赖 Web：如何构建毫秒级响应的双语系统",
        summary: "如何依靠原生现代 Web 标准实现低于 16ms 的极速双语切换与满分 Web Vitals 指标，彻底摆脱笨重依赖和加载卡顿。"
      },
      a3: {
        cat: "跨文化实战",
        title: "双语展示艺术：如何向中外客户精准传递价值",
        summary: "如何融合国际化的工程信任背书与国内商业伙伴喜闻乐见的即时沟通习惯（例如微信生态的高效连接）。"
      }
    },
    nexus: {
      tag: "04 // 连接他人 (CONNECT WITH OTHERS)",
      title: "Nexus 通讯与协作中枢",
      desc: "欢迎探讨高价值技术合作、技术顾问咨询或直接项目落地交付。",
      formTitle: "发送直接传输讯息",
      nameLabel: "您的姓名 / 身份",
      namePh: "例如：陈先生 / Alex Chen",
      emailLabel: "邮箱地址 / 微信号",
      emailPh: "name@company.com 或 微信号",
      msgLabel: "项目需求或合作内容",
      msgPh: "请简要描述您的业务愿景、技术需求或咨询方向...",
      submitBtn: '立即传输讯息 <svg class="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>',
      channelsTitle: "多渠道即时连接",
      channelsDesc: "选择您最习惯的沟通渠道。对于中国商业伙伴，直接扫描微信二维码即可在手机端即时畅聊。",
      wechatBtn: "微信二维码连接",
      wechatSub: "点击展开名片码与微信号",
      emailBtn: "直接电子邮箱",
      clickCopy: "复制",
      githubSub: "代码仓库与开源项目"
    },
    modal: {
      badge: "WECHAT CONNECT // 微信连接",
      title: "扫码添加 Rocky 微信",
      desc: "请使用手机微信扫一扫，即可直接建立好友通讯。",
      idLabel: "微信号 / WeChat ID:",
      copyBtn: "复制微信号"
    },
    footer: {
      quote: "「这是我的数字世界，一个记录成长、展示能力、分享知识、连接他人的地方。」",
      icp: "工信部备案：粤ICP备20260831号-1（占位示例）"
    }
  }
};

// Current Active Language
let currentLang = 'en';

// Helper to safely query nested keys like 'hero.title'
function getNestedValue(obj, keyPath) {
  return keyPath.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// Function to set and persist language
function setLanguage(lang) {
  if (!i18nDictionary[lang]) return;
  currentLang = lang;
  localStorage.setItem('rocky_universe_lang', lang);

  // Update HTML lang attribute
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

  // Update buttons
  const btnEn = document.getElementById('btn-lang-en');
  const btnZh = document.getElementById('btn-lang-zh');
  if (btnEn && btnZh) {
    if (lang === 'en') {
      btnEn.classList.add('active');
      btnZh.classList.remove('active');
    } else {
      btnZh.classList.add('active');
      btnEn.classList.remove('active');
    }
  }

  // Update all elements with data-i18n
  const translatableElements = document.querySelectorAll('[data-i18n]');
  translatableElements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translatedText = getNestedValue(i18nDictionary[lang], key);
    if (translatedText !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translatedText;
      } else {
        el.innerHTML = translatedText;
      }
    }
  });
}

// Telemetry Clock
function initTelemetryClock() {
  const clockEl = document.getElementById('system-time');
  if (!clockEl) return;

  function update() {
    const now = new Date();
    const hours = String(now.getUTCHours()).padStart(2, '0');
    const minutes = String(now.getUTCMinutes()).padStart(2, '0');
    const seconds = String(now.getUTCSeconds()).padStart(2, '0');
    clockEl.textContent = `${hours}:${minutes}:${seconds} UTC`;
  }
  update();
  setInterval(update, 1000);
}

// WeChat Modal Controller
function openWeChatModal() {
  const modal = document.getElementById('wechat-modal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeWeChatModal() {
  const modal = document.getElementById('wechat-modal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function handleModalBackdrop(event) {
  if (event.target && event.target.id === 'wechat-modal') {
    closeWeChatModal();
  }
}

// Copy WeChat ID
function copyWeChatId() {
  const idEl = document.getElementById('wechat-id');
  const btn = document.getElementById('btn-copy-wechat');
  if (!idEl || !btn) return;

  const textToCopy = idEl.textContent.trim();
  navigator.clipboard.writeText(textToCopy).then(() => {
    const originalText = btn.textContent;
    btn.textContent = currentLang === 'zh' ? '已复制！' : 'Copied!';
    btn.style.backgroundColor = '#10b981';
    btn.style.color = '#ffffff';

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.backgroundColor = '';
      btn.style.color = '';
    }, 2000);
  }).catch(err => {
    console.error('Clipboard copy failed:', err);
  });
}

// Copy Email
function copyEmail() {
  const emailEl = document.getElementById('email-address');
  const badge = document.getElementById('copy-badge');
  if (!emailEl || !badge) return;

  const email = emailEl.textContent.trim();
  navigator.clipboard.writeText(email).then(() => {
    const originalText = badge.textContent;
    badge.textContent = currentLang === 'zh' ? '已复制！' : 'Copied!';
    badge.style.color = '#10b981';

    setTimeout(() => {
      badge.textContent = originalText;
      badge.style.color = '';
    }, 2000);
  });
}

// Theme Toggle (Dark / Light)
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle');
  if (!toggleBtn) return;

  const savedTheme = localStorage.getItem('rocky_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('rocky_theme', newTheme);
  });
}

// Contact Form Handler
function handleFormSubmit(event) {
  event.preventDefault();
  const feedbackEl = document.getElementById('form-feedback');
  if (!feedbackEl) return;

  feedbackEl.className = 'form-feedback success';
  feedbackEl.textContent = currentLang === 'zh' 
    ? '✓ 传输已成功发送！Rocky 将在 24 小时内回复您。'
    : '✓ Transmission received successfully! Rocky will respond within 24 hours.';

  event.target.reset();

  setTimeout(() => {
    feedbackEl.textContent = '';
  }, 5000);
}

// Keyboard Accessibility
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeWeChatModal();
  }
});

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initTelemetryClock();
  initThemeToggle();

  // Load persisted language or default to English
  const savedLang = localStorage.getItem('rocky_universe_lang') || 'en';
  setLanguage(savedLang);
});
