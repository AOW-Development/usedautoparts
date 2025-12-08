"use client";

import { useState } from "react";
import { PhoneCall, Mail, Check, Loader2, Shield } from "lucide-react";
import { FaCog } from "react-icons/fa";

export default function HeroTransmission() {
  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] mt-[0px] flex flex-col lg:flex-row bg-gradient-to-br from-[#07142B] via-[#0A2F5C] to-[#001D3D] overflow-hidden shadow-[0_-40px_120px_rgba(0,163,255,0.6)]">
      
      {/* Background Animated Cogs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 sm:top-14 sm:left-6 md:top-20 md:left-12 w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 opacity-10 text-[#00A3FF] animate-spin-slow">
          <FaCog className="w-full h-full" />
        </div>

        <div className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-[#00A3FF]/15 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#0099FF]/15 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Layout Grid */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 justify-between items-stretch lg:items-center px-4 sm:px-6 lg:px-8 py-0 sm:py-0 lg:py-0">

        {/* LEFT CONTENT */}
        <div className="text-white space-y-2 flex flex-col justify-center lg:justify-start relative flex-1 min-h-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-[0_-20px_60px_rgba(0,163,255,0.65)]">
            High-Quality Used{" "}
            <span className="block bg-gradient-to-r from-[#00A3FF] via-[#0099FF] to-[#003D80] bg-clip-text text-transparent">
              Transmissions
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#B3D9FF] font-light">
            Unlock Savings, Quality & Performance
          </p>

          <p className="text-sm sm:text-base md:text-lg text-[#8CBFFF] font-light">
            Reliable transmissions with expert support
          </p>

          {/* Contact Buttons */}
          <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4 relative">

            {/* Call Now */}
            <a
              href="tel:+18779827774"
              className="flex items-center gap-3 sm:gap-4 w-fit rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00A3FF]/25 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,163,255,0.5)]">
                <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-xs sm:text-sm text-[#8CBFFF]">Call Now</span>
                <p className="text-base sm:text-lg md:text-xl font-bold">(877) 982-7774</p>
              </div>
            </a>

            {/* Email Us */}
            <div className="flex items-center gap-3 sm:gap-4 w-fit rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white relative hover:scale-105 transition-transform">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00A3FF]/25 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,163,255,0.5)]">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div>
                <span className="text-xs sm:text-sm text-[#8CBFFF]">Email Us</span>
                <p className="text-base sm:text-lg md:text-xl font-bold">support@usedautoparts.com</p>
              </div>

              <div className="hidden md:block absolute right-[-100px] lg:right-[-140px] top-[20%] translate-y-0 w-24 h-24 lg:w-32 lg:h-32 opacity-50 text-[#00A3FF] animate-spin-slow drop-shadow-[0_-10px_20px_rgba(0,163,255,0.6)] pointer-events-none">
                <FaCog className="w-full h-full" />
              </div>
            </div>

          </div>
        </div>

       {/* RIGHT SECTION — FORM */}
<div className="flex-1 mt-10 sm:mt-14 lg:mt-16 lg:self-start rounded-2xl overflow-hidden shadow-[0_-40px_110px_rgba(0,163,255,0.7)] border border-[#00A3FF]/40 flex flex-col">
  <LeadForm />
</div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*                            LEAD FORM                               */
/* ------------------------------------------------------------------ */

