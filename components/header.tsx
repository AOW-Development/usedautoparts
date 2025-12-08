"use client";

import Link from "next/link";
import { useState } from "react";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

export default function LeadGenNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 shadow-lg">

      {/* TOP STRIP WITH PHONE CTA */}
      <div className="bg-[#0B1C33] text-white text-xs sm:text-sm py-2 px-4 sm:px-6 flex justify-center md:justify-between items-center">
        <p className="hidden md:block">
          Premium Used Auto Parts | Fast Quotes | Nationwide Shipping
        </p>
        
        <a
          href="tel:+18779827774"
          className="flex items-center gap-2 font-semibold hover:text-[#8CCAFF] transition"
        >
          <FaPhoneAlt />
          (877) 982-7774
        </a>
      </div>

      {/* MAIN NAVBAR */}
      <nav className="bg-[#0E3A75] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="text-xl sm:text-2xl font-extrabold tracking-wide text-white">
            LOGO
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 text-sm font-medium text-white/90">

            <Link href="/used-auto-parts" className="hover:text-[#8CCAFF]">
              Used Auto Parts
            </Link>

            <Link href="/engines" className="hover:text-[#8CCAFF]">
              Used Engines
            </Link>

            <Link href="/transmissions" className="hover:text-[#8CCAFF]">
              Used Transmissions
            </Link>

            <Link href="/about" className="hover:text-[#8CCAFF]">
              About Us
            </Link>

            {/* MAIN CTA */}
            <Link
              href="/get-a-quote"
              className="bg-gradient-to-r from-[#1DA1F2] to-[#0F78D4] text-white px-5 lg:px-6 py-2 rounded-md font-semibold shadow hover:opacity-90 transition"
            >
              Get a Quote
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden text-2xl text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-[#0E3A75] text-white px-6 py-5 flex flex-col gap-4 text-sm font-medium">

            <Link href="/used-auto-parts" onClick={() => setOpen(false)} className="hover:text-[#8CCAFF]">
              Used Auto Parts
            </Link>

            <Link href="/engines" onClick={() => setOpen(false)} className="hover:text-[#8CCAFF]">
              Used Engines
            </Link>

            <Link href="/transmissions" onClick={() => setOpen(false)} className="hover:text-[#8CCAFF]">
              Used Transmissions
            </Link>

            <Link href="/about" onClick={() => setOpen(false)} className="hover:text-[#8CCAFF]">
              About Us
            </Link>

            {/* MOBILE CTA */}
            <Link
              href="/get-a-quote"
              onClick={() => setOpen(false)}
              className="bg-gradient-to-r from-[#1DA1F2] to-[#0F78D4] text-white text-center px-5 py-2 rounded-md font-semibold shadow hover:opacity-90 transition"
            >
              Get a Quote
            </Link>

            {/* PHONE CTA MOBILE */}
            <a
              href="tel:+18779827774"
              className="flex items-center gap-2 text-white font-semibold mt-2 hover:text-[#8CCAFF]"
            >
              <FaPhoneAlt /> Call Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
