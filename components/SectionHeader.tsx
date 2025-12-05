"use client";

interface SectionHeaderProps {
  title: string;
  gradient?: boolean; 
  padding?: string;   
  size?: "sm" | "md" | "lg"; 
}

export default function SectionHeader({
  title,
  gradient = true,
  padding = "py-2",
  size = "md",
}: SectionHeaderProps) {
  const sizeClasses = {
    sm: "text-[16px] sm:text-[20px] lg:text-[24px]",
    md: "text-[18px] sm:text-[24px] lg:text-[28px]",
    lg: "text-[24px] sm:text-[36px] lg:text-[48px]",
  };

  return (
    <section
      className={`
        w-full flex justify-center text-center
        ${padding}
        ${gradient ? "bg-gradient-to-b from-[#091B33] to-[#049FFF]" : ""}
      `}
    >
      <h1
        className={`
          font-[Orbitron] font-semibold tracking-wide 
          ${sizeClasses[size]}
        `}
      >
        {title}
      </h1>
    </section>
  );
}
