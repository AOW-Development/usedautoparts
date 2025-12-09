import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Search by Make/Model", href: "/search" },
    { label: "Shop Online", href: "/shop" },
    { label: "FAQ", href: "/faq" },
  ];

  const resourcesLinks = [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Make a Payment", href: "/make-payment" },
    { label: "Submit a Ticket", href: "/support" },
  ];

  return (
    <footer className="bg-[#07142B] text-white pt-16 pb-10">
      {/* TOP SECTION */}
      <div className="max-w-6xl mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* COLUMN 1 */}
          <div className="space-y-4">
            <h2>
              LOGO
            </h2>

            <p className="text-[#B3D9FF] leading-relaxed max-w-xs">
              Information about the company information about the company
              information about the company
            </p>

            <div className="space-y-2 text-[#B3D9FF]">
              <p>US Toll Free: (877) 982-7774</p>
              <p>Fax: 3124859711</p>
              <p>Email: sales@usedautoparts.pro</p>
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
            <h3 className="mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-[#B3D9FF]">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
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
              <h3 className="mb-4">
                Resources
              </h3>
              <ul className="space-y-2 text-[#B3D9FF]">
                {resourcesLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
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
              <p className="mb-3">
                Pay Securely With
              </p>
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
