"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface HeroConfig {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
}

interface HeroContextType {
  heroConfig: HeroConfig;
  setHeroConfig: (config: HeroConfig) => void;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export function HeroProvider({ children }: { children: ReactNode }) {
  const [heroConfig, setHeroConfig] = useState<HeroConfig>({
    backgroundImage: "url('/hero/hero8.png')",
    title: "High-Quality Used Transmissions",
    subtitle: "Unlock Savings, Quality & Performance",
    description: "Reliable transmissions with expert support",
  });

  return (
    <HeroContext.Provider value={{ heroConfig, setHeroConfig }}>
      {children}
    </HeroContext.Provider>
  );
}

export function useHero() {
  const context = useContext(HeroContext);
  if (context === undefined) {
    throw new Error("useHero must be used within HeroProvider");
  }
  return context;
}
