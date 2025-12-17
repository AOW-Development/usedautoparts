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
    { label: "Shop Online", href: "https://partscentral.us/" },
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
      
      if (typeof window !== "undefined" && window.location.pathname === "/") {
        const element = document.getElementById("lead-form");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* COLUMN 1 - LOGO & CONTACT */}
          <div className="space-y-4">
         <Link href="/" className="flex items-center gap-2">
  <h1 className="text-base md:text-lg lg:text-xl font-black tracking-tight leading-tight text-[#ffffff]">
  PARTSCENTERAL LLC
</h1>
</Link>
            <p className="text-[#B3D9FF] leading-relaxed max-w-xs">
              Your trusted source for high-quality used OEM auto parts with a warranty and nationwide shipping
            </p>


            <div className="space-y-2 text-[#B3D9FF] text-sm">
              <p>
                US Toll Free:{" "}
                <a href="tel:(888) 338-2540" className="text-[#00A3FF] hover:underline font-semibold">
                  (888) 338-2540
                </a>
              </p>


              <p>
                Fax:{" "}
                <a href="tel:+13124859711" className="text-[#00A3FF] hover:underline font-semibold">
                  (312) 485-9711
                </a>
              </p>


              <p>
                Email:{" "}
                <a href="mailto:sales@partscentral.us" className="text-[#00A3FF] hover:underline font-semibold">
                  sales@partscentral.us
                </a>
              </p>
            </div>


            {/* SOCIAL ICONS */}
            <div className="flex gap-3 pt-3">
              <Link
                href="https://www.facebook.com/people/Parts-Central/61569958892836/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#00A3FF] hover:bg-[#0085CC] flex items-center justify-center transition duration-300"
              >
                <FaFacebookF className="text-white" size={16} />
              </Link>


              <Link
                href="https://www.instagram.com/autosquarecoinc/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#00A3FF] hover:bg-[#0085CC] flex items-center justify-center transition duration-300"
              >
                <FaInstagram className="text-white" size={16} />
              </Link>


              <Link
                href="https://www.linkedin.com/company/partscentral/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-[#00A3FF] hover:bg-[#0085CC] flex items-center justify-center transition duration-300"
              >
                <FaLinkedinIn className="text-white" size={16} />
              </Link>
            </div>
          </div>


          {/* COLUMN 2 - QUICK LINKS */}
          <div>
            <h3 className="mb-4 font-bold text-base">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#B3D9FF] hover:text-[#00A3FF] transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-[#B3D9FF] hover:text-[#00A3FF] transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>


          {/* COLUMN 3 - RESOURCES & PAYMENT */}
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 font-bold text-base">Resources</h3>
              <ul className="space-y-2">
                {resourcesLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-[#B3D9FF] hover:text-[#00A3FF] transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            {/* PAY SECURELY */}
            <div>
              <p className="mb-3 font-bold text-base">Pay Securely With</p>
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-10 bg-white rounded p-1">
                  <Image src="/footer/discover.svg" alt="Discover" fill className="object-contain" />
                </div>
                <div className="relative h-6 w-10 bg-white rounded p-1">
                  <Image src="/footer/mastercard.svg" alt="Mastercard" fill className="object-contain" />
                </div>
                <div className="relative h-6 w-10 bg-white rounded p-1">
                  <Image src="/footer/visa.svg" alt="Visa" fill className="object-contain" />
                </div>
                <div className="relative h-6 w-10 bg-white rounded p-1">
                  <Image src="/footer/american.svg" alt="American Express" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>


          {/* COLUMN 4 - ADDRESS SECTION */}
          <div className="space-y-4">
            <h3 className="font-bold text-base">Our Address</h3>
            <div className="space-y-2 text-[#B3D9FF] text-sm">
              <p className="font-semibold text-white">PartsCentral</p>
              <p>
                76 Imperial Dr Suite E<br />
                Evanston, WY 82930,<br />
                USA
              </p>
              <p className="pt-2">
                <a 
                  href="tel:+18883382540" 
                  className="text-[#00A3FF] hover:underline font-semibold transition-colors duration-200"
                >
                  (888) 338-2540
                </a>
              </p>
              <p>
                <a 
                  href="https://maps.app.goo.gl/jxstKDcSESp1Em3o8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#00A3FF] hover:underline font-semibold inline-flex items-center gap-1 transition-colors duration-200"
                >
                  View on Map →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-10 pt-4">
        <p className="text-center text-[#8CBFFF] text-sm">
          © {currentYear} Parts Central All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
