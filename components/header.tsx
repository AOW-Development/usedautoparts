"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { useHero } from "@/app/context/HeroContext";

const COMPANY_INFO = {
  phone: "(888) 338-2540",
};

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Used Auto Parts", href: "/used-auto-parts" },
  { name: "Used Engines", href: "/engines" },
  { name: "Used Transmissions", href: "/transmissions" },
  { name: "About Us", href: "/about" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { setHeroConfig } = useHero();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleUsedTransmissionsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setHeroConfig({
      backgroundImage: "url('/hero/hero7.png')",
      title: "Premium Used Transmissions",
      subtitle: "Unlock Savings, Quality & Performance",
      description: "Reliable transmissions with expert support",
    });
    router.push("/transmissions");
  };

  const handleUsedEnginesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setHeroConfig({
      backgroundImage: "url('/hero/hero2.png')",
      title: "Premium Used Engines",
      subtitle: "Quality Rebuilt & Used Engines",
      description: "Tested and guaranteed performance",
    });
    router.push("/engines");
  };

  const handleUsedAutoPartsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setHeroConfig({
      backgroundImage: "url('/hero/hero9.png')",
      title: "Quality Used Auto Parts",
      subtitle: "Complete Parts Selection",
      description: "OEM quality at affordable prices",
    });
    router.push("/used-auto-parts");
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setHeroConfig({
      backgroundImage: "url('/hero/hero8.png')",
      title: "Trusted Used Parts Dealers",
      subtitle: "Quality Parts for Every Vehicle",
      description: "Affordable, trusted replacements for every make and model",
    });
    router.push("/");
  };

  return (
    <>
      {/* ✅ TOP INFO BAR */}
      <div className="bg-[#0B1C33] text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="hidden md:block">
            Premium Used Auto Parts | Fast Quotes | Nationwide Shipping
          </span>
          <a
            href={`tel:+18779827774`}
            className="flex items-center gap-2 font-semibold hover:text-white/80 transition"
          >
            <Phone className="h-4 w-4" />
            {COMPANY_INFO.phone}
          </a>
        </div>
      </div>

      {/* ✅ MAIN HEADER */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-[#0E3A75] border-b border-white/10 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            {/* ✅ LOGO */}
         <Link href="/" onClick={handleHomeClick} className="flex items-center gap-2">
         <Image
          src="/hero/navlogo.avif"
          alt="Used Auto Parts Pro Logo"
          width={1800}
          height={680}
          className="h-60 w-auto"
          priority
          />
         </Link>

            {/* ✅ DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                let handleClick: React.MouseEventHandler<HTMLAnchorElement> | undefined = undefined;
                if (link.name === "Used Transmissions") {
                  handleClick = handleUsedTransmissionsClick;
                } else if (link.name === "Used Engines") {
                  handleClick = handleUsedEnginesClick;
                } else if (link.name === "Used Auto Parts") {
                  handleClick = handleUsedAutoPartsClick;
                } else if (link.name === "Home") {
                  handleClick = handleHomeClick;
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleClick}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-[#d7ecff] hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* ✅ CTA + MOBILE TOGGLE */}
            <div className="flex items-center gap-4">
              <Link href="/#lead-form" className="hidden md:inline-flex">
                <button className="bg-gradient-to-r from-[#1DA1F2] to-[#0F78D4] text-white px-5 py-2 rounded-md font-semibold shadow hover:opacity-90 transition cursor-pointer">
                  Find My Part
                </button>
              </Link>

              <button
                className="lg:hidden p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </nav>

          {/* ✅ MOBILE MENU */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              isMobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <div className="bg-[#0B1C33] rounded-xl p-4 space-y-2 mt-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                let handleClick: React.MouseEventHandler<HTMLAnchorElement> | undefined = undefined;
                if (link.name === "Used Transmissions") {
                  handleClick = handleUsedTransmissionsClick;
                } else if (link.name === "Used Engines") {
                  handleClick = handleUsedEnginesClick;
                } else if (link.name === "Used Auto Parts") {
                  handleClick = handleUsedAutoPartsClick;
                } else if (link.name === "Home") {
                  handleClick = handleHomeClick;
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleClick}
                    className={`block px-4 py-3 rounded-lg font-medium transition text-sm ${
                      isActive
                        ? "bg-[#1DA1F2] text-white"
                        : "text-[#d7ecff] hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <Link href="/#lead-form" className="block">
                <button className="w-full mt-2 bg-gradient-to-r from-[#1DA1F2] to-[#0F78D4] text-white py-2 rounded-md font-semibold shadow hover:opacity-90 transition cursor-pointer">
                  Find My Part
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
