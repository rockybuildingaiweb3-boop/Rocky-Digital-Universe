"use client";

import React, { useState } from "react";
import { WorldPortalTemplate } from "@/features/galaxy/world-portal-template";
import { useLanguage } from "@/components/providers/language-provider";
import { WeChatModal } from "@/features/connection/wechat-modal";
import { Network, QrCode, Mail, MessageSquare } from "lucide-react";

export default function ConnectionPage() {
  const { locale } = useLanguage();
  const [isWeChatOpen, setIsWeChatOpen] = useState(false);
  const isZh = locale === "zh";

  const subsystems = [
    {
      number: "01",
      title: isZh ? "微信扫码直连通道" : "WeChat Direct Channel",
      desc: isZh ? "针对国内合作伙伴与技术顾问洽谈的高效即时沟通窗口。" : "Instant QR access for domestic partnerships, advisory, and projects.",
      tag: "WECHAT",
    },
    {
      number: "02",
      title: isZh ? "专业商务咨询邮箱" : "Executive Inquiry Email",
      desc: isZh ? "接收结构化长文合作提案、架构咨询与远程全球岗位合作邀请。" : "Structured proposals, architecture advisory, and global remote offers.",
      tag: "EMAIL",
    },
    {
      number: "03",
      title: isZh ? "开发者社交矩阵" : "Developer Social Network",
      desc: isZh ? "GitHub、X (Twitter)、LinkedIn 与技术创作者社区多维联动。" : "GitHub, LinkedIn, and developer community presence.",
      tag: "SOCIAL",
    },
    {
      number: "04",
      title: isZh ? "技术咨询预约表" : "Advisory Booking Form",
      desc: isZh ? "30分钟技术方案评审、前端架构体检与团队研发流程诊断预约。" : "30-minute architectural reviews and frontend system diagnostics.",
      tag: "CALENDAR",
    },
    {
      number: "05",
      title: isZh ? "全球远程协作协议" : "Remote Work Charter",
      desc: isZh ? "时区适应性、异步沟通原则、交付标准与代码评审价值观说明。" : "Time-zone agility, async communication norms, and delivery ethics.",
      tag: "PROTOCOL",
    },
    {
      number: "06",
      title: isZh ? "数字名片分享" : "Universal VCard Export",
      desc: isZh ? "一键保存 Rocky 的结构化数字名片至手机通讯录。" : "One-tap contact card download for native mobile address books.",
      tag: "VCARD",
    },
  ];

  return (
    <>
      <WorldPortalTemplate
        worldOrder="05"
        worldName={isZh ? "连接世界" : "Connection Realm"}
        worldSubtitle={isZh ? "打破孤岛，搭建连接思想、文化与业务价值的人性桥梁。" : "Human Bridge · Connecting Minds, Cultures, and Opportunities."}
        missionQuote={isZh ? "最先进的代码，最终服务于人与人之间真实的信任与协作。" : "The most sophisticated code exists to foster genuine human trust."}
        accentColor="#10b981"
        icon={Network}
        subsystems={subsystems}
      />

      {/* Direct Trigger Action in Subpage */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 mb-16 w-full flex justify-center">
        <button
          type="button"
          onClick={() => setIsWeChatOpen(true)}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-emerald-500/40 bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-300 font-mono text-xs font-bold transition-all shadow-lg active:scale-95"
        >
          <QrCode className="w-4 h-4" />
          <span>{isZh ? "立即呼出微信扫码弹窗" : "Open WeChat QR Direct Connect"}</span>
        </button>
      </div>

      <WeChatModal
        isOpen={isWeChatOpen}
        onClose={() => setIsWeChatOpen(false)}
      />
    </>
  );
}
