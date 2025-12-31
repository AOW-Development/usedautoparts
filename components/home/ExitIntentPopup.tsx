"use client";

import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaTimes, FaCar, FaTools } from "react-icons/fa";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [trigger50, setTrigger50] = useState(false);
  const [triggerBottom, setTriggerBottom] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    year: "",
    make: "",
    model: "",
    name: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (docHeight <= 0) return;

      const scrollPercent = (scrollTop / docHeight) * 100;

      /* 🔹 Trigger at 50% */
      if (scrollPercent >= 50 && !trigger50) {
        setShow(true);
        setTrigger50(true);
      }

      /* 🔹 Trigger again at bottom (98%+) */
      if (scrollPercent >= 98 && !triggerBottom) {
        setShow(true);
        setTriggerBottom(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [trigger50, triggerBottom]);

  const closePopup = () => {
    setShow(false);
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^[\d\-\(\)\+\s]{10,}$/.test(phone);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!formData.year || !formData.make || !formData.model || !formData.name) {
    setError("Please fill Year, Make, Model, and Name.");
    return;
  }

  if (!validateEmail(formData.email)) {
    setError("Please enter a valid email address.");
    return;
  }

  if (!validatePhone(formData.phone)) {
    setError("Please enter a valid phone number.");
    return;
  }

  const lead = {
    ...formData,
    source: "exit-popup",
    timestamp: new Date().toISOString(),
  };

  try {
    /* 🔹 SEND EMAIL */
    const emailRes = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        year: formData.year,
        make: formData.make,
        model: formData.model,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,

        Source: "exit-popup",
        SourceCampaign: "exit-popup",
        SourceMedium: "popup",
        SearchBy: "web",
      }),
    });

    if (!emailRes.ok) {
      throw new Error("Email API failed");
    }

    /* 🔹 STORE LOCALLY (backup / analytics) */
    if (typeof window !== "undefined") {
      const storedLeads = JSON.parse(
        window.localStorage.getItem("exit_popup_leads") || "[]"
      );
      storedLeads.push(lead);
      window.localStorage.setItem(
        "exit_popup_leads",
        JSON.stringify(storedLeads)
      );
    }

    setError("");
    setSubmitted(true);
  } catch (err) {
    console.error(err);
    setError("Submission failed. Please try again.");
  }
};


  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4 py-4">
      <div className="relative w-full max-w-[440px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#07142B] via-[#0A2F5C] to-[#001D3D] border border-[#00A3FF]/40 shadow-[0_0_40px_rgba(0,163,255,0.6)] max-h-[100vh]">

        {/* CLOSE */}
        <button
          onClick={closePopup}
          className="absolute top-3 right-3 z-10 text-white hover:text-[#00A3FF] transition"
          aria-label="Close popup"
        >
          <FaTimes size={18} />
        </button>

        {/* HEADER */}
        <div className="bg-gradient-to-r from-[#00A3FF] to-[#003D80] p-5 text-center text-white">
          <h3 className="text-lg font-bold">Request Your Free Quote</h3>
          <p className="text-xs text-[#E8F3FF] mt-1">
            Enter your details and our experts will contact you shortly.
          </p>
        </div>

        {/* SUCCESS */}
        {submitted ? (
          <div className="p-6 text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-[#00A3FF]/30 rounded-full flex items-center justify-center">
              <FaTools className="text-[#00FFB2]" size={20} />
            </div>
            <h4 className="text-lg font-bold text-[#00FFB2]">
              Submission Successful!
            </h4>
            <p className="text-sm text-[#B3D9FF]">
              Your request has been received. One of our specialists will contact you shortly.
            </p>
            <button
              onClick={closePopup}
              className="mt-4 w-full bg-gradient-to-r from-[#00A3FF] to-[#003D80] text-white py-2.5 rounded-lg font-semibold hover:opacity-90 transition"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 space-y-4">

            {/* INPUTS (UNCHANGED) */}
            {[
              ["Year", "year", "2018, 2020", FaCar],
              ["Vehicle Make", "make", "Toyota, Ford", FaCar],
              ["Vehicle Model", "model", "Camry, F-150", FaCar],
              ["Full Name", "name", "John Doe", FaTools],
              ["Email Address", "email", "you@example.com", FaEnvelope],
              ["Phone Number", "phone", "(555) 123-4567", FaPhoneAlt],
            ].map(([label, key, placeholder, Icon]: any) => (
              <div key={key}>
                <label className="block text-xs font-semibold text-[#E8F3FF] mb-1.5">
                  {label}
                </label>
                <div className="flex items-center gap-2 bg-[#07142B] border border-[#00A3FF]/40 rounded-lg px-3 py-2.5 focus-within:border-[#00A3FF] transition">
                  <Icon className="text-[#00A3FF] text-sm flex-shrink-0" />
                  <input
                    type="text"
                    required
                    placeholder={placeholder}
                    value={(formData as any)[key]}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, [key]: e.target.value }))
                    }
                    className="w-full bg-transparent text-white text-sm placeholder-[#8CBFFF]/50 focus:outline-none"
                  />
                </div>
              </div>
            ))}

            {error && (
              <p className="text-red-400 text-xs font-medium text-center bg-red-500/10 py-2 rounded-lg">
                ⚠️ {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full mt-3 bg-gradient-to-r from-[#00A3FF] to-[#003D80] text-white py-2.5 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition shadow-[0_0_20px_rgba(0,163,255,0.6)]"
            >
              Get My Free Quote
            </button>

            <p className="text-[11px] text-center text-[#B3D9FF] pt-2">
              ✓ We respect your privacy. Your information is secure.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
