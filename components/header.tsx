import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/30 backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo-autosquare.png"
            alt="logo"
            width={50}
            height={40}
          />
          <div>
            <p className="text-sm font-bold tracking-widest">AUTO SQUARE</p>
            <p className="text-xs tracking-widest">AUTO PARTS EXPERT</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-10 bg-[#00A3FF]/40 px-10 py-2 border border-white/40 rounded-3xl shadow-lg">
          <Link href="/" className="uppercase text-sm hover:text-[#CBF1FF]">
            Home
          </Link>
          <Link
            href="/used-auto-parts"
            className="uppercase text-sm hover:text-[#CBF1FF]"
          >
            Used AutoParts
          </Link>
          <Link
            href="/used-transmissions"
            className="uppercase text-sm hover:text-[#CBF1FF]"
          >
            Used Transmissions
          </Link>
          <Link
            href="/used-engines"
            className="uppercase text-sm hover:text-[#CBF1FF]"
          >
            Used Engines
          </Link>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <Image src="/mail.svg" alt="mail" width={28} height={28} />
          <Image src="/profile.svg" alt="profile" width={28} height={28} />
        </div>
      </div>
    </header>
  );
}