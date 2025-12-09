"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const COMPANY_INFO = {
  phone: "(877) 982-7774",
};

const navLinks = [
  { name: "Used Auto Parts", href: "/used-auto-parts" },
  { name: "Used Engines", href: "/engines" },
  { name: "Used Transmissions", href: "/transmissions" },
  { name: "About Us", href: "/about" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-wide text-white">
               LOGO
              </span>
            </Link>

            {/* ✅ DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
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
                <button className="bg-gradient-to-r from-[#1DA1F2] to-[#0F78D4] text-white px-5 py-2 rounded-md font-semibold shadow hover:opacity-90 transition">
                  Get a Quote
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

                return (
                  <Link
                    key={link.href}
                    href={link.href}
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
                <button className="w-full mt-2 bg-gradient-to-r from-[#1DA1F2] to-[#0F78D4] text-white py-2 rounded-md font-semibold shadow hover:opacity-90 transition">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
