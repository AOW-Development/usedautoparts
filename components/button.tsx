"use client";

import { ReactNode } from "react";

export default function GradientButton({
  text,
  icon,
  width = 300,
  height = 50,
  textSize = "text-[18px]",
}: {
  text: string;
  icon?: ReactNode;
  width?: number;
  height?: number;
  textSize?: string;
}) {
  return (
    <div
      className="relative mx-auto"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div
        className="absolute inset-0 rounded-[40px]"
        style={{
          background: "linear-gradient(180deg, #049FFF 0%, #091B33 100%)",
          boxShadow:
            "inset -4px 0px 4px #0371B5, inset 4px 0px 4px #0371B5, inset 0px -4px 4px #0371B5, inset 0px 4px 4px #0371B5",
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center gap-2">
        {icon && icon}

        <span
          className={`font-[Orbitron] font-bold text-[#E8F3FF] leading-none ${textSize}`}
        >
          {text}
        </span>
      </div>
    </div>
  );
}
