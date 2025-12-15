interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
}

export const heroData = {
  home: {
    backgroundImage: "url('/hero/hero8.webp')",
    title: "Premium Quality Used",
    subtitle: "OEM Car Parts",
    description: "Affordable, trusted replacements for every make and model.",
  },
  transmissions: {
    backgroundImage: "url('/hero/hero7.webp')",
    title: "Quality Used Transmissions",
    subtitle: "For Sale",
    description:
      "Affordable OEM-fit replacements, tested for performance and backed by warranty.",
  },
  engines: {
    backgroundImage: "url('/hero/hero2.webp')",
    title: "Trusted Used Engines",
    subtitle: "For Sale",
    description:
      "Save big on inspected OEM engines built for power and durability.",
  },
  autoParts: {
    backgroundImage: "url('/hero/hero9.webp')",
    title: "Used OEM Auto Parts",
    subtitle: "You Can Rely On",
    description:
      "Shop with confidence quality tested parts, warranty included, and fast delivery.",
  },
};
