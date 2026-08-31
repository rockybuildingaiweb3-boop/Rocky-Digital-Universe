"use client";

import React, { useState } from "react";
import { Copy, Check, QrCode } from "lucide-react";

export function WeChatModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const wechatId = "rocky_digital_os";

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(wechatId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-sm p-6 rounded-2xl border border-white/10 bg-slate-900 text-center shadow-2xl">
        {/* Laser Scanner Indicator */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
          <QrCode className="w-3.5 h-3.5" />
          <span>WECHAT DIRECT CONNECT</span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2">Connect via WeChat (微信)</h3>
        <p className="text-xs text-slate-400 mb-6">
          Scan the QR code or copy the ID for domestic partnership & consulting.
        </p>

        {/* QR Frame with Laser Line */}
        <div className="relative mx-auto w-48 h-48 rounded-xl border border-white/10 bg-white/5 p-3 flex items-center justify-center overflow-hidden mb-6">
          {/* Laser beam animation */}
          <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse" />
          <div className="w-full h-full rounded-lg bg-white/10 flex items-center justify-center text-xs font-mono text-slate-400">
            [QR CODE MATRIX]
          </div>
        </div>

        {/* Copy WeChat ID Pill */}
        <div className="flex items-center justify-between p-2.5 rounded-xl border border-white/10 bg-white/5 text-xs font-mono mb-6">
          <span className="text-slate-300">ID: {wechatId}</span>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy ID</span>
              </>
            )}
          </button>
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="w-full py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  );
}
