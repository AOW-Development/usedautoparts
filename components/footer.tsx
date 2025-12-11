"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Search by Make/Model", href: "/#lead-form" },
    { label: "Shop Online", href: "/#lead-form" },
    { label: "FAQ", href: "/faq" },
  ];

  const resourcesLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Make a Payment", href: "/#lead-form" },
    { label: "Submit a Ticket", href: "/#lead-form" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.includes("#lead-form")) {
      e.preventDefault();
      
      // If already on home page, scroll to element
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        const element = document.getElementById("lead-form");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Otherwise navigate to home page with hash
        window.location.href = href;
      }
    }
  };

  return (
    <footer className="bg-[#07142B] text-white pt-0 pb-10">
      {/* TOP LINE */}
      <div className="border-t border-[#00A3FF] mb-12"></div>

      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* COLUMN 1 */}
          <div className="space-y-4">
            <h2>LOGO</h2>

            <p className="text-[#B3D9FF] leading-relaxed max-w-xs">
              Information about the company information about the company
              information about the company
            </p>

            <div className="space-y-2 text-[#B3D9FF]">
  <p>
    US Toll Free:{" "}
    <a href="tel:+18779827774" className="hover:underline">
      (877) 982-7774
    </a>
  </p>

  <p>
    Fax:{" "}
    <a href="tel:+13124859711" className="hover:underline">
      3124859711
    </a>
  </p>

  <p>
    Email:{" "}
    <a href="mailto:sales@usedautoparts.pro" className="hover:underline">
      sales@usedautoparts.pro
    </a>
  </p>
</div>
            {/* SOCIAL ICONS */}
            <div className="flex gap-3 pt-3">
              <Link
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              >
                <FaFacebookF className="text-white" size={16} />
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              >
                <FaInstagram className="text-white" size={16} />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              >
                <FaLinkedinIn className="text-white" size={16} />
              </Link>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3 className="mb-4 font-bold">Quick Links</h3>
            <ul className="space-y-2 text-[#B3D9FF]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 font-bold">Resources</h3>
              <ul className="space-y-2 text-[#B3D9FF]">
                {resourcesLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* PAY SECURELY */}
            <div>
              <p className="mb-3 font-bold">Pay Securely With</p>
              <div className="flex items-center gap-3">
                <div className="relative h-6 w-10">
                  <Image src="/footer/discover.svg" alt="Discover" fill className="object-contain" />
                </div>
                <div className="relative h-6 w-10">
                  <Image src="/footer/mastercard.svg" alt="Mastercard" fill className="object-contain" />
                </div>
                <div className="relative h-6 w-10">
                  <Image src="/footer/visa.svg" alt="Visa" fill className="object-contain" />
                </div>
                <div className="relative h-6 w-10">
                  <Image src="/footer/american.svg" alt="American Express" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-10 pt-4">
        <p className="text-center text-[#8CBFFF]">
          © {currentYear} All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