function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    year: "",
    make: "",
    model: "",
    part: "",
    engineSize: "",
    transmission: "",
    name: "",
    email: "",
    phone: "",
    zipCode: "",
  });

  const yearOptions = Array.from({ length: 35 }, (_, i) => (2025 - i).toString());
  const makes = ["Acura","Audi","BMW","Buick","Cadillac","Chevrolet","Chrysler","Dodge","Ford","GMC","Honda","Hyundai","Infiniti","Jeep","Kia","Lexus","Lincoln","Mazda","Mercedes-Benz","Nissan","Ram","Subaru","Tesla","Toyota","Volkswagen","Volvo"];
  const parts = ["Engine","Transmission","Transfer Case","Differential","Axle Assembly","Other"];
  const sizes = ["1.6L","2.0L","2.4L","3.0L","3.5L","4.0L","V6","V8","Other"];
  const transOptions = ["Automatic","Manual","CVT","Dual-Clutch","Other"];

  const formatPhone = (v: string) => {
    const n = v.replace(/\D/g, "");
    if (n.length <= 3) return n;
    if (n.length <= 6) return `(${n.slice(0, 3)}) ${n.slice(3)}`;
    return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 10)}`;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1500));
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        year: "",
        make: "",
        model: "",
        part: "",
        engineSize: "",
        transmission: "",
        name: "",
        email: "",
        phone: "",
        zipCode: "",
      });
      setOpenDropdown(null);
    }, 2500);

    setIsSubmitting(false);
  };

  if (isSuccess)
    return (
      <div className="bg-gradient-to-b from-[#00A3FF] to-[#001D3D] w-full h-full p-6 sm:p-8 md:p-10 border border-[#00A3FF]/40 text-center shadow-xl flex flex-col justify-center items-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-[#00A3FF]/30 border border-[#00A3FF] flex items-center justify-center">
          <Check className="w-8 h-8 sm:w-10 sm:h-10 text-[#00A3FF]" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3">THANK YOU!</h3>
        <p className="text-[#E8F3FF] text-sm sm:text-base">Our team will contact you within 24 hours.</p>
      </div>
    );

  return (
    <div className="bg-gradient-to-br from-[#00A3FF] via-[#0080D0] to-[#001D3D] w-full h-full p-4 sm:p-5 md:p-6 border border-[#00A3FF]/30 shadow-xl flex flex-col overflow-hidden justify-between">
     <h3 className="#001D3D text-2xl sm:text-3xl font-extrabold mb-4 text-center tracking-wide">
  Find Your Part Instantly
</h3>

      <form className="space-y-2 sm:space-y-3 flex-1 overflow-hidden" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <SelectFieldCustom label="Year" name="year" value={formData.year} options={yearOptions} onChange={setFormData} onOpen={setOpenDropdown} isOpen={openDropdown === "year"} required />
          <SelectFieldCustom label="Make" name="make" value={formData.make} options={makes} onChange={setFormData} onOpen={setOpenDropdown} isOpen={openDropdown === "make"} required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <InputField label="Model" name="model" value={formData.model} placeholder="Camry, F-150" onChange={setFormData} required />
          <SelectFieldCustom label="Part" name="part" value={formData.part} options={parts} onChange={setFormData} onOpen={setOpenDropdown} isOpen={openDropdown === "part"} required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <SelectFieldCustom label="Engine Size" name="engineSize" value={formData.engineSize} options={sizes} onChange={setFormData} onOpen={setOpenDropdown} isOpen={openDropdown === "engineSize"} />
          <SelectFieldCustom label="Transmission" name="transmission" value={formData.transmission} options={transOptions} onChange={setFormData} onOpen={setOpenDropdown} isOpen={openDropdown === "transmission"} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <InputField label="Name" name="name" value={formData.name} placeholder="John Smith" onChange={setFormData} required />
          <InputField label="Email" name="email" value={formData.email} placeholder="john@example.com" onChange={setFormData} required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <InputField label="ZIP Code" name="zipCode" value={formData.zipCode} placeholder="12345" onChange={setFormData} required />

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-[#E8F3FF] mb-1 sm:mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData((p) => ({ ...p, phone: formatPhone(e.target.value) }))}
              required
              placeholder="(555) 123-4567"
              className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-white border-2 border-[#0A5FA6] rounded-lg text-gray-900 text-xs sm:text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-10 sm:h-12 rounded-xl bg-gradient-to-r from-[#E8F3FF] to-[#B3D9FF] text-[#001D3D] font-bold flex items-center justify-center gap-2 mt-2 sm:mt-3 text-sm sm:text-base flex-shrink-0"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              Submitting…
            </>
          ) : (
            "Get Free Quote"
          )}
        </button>
      </form>

      <div className="text-[#E8F3FF]/70 flex items-center justify-center gap-2 text-xs sm:text-sm mt-2 sm:mt-3 flex-shrink-0 pb-0">
        <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
        Your information is secure.
      </div>
    </div>
  );
}

/* ---------------------- Form Inputs ----------------------- */

function InputField({ label, name, value, placeholder, onChange, required }: any) {
  return (
    <div>
      <label className="block text-xs sm:text-sm font-semibold text-[#E8F3FF] mb-1 sm:mb-2">{label}</label>
      <input
        type="text"
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange((p: any) => ({ ...p, [name]: e.target.value }))}
        className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-white border-2 border-[#0A5FA6] rounded-lg text-gray-900 text-xs sm:text-sm"
      />
    </div>
  );
}

function SelectFieldCustom({ label, name, value, options, onChange, onOpen, isOpen, required }: any) {
  return (
    <div className="relative">
      <label className="block text-xs sm:text-sm font-semibold text-[#E8F3FF] mb-1 sm:mb-2">{label}</label>
      <button
        type="button"
        onClick={() => onOpen(isOpen ? null : name)}
        className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-white border-2 border-[#0A5FA6] rounded-lg text-gray-900 text-xs sm:text-sm text-left flex items-center justify-between"
      >
        <span>{value || "Select"}</span>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>▼</span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-[#0A5FA6] rounded-lg shadow-lg z-50 max-h-40 sm:max-h-48 overflow-y-auto">
          {options.map((opt: string) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange((p: any) => ({ ...p, [name]: opt }));
                onOpen(null);
              }}
              className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 hover:bg-[#00A3FF] hover:text-white text-gray-900 text-xs sm:text-sm border-b border-gray-200 last:border-b-0"
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
