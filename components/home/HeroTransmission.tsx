"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { PhoneCall, Mail, Loader2, Shield } from "lucide-react";
import { YEAR, MAKE, PART, ENGINE_SIZES, TRANSMISSION } from "@/app/config";

type OnChangeFn = (name: string, value: string) => void;

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
}

const optimizedBackgroundImages: Record<string, string> = {
  "/hero/hero8.webp": "/hero/hero8.webp",
  "/hero/hero7.png": "/hero/hero7.webp",
  "/hero/hero2.png": "/hero/hero2.webp",
  "/hero/hero9.png": "/hero/hero9.webp",
};

const preloadImage = (src: string) => {
  if (typeof window === "undefined") return;
  const img = new Image();
  img.src = src;
};

export default function HeroTransmission({
  backgroundImage,
  title,
  subtitle,
  description,
}: HeroProps) {
  const [optimizedBg, setOptimizedBg] = useState(backgroundImage);

  useEffect(() => {
    const bgUrl = backgroundImage.replace("url('", "").replace("')", "");
    const optimized = optimizedBackgroundImages[bgUrl] || bgUrl;
    setOptimizedBg(`url('${optimized}')`);
    preloadImage(optimized);
  }, [backgroundImage]);

  return (
    <section
  id="lead-form"
  className="relative w-full flex items-start justify-center
    px-3 sm:px-4 md:px-6 lg:px-8
    pt-8 sm:pt-10 md:pt-12
    pb-6 sm:pb-8
    bg-gradient-to-br from-[#07142B] via-[#0A2F5C] to-[#001D3D]
    overflow-hidden
    shadow-[0_-40px_120px_rgba(0,163,255,0.6)]
    bg-cover bg-center bg-fixed"
  style={{ backgroundImage: optimizedBg }}
  aria-label={`${title} - ${subtitle}`}
>
  <div className="relative z-10 w-full max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 items-start lg:items-center">

      {/* LEFT CONTENT */}
      <div className="hidden lg:flex text-white space-y-2 lg:space-y-3 flex-col justify-center flex-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-[0_-20px_60px_rgba(0,163,255,0.65)]">
          {title}
          <span className="block bg-gradient-to-r from-[#00A3FF] via-[#0099FF] to-[#003D80] bg-clip-text text-transparent">
            {subtitle}
          </span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-xl">
          {description}
        </p>

        <div className="space-y-2 pt-2">
          <a
            href="tel:+18883382540"
            className="flex items-center gap-3 w-fit rounded-lg px-3 py-2 text-white hover:scale-105 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-[#00A3FF]/25 flex items-center justify-center shadow-[0_0_15px_rgba(0,163,255,0.5)]">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-[#8CBFFF]">Call Now</span>
              <p className="text-base font-bold">(888)-338-2540</p>
            </div>
          </a>

          <a
            href="mailto:sales@partscentral.us"
            className="flex items-center gap-3 w-fit rounded-lg px-3 py-2 text-white hover:scale-105 transition-transform"
          >
            <div className="w-10 h-10 rounded-full bg-[#00A3FF]/25 flex items-center justify-center shadow-[0_0_15px_rgba(0,163,255,0.5)]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-[#8CBFFF]">Email Us</span>
              <p className="text-base font-bold">sales@partscentral.us</p>
            </div>
          </a>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col w-full lg:flex-1 gap-3 sm:gap-4">

        {/* MOBILE HEADING */}
        <div className="lg:hidden text-white space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            {title}
            <span className="block bg-gradient-to-r from-[#00A3FF] via-[#0099FF] to-[#003D80] bg-clip-text text-transparent">
              {subtitle}
            </span>
          </h1>

          <p className="text-sm sm:text-base font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* FORM */}
        <div className="rounded-2xl overflow-hidden shadow-[0_-30px_80px_rgba(0,163,255,0.6)] border border-[#00A3FF]/40">
          <LeadForm />
        </div>

        {/* MOBILE CONTACT BUTTONS */}
        <div className="lg:hidden space-y-2">
          <a
            href="tel:+18883382540"
            className="flex items-center gap-3 w-full rounded-lg px-3 py-2 text-white bg-[#00A3FF]/20"
          >
            <div className="w-10 h-10 rounded-full bg-[#00A3FF]/25 flex items-center justify-center">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-[#8CBFFF]">Call Now</span>
              <p className="text-sm font-bold">(888)-338-2540</p>
            </div>
          </a>

          <a
            href="mailto:sales@partscentral.us"
            className="flex items-center gap-3 w-full rounded-lg px-3 py-2 text-white bg-[#00A3FF]/20"
          >
            <div className="w-10 h-10 rounded-full bg-[#00A3FF]/25 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-[#8CBFFF]">Email Us</span>
              <p className="text-sm font-bold">sales@partscentral.us</p>
            </div>
          </a>
        </div>

      </div>
    </div>
  </div>
</section>

  );
}

/* ------------------------------------------------------------------ */
/*                              FORM                                  */
/* ------------------------------------------------------------------ */

export function LeadForm() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const [errors, setErrors] = useState<Record<string, string>>({});

  const yearOptions = useMemo(() => YEAR, []);
  const makes = useMemo(() => Object.keys(MAKE), []);
  const parts = useMemo(() => PART, []);
  const sizes = useMemo(() => ENGINE_SIZES, []);
  const transOptions = useMemo(() => TRANSMISSION, []);

  const modelOptions = useMemo(
    () => (formData.make && MAKE[formData.make] ? MAKE[formData.make] : []),
    [formData.make]
  );

  const formatPhone = useCallback((v: string) => {
    const n = v.replace(/\D/g, "");
    if (n.length <= 3) return n;
    if (n.length <= 6) return `(${n.slice(0, 3)}) ${n.slice(3)}`;
    return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 10)}`;
  }, []);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    return emailRegex.test(email);
  };

  const validate = useCallback(() => {
    const e: Record<string, string> = {};
    if (!formData.year || formData.year === "Year") e.year = "Choose Year.";
    if (!formData.make || formData.make === "Choose Your Car")
      e.make = "Choose your car make.";
    if (!formData.model || formData.model.trim() === "")
      e.model = "Choose or enter model.";
    if (!formData.part || formData.part === "Choose Part")
      e.part = "Choose Part.";
    if (!formData.engineSize || formData.engineSize === "Engine Size")
      e.engineSize = "Choose engine size.";
    if (!formData.transmission || formData.transmission === "Choose Transmission")
      e.transmission = "Choose transmission.";
    if (!formData.name) e.name = "Please enter your name.";
    if (!formData.email) e.email = "Please enter your e-mail.";
    else if (!validateEmail(formData.email)) e.email = "Invalid e-mail.";
    if (!formData.phone) e.phone = "Please enter your phone no.";
    if (!formData.zipCode) e.zipCode = "ZIP code required.";
    return e;
  }, [formData]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);

      const eObj = validate();
      setErrors(eObj);

      if (Object.keys(eObj).length > 0) {
        setIsSubmitting(false);

        const firstField = Object.keys(eObj)[0];
        if (
          ["year", "make", "part", "engineSize", "transmission", "model"].includes(
            firstField
          )
        ) {
          setOpenDropdown(firstField);
        }
        return;
      }

      try {
        const emailRes = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            year: formData.year,
            engine_size: formData.engineSize,
            make: formData.make,
            model: formData.model,
            transmission: formData.transmission,
            part: formData.part,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            zip_code: formData.zipCode,

            // tracking (unchanged)
          }),
        });

        if (!emailRes.ok) {
          throw new Error("Email API failed");
        }

        await new Promise((r) => setTimeout(r, 800));
        router.push("/thank-you");
      } catch (err) {
        console.error(err);
        setErrors((p) => ({
          ...p,
          submit: "Submission failed. Please try again.",
        }));
      } finally {
        setIsSubmitting(false);
      }
    },
    [
      validate,
      router,
      formData,
    ]
  );



  const handleInputChange = useCallback(
    (name: string, value: string) => {
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (errors[name]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    },
    [errors]
  );

  const handleSelectChange = useCallback(
    (name: string, value: string) => {
      if (name === "make") {
        setFormData((prev) => ({ ...prev, [name]: value, model: "" }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
      if (errors[name]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
      setOpenDropdown(null);
    },
    [errors]
  );

  const handlePhoneChange = useCallback(
    (value: string) => {
      const formatted = formatPhone(value);
      setFormData((prev) => ({
        ...prev,
        phone: formatted.replace(/\D/g, ""),
      }));
      if (errors.phone) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.phone;
          return newErrors;
        });
      }
    },
    [errors, formatPhone]
  );

  return (
    <div className="bg-gradient-to-br from-[#00A3FF] via-[#0080D0] to-[#001D3D] w-full sm:p-5 p-4 md:p-6 border border-[#00A3FF]/30 shadow-xl flex flex-col gap-4">
      <h2 className="text-[#E8F3FF] text-xl sm:text-2xl md:text-3xl font-extrabold text-center">
        Find Your Part Instantly
      </h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        <div className="grid grid-cols-2 gap-3">
          <SelectFieldCustom
            label="Year"
            name="year"
            value={formData.year}
            options={yearOptions}
            onSelect={handleSelectChange}
            onOpen={setOpenDropdown}
            isOpen={openDropdown === "year"}
            error={errors.year}
          />
          <SelectFieldCustom
            label="Make"
            name="make"
            value={formData.make}
            options={makes}
            onSelect={handleSelectChange}
            onOpen={setOpenDropdown}
            isOpen={openDropdown === "make"}
            error={errors.make}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SelectFieldCustom
            label="Model"
            name="model"
            value={formData.model}
            options={modelOptions}
            onSelect={handleSelectChange}
            onOpen={setOpenDropdown}
            isOpen={openDropdown === "model"}
            error={errors.model}
            disabled={!formData.make}
            placeholder={!formData.make ? "Select make first" : "Select model"}
          />
          <SelectFieldCustom
            label="Part"
            name="part"
            value={formData.part}
            options={parts}
            onSelect={handleSelectChange}
            onOpen={setOpenDropdown}
            isOpen={openDropdown === "part"}
            error={errors.part}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SelectFieldCustom
            label="Engine Size"
            name="engineSize"
            value={formData.engineSize}
            options={sizes}
            onSelect={handleSelectChange}
            onOpen={setOpenDropdown}
            isOpen={openDropdown === "engineSize"}
            error={errors.engineSize}
          />
          <SelectFieldCustom
            label="Transmission"
            name="transmission"
            value={formData.transmission}
            options={transOptions}
            onSelect={handleSelectChange}
            onOpen={setOpenDropdown}
            isOpen={openDropdown === "transmission"}
            error={errors.transmission}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <InputField
            label="Name"
            name="name"
            value={formData.name}
            placeholder="John Smith"
            onChange={handleInputChange}
            error={errors.name}
          />
          <InputField
            label="Email"
            name="email"
            value={formData.email}
            placeholder="john@example.com"
            onChange={handleInputChange}
            error={errors.email}
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <InputField
            label="ZIP Code"
            name="zipCode"
            value={formData.zipCode}
            placeholder="12345"
            onChange={handleInputChange}
            error={errors.zipCode}
          />
          <PhoneInputField
            label="Phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            error={errors.phone}
          />
        </div>

        {errors.submit && (
          <p className="text-red-300 text-sm text-center">{errors.submit}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-11 sm:h-12 rounded-xl bg-white text-[#001D3D] font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting…
            </>
          ) : (
            "Find My Part"
          )}
        </button>

        <a
          href="tel:+18883382540"
          className="w-full h-11 sm:h-12 rounded-xl bg-white text-[#001D3D] font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <PhoneCall className="w-4 h-4" />
          (888) 338-2540
        </a>
      </form>

      <div className="text-white/75 flex justify-center gap-2 text-sm pt-2 border-t border-white/20">
        <Shield className="w-4 h-4" />
        Your information is secure.
      </div>
    </div>
  );
}

/* ---------------------- INPUTS ---------------------- */

function InputField({
  label,
  name,
  value,
  placeholder,
  onChange,
  error,
}: {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: OnChangeFn;
  error?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <input
        value={value}
        placeholder={placeholder || label}
        onChange={(e) => onChange(name, e.target.value)}
        className={`w-full h-10 sm:h-11 md:h-12 px-3 bg-white rounded-lg text-sm sm:text-base text-black placeholder:text-gray-600 border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] shadow-sm ${error ? "border-red-400" : "border-[#0A5FA6] hover:border-[#00A3FF]"
          }`}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

function PhoneInputField({
  label,
  value,
  onChange,
  error,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  const formatPhone = useCallback((v: string) => {
    const n = v.replace(/\D/g, "");
    if (n.length <= 3) return n;
    if (n.length <= 6) return `(${n.slice(0, 3)}) ${n.slice(3)}`;
    return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 10)}`;
  }, []);

  return (
    <div className="flex flex-col gap-1">
      <input
        type="tel"
        value={formatPhone(value)}
        placeholder="(123) 456-7890"
        onChange={(e) => onChange(e.target.value)}
        className={`w-full h-10 sm:h-11 md:h-12 px-3 bg-white rounded-lg text-sm sm:text-base text-black placeholder:text-gray-600 border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] shadow-sm ${error ? "border-red-400" : "border-[#0A5FA6] hover:border-[#00A3FF]"
          }`}
      />
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}

/* ---------------------- SELECT ---------------------- */

function SelectFieldCustom({
  label,
  name,
  value,
  options,
  onSelect,
  onOpen,
  isOpen,
  error,
  disabled,
  placeholder,
}: {
  label: string;
  name: string;
  value: string;
  options: string[];
  onSelect: (name: string, value: string) => void;
  onOpen: (name: string | null) => void;
  isOpen: boolean;
  error?: string;
  disabled?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="flex flex-col gap-1">
      <select
        value={value}
        onChange={(e) => onSelect(name, e.target.value)}
        disabled={disabled}
        className={`w-full h-10 sm:h-11 md:h-12 px-3 bg-white rounded-lg text-sm sm:text-base text-black placeholder:text-gray-600 border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00A3FF] shadow-sm ${error
            ? "border-red-400"
            : disabled
              ? "border-gray-300 bg-gray-100 cursor-not-allowed"
              : "border-[#0A5FA6] hover:border-[#00A3FF]"
          }`}
      >
        <option value="">{placeholder || `Select ${label}`}</option>
        {options?.map((option) => (
          <option key={option} value={option} className="text-black">
            {option}
          </option>
        ))}
      </select>
      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}