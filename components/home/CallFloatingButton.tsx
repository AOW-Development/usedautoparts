"use client";

import { PhoneCall } from "lucide-react";

export default function CallFloatingButton() {
  return (
    <a
      href="tel:(888) 338-2540"
      className="
        fixed
        left-4 sm:left-6
        bottom-4 sm:bottom-6
        z-40
        flex items-center gap-2
        bg-gradient-to-br from-[#00A3FF] to-[#003D80]
        text-white
        px-4 py-3
        rounded-full
        shadow-[0_0_25px_rgba(0,163,255,0.8)]
        transition-all duration-300
        hover:scale-110
        group
        animate-pulse
      "
    >
      <PhoneCall className="w-7.5 h-7.5" />

      {/* DESKTOP HOVER LABEL */}
      <span
        className="
          hidden sm:block
          max-w-0 overflow-hidden
          group-hover:max-w-xs
          transition-all duration-300
          whitespace-nowrap
          font-semibold text-sm
        "
      >
        Call Now
      </span>
    </a>
  );
}
