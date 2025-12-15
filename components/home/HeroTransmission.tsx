"use client";

import { useEffect, useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { PhoneCall, Mail, Loader2, Shield } from "lucide-react";
import { YEAR, MAKE, PART, ENGINE_SIZES, TRANSMISSION } from "@/app/config";

type OnOpenFn = (name: string | null) => void;
type OnSelectFn = (name: string, value: string) => void;
type OnChangeFn = (name: string, value: string) => void;

interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
}

// Optimize background images by using WebP and adding preload
const optimizedBackgroundImages: Record<string, string> = {
  "/hero/hero8.webp": "/hero/hero8.webp",
  "/hero/hero7.png": "/hero/hero7.webp", // Convert to webp
  "/hero/hero2.png": "/hero/hero2.webp", // Convert to webp
  "/hero/hero9.png": "/hero/hero9.webp", // Convert to webp
};

// Preload critical image on component mount
const preloadImage = (src: string) => {
  if (typeof window === 'undefined') return;
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
    // Extract URL from backgroundImage string (url('/hero/hero8.webp') -> /hero/hero8.webp)
    const bgUrl = backgroundImage.replace("url('", "").replace("')", "");
    const optimized = optimizedBackgroundImages[bgUrl] || bgUrl;
    setOptimizedBg(`url('${optimized}')`);
    
    // Preload the optimized image
    preloadImage(optimized);
  }, [backgroundImage]);

  return (
    <section
      id="lead-form"
      className="relative w-full min-h-[calc(100vh-80px)] mt-[0px] flex flex-col lg:flex-row bg-gradient-to-br from-[#07142B] via-[#0A2F5C] to-[#001D3D] overflow-hidden shadow-[0_-40px_120px_rgba(0,163,255,0.6)] bg-cover bg-center bg-fixed transition-all duration-500"
      style={{ backgroundImage: optimizedBg }}
      aria-label={`${title} - ${subtitle}`}
    >
      {/* Background Animated Cogs - Using SVG instead of react-icons
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-4 sm:top-14 sm:left-6 md:top-20 md:left-12 w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 opacity-10 text-[#00A3FF] animate-spin-slow">
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15.93v-2.02c-2.84-.48-5-2.94-5-5.91 0-1.68.7-3.2 1.82-4.28l1.42 1.42C7.59 8.65 7 9.77 7 11c0 2.76 2.24 5 5 5v2l3-3-3-3v2c-1.66 0-3-1.34-3-3s1.34-3 3-3V4.07c2.69.34 4.76 2.41 5.1 5.1h-2.02c-.34-1.68-1.7-3-3.48-3-1.87 0-3.4 1.51-3.4 3.38 0 1.28.69 2.41 1.72 3.03l1.42-1.42c-.45-.45-.74-1.08-.74-1.77 0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5v2.02c1.68.34 3 1.7 3 3.48 0 1.87-1.51 3.4-3.38 3.4-1.28 0-2.41-.69-3.03-1.72l-1.42 1.42c.83.83 1.96 1.3 3.15 1.3 2.76 0 5-2.24 5-5s-2.24-5-5-5v-2l-3 3 3 3v-2c1.66 0 3 1.34 3 3s-1.34 3-3 3v2.02z" />
          </svg>
        </div>

        <div className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-[#00A3FF]/15 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#0099FF]/15 rounded-full blur-3xl opacity-30"></div>
      </div> */}

      {/* Layout Grid */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 justify-between items-stretch lg:items-center px-4 sm:px-6 lg:px-8 py-0 sm:py-0 lg:py-0">
        {/* LEFT CONTENT */}
        <div className="text-white space-y-2 flex flex-col justify-center lg:justify-start relative flex-1 min-h-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-[0_-20px_60px_rgba(0,163,255,0.65)] transition-all duration-500">
            {title}
            <span className="block bg-gradient-to-r from-[#00A3FF] via-[#0099FF] to-[#003D80] bg-clip-text text-transparent">
              {subtitle}
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-[#8CBFFF] font-light transition-all duration-500">
            {description}
          </p>

          {/* Contact Buttons - Improved accessibility */}
          <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4 relative">
            {/* Call Now */}
            <a
              href="tel:+18883382540"
              aria-label="Call us at (888)-338-2540"
              className="flex items-center gap-3 sm:gap-4 w-fit rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00A3FF]/25 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,163,255,0.5)]" aria-hidden="true">
                <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-xs sm:text-sm text-[#8CBFFF]">Call Now</span>
                <p className="text-base sm:text-lg md:text-xl font-bold">(888)-338-2540</p>
              </div>
            </a>

            {/* Email Us */}
            <a 
              href="mailto:partscentralus@gmail.com" 
              aria-label="Email us at partscentralus@gmail.com"
              className="flex items-center gap-3 sm:gap-4 w-fit rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white relative hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00A3FF]/25 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,163,255,0.5)]" aria-hidden="true">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div>
                <span className="text-xs sm:text-sm text-[#8CBFFF]">Email Us</span>
                <p className="text-base sm:text-lg md:text-xl font-bold">partscentralus@gmail.com</p>
              </div>
            </a>
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

  // errors object
  const [errors, setErrors] = useState<Record<string, string>>({});

  // use config constants (imported)
  const yearOptions = useMemo(() => YEAR, []);
  const makes = useMemo(() => Object.keys(MAKE), []);
  const parts = useMemo(() => PART, []);
  const sizes = useMemo(() => ENGINE_SIZES, []);
  const transOptions = useMemo(() => TRANSMISSION, []);

  // models dependent on selected make
  const modelOptions = useMemo(() => 
    formData.make && MAKE[formData.make] ? MAKE[formData.make] : [],
    [formData.make]
  );

  // phone formatting
  const formatPhone = useCallback((v: string) => {
    const n = v.replace(/\D/g, "");
    if (n.length <= 3) return n;
    if (n.length <= 6) return `(${n.slice(0, 3)}) ${n.slice(3)}`;
    return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 10)}`;
  }, []);

  // validation
  const validate = useCallback(() => {
    const e: Record<string, string> = {};
    if (!formData.year || formData.year === "Year") e.year = "Choose Year.";
    if (!formData.make || formData.make === "Choose Your Car") e.make = "Choose your car make.";
    if (!formData.model || formData.model.trim() === "") e.model = "Choose or enter model.";
    if (!formData.part || formData.part === "Choose Part") e.part = "Choose Part.";
    if (!formData.engineSize || formData.engineSize === "Engine Size") e.engineSize = "Choose engine size.";
    if (!formData.transmission || formData.transmission === "Choose Transmission") e.transmission = "Choose transmission.";
    if (!formData.name) e.name = "Please enter your name.";
    if (!formData.email) e.email = "Please enter your e-mail.";
    else {
      const emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
      if (!emailRegex.test(formData.email)) e.email = "Invalid e-mail.";
    }
    if (!formData.phone) e.phone = "Please enter your phone no.";
    if (!formData.zipCode) e.zipCode = "ZIP code required.";
    return e;
  }, [formData]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const eObj = validate();
    setErrors(eObj);

    if (Object.keys(eObj).length > 0) {
      setIsSubmitting(false);
      const firstField = Object.keys(eObj)[0];
      if (["year", "make", "part", "engineSize", "transmission", "model"].includes(firstField)) {
        setOpenDropdown(firstField);
      }
      return;
    }

    // Mock submit - replace with actual API calls
    try {
      await new Promise((r) => setTimeout(r, 1200));
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      setErrors((p) => ({ ...p, submit: "Submission failed. Try again." }));
    } finally {
      setIsSubmitting(false);
    }
  }, [validate, router]);

  const handleInputChange = useCallback((name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  const handleSelectChange = useCallback((name: string, value: string) => {
    if (name === "make") {
      setFormData(prev => ({ ...prev, [name]: value, model: "" }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  }, [errors]);

  const handlePhoneChange = useCallback((value: string) => {
    const formatted = formatPhone(value);
    setFormData(prev => ({ ...prev, phone: formatted.replace(/\D/g, '') }));
    if (errors.phone) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.phone;
        return newErrors;
      });
    }
  }, [errors, formatPhone]);

  return (
    <div className="bg-gradient-to-br from-[#00A3FF] via-[#0080D0] to-[#001D3D] w-full h-full p-4 sm:p-5 md:p-6 border border-[#00A3FF]/30 shadow-xl flex flex-col overflow-hidden justify-between">
      {/* Changed from h3 to h2 for proper heading hierarchy */}
      <h2 className="text-[#E8F3FF] text-2xl sm:text-3xl font-extrabold mb-4 text-center tracking-wide">
        Find Your Part Instantly
      </h2>

      <form className="space-y-2 sm:space-y-3 flex-1 overflow-hidden" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <SelectFieldCustom
            label="Year"
            name="year"
            value={formData.year}
            options={yearOptions}
            onSelect={handleSelectChange}
            onOpen={setOpenDropdown}
            isOpen={openDropdown === "year"}
            required
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
            required
            error={errors.make}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {/* Model is now a dependent dropdown populated from MAKE[formData.make] */}
          <SelectFieldCustom
            label="Model"
            name="model"
            value={formData.model}
            options={modelOptions}
            onSelect={handleSelectChange}
            onOpen={setOpenDropdown}
            isOpen={openDropdown === "model"}
            required
            error={errors.model}
            placeholder={formData.make ? "Select model" : "Select make first"}
            disabled={!formData.make}
            emptyMessage={!formData.make ? "Select make to see models" : "No models found"}
          />

          <SelectFieldCustom
            label="Part"
            name="part"
            value={formData.part}
            options={parts}
            onSelect={handleSelectChange}
            onOpen={setOpenDropdown}
            isOpen={openDropdown === "part"}
            required
            error={errors.part}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <InputField label="Name" name="name" value={formData.name} placeholder="John Smith" onChange={handleInputChange} required error={errors.name} />
          <InputField label="Email" name="email" value={formData.email} placeholder="john@example.com" onChange={handleInputChange} required error={errors.email} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <InputField label="ZIP Code" name="zipCode" value={formData.zipCode} placeholder="12345" onChange={handleInputChange} required error={errors.zipCode} />

          <div>
            <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-[#E8F3FF] mb-1 sm:mb-2">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={formatPhone(formData.phone)}
              onChange={(ev) => handlePhoneChange(ev.target.value)}
              required
              placeholder="(555) 123-4567"
              aria-label="Phone number"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              className={`w-full h-10 sm:h-12 px-3 sm:px-4 bg-white border-2 rounded-lg text-gray-900 text-xs sm:text-sm ${errors.phone ? "border-red-600" : "border-[#0A5FA6]"}`}
            />
            {errors.phone && <p id="phone-error" className="text-red-600 text-xs mt-1">{errors.phone}</p>}
          </div>
        </div>

        {errors.submit && <p className="text-red-600 text-sm mt-1">{errors.submit}</p>}

        <button
          type="submit"
          disabled={isSubmitting}
          aria-label={isSubmitting ? "Submitting form" : "Submit form to find your part"}
          className="w-full h-10 sm:h-12 rounded-xl bg-gradient-to-r from-[#E8F3FF] to-[#B3D9FF] text-[#001D3D] font-bold flex items-center justify-center gap-2 mt-2 sm:mt-3 text-sm sm:text-base flex-shrink-0 cursor-pointer hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#00A3FF] disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" aria-hidden="true" />
              <span>Submitting…</span>
            </>
          ) : (
            "Find My Part"
          )}
        </button>
      </form>

      <div className="text-[#E8F3FF]/70 flex items-center justify-center gap-2 text-xs sm:text-sm mt-2 sm:mt-3 flex-shrink-0 pb-0">
        <Shield className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
        Your information is secure.
      </div>
    </div>
  );
}

/* ---------------------- Form Inputs ----------------------- */

function InputField(props: {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: OnChangeFn;
  required?: boolean;
  error?: string;
}) {
  const { label, name, value, placeholder, onChange, required, error } = props;
  const inputId = `input-${name}`;
  
  return (
    <div>
      <label htmlFor={inputId} className="block text-xs sm:text-sm font-semibold text-[#E8F3FF] mb-1 sm:mb-2">
        {label}
      </label>
      <input
        id={inputId}
        type="text"
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(name, e.target.value)}
        aria-label={label}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        className={`w-full h-10 sm:h-12 px-3 sm:px-4 bg-white rounded-lg text-gray-900 text-xs sm:text-sm border-2 ${error ? "border-red-600" : "border-[#0A5FA6]"}`}
      />
      {error && <p id={`${inputId}-error`} className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}

/* -------------------- SelectFieldCustom with search & nicer UI ------------------- */
function SelectFieldCustom(props: {
  label: string;
  name: string;
  value: string;
  options: string[];
  onSelect: OnSelectFn;
  onOpen: OnOpenFn;
  isOpen: boolean;
  required?: boolean;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  emptyMessage?: string;
}) {
  const { label, name, value, options, onSelect, onOpen, isOpen, required, error, placeholder, disabled, emptyMessage } = props;
  const [filter, setFilter] = useState("");
  const selectId = `select-${name}`;
  const dropdownId = `${selectId}-dropdown`;
  
  useEffect(() => {
    if (!isOpen) setFilter("");
  }, [isOpen]);

  const opts = Array.isArray(options) ? options : [];
  const filtered = filter.trim() ? opts.filter((o) => o.toLowerCase().includes(filter.trim().toLowerCase())) : opts;

  return (
    <div className="relative">
      <label htmlFor={selectId} className="block text-xs sm:text-sm font-semibold text-[#E8F3FF] mb-1 sm:mb-2">
        {label}
      </label>

      <button
        id={selectId}
        type="button"
        onClick={() => !disabled && onOpen(isOpen ? null : name)}
        className={`w-full h-10 sm:h-12 px-3 sm:px-4 bg-white rounded-lg text-gray-900 text-xs sm:text-sm text-left flex items-center justify-between border-2 ${error ? "border-red-600" : "border-[#0A5FA6]"} ${disabled ? "opacity-60 cursor-not-allowed" : ""} focus:outline-none focus:ring-2 focus:ring-[#00A3FF]`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={isOpen ? dropdownId : undefined}
        aria-invalid={!!error}
        aria-describedby={error ? `${selectId}-error` : undefined}
        disabled={disabled}
      >
        <span className={`${!value ? "text-gray-700" : ""}`}>
          {value || placeholder || "Select"}
        </span>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`} aria-hidden="true">
          ▼
        </span>
      </button>

      {isOpen && (
        <div 
          id={dropdownId}
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl z-50 max-h-64 overflow-hidden border-2 border-[#0A5FA6]" 
          role="listbox"
          aria-label={`${label} options`}
        >
          {/* Search input */}
          <div className="p-2 border-b border-gray-200">
            <input
              autoFocus
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder={`Search ${label}...`}
              className="w-full h-9 px-2 text-xs sm:text-sm rounded-md border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
              aria-label={`Search ${label}`}
            />
          </div>

          <div className="max-h-48 overflow-y-auto">
            {opts.length === 0 ? (
              <div className="px-4 py-3 text-sm text-gray-700" role="option">
                {emptyMessage || "No options"}
              </div>
            ) : filtered.length === 0 ? (
              <div className="px-4 py-3 text-sm text-gray-700" role="option">
                No results
              </div>
            ) : (
              filtered.map((opt) => {
                const selected = opt === value;
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      onSelect(name, opt);
                      onOpen(null);
                    }}
                    role="option"
                    aria-selected={selected}
                    className={`w-full text-left px-4 py-3 hover:bg-[#00A3FF]/10 flex items-center justify-between ${selected ? "bg-[#00A3FF]/10" : ""} focus:outline-none focus:bg-[#00A3FF]/10`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm sm:text-sm text-gray-900">{opt}</span>
                    </div>

                    {selected && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-80" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" stroke="#00A3FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </button>
                );
              })
            )}
          </div>
        </div>
      )}

      {error && <p id={`${selectId}-error`} className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}