"use client";

import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaTimes, FaCar, FaTools } from "react-icons/fa";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    make: "",
    model: "",
    part: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    // Check if popup was already dismissed in this session
    const isDismissed = localStorage.getItem("exitPopupDismissed");
    if (isDismissed) {
      setHasTriggered(true);
      return;
    }

    if (hasTriggered) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = (scrollPosition / pageHeight) * 100;

      if (scrollPercent >= 30 && !hasTriggered) {
        setShow(true);
        setHasTriggered(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasTriggered]);

  const closePopup = () => {
    setShow(false);
    // Mark popup as dismissed in localStorage
    localStorage.setItem("exitPopupDismissed", "true");
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone: string) =>
    /^[\d\-\(\)\+\s]{10,}$/.test(phone);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePhone(formData.phone)) {
      setError("Please enter a valid phone number.");
      return;
    }

    if (!formData.make || !formData.model || !formData.part) {
      setError("Please fill all vehicle and part details.");
      return;
    }

    const lead = {
      ...formData,
      source: "exit-popup",
      timestamp: new Date().toISOString(),
    };

    const storedLeads = JSON.parse(
      localStorage.getItem("exit_popup_leads") || "[]"
    );

    storedLeads.push(lead);
    localStorage.setItem("exit_popup_leads", JSON.stringify(storedLeads));

    // Mark popup as dismissed after successful submission
    localStorage.setItem("exitPopupDismissed", "true");

    setError("");
    setSubmitted(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4 py-4">
      <div className="relative w-full max-w-[440px] rounded-2xl overflow-hidden bg-gradient-to-br from-[#07142B] via-[#0A2F5C] to-[#001D3D] border border-[#00A3FF]/40 shadow-[0_0_40px_rgba(0,163,255,0.6)] max-h-[90vh] overflow-y-auto">

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

        {/* SUCCESS MESSAGE */}
        {submitted ? (
          <div className="p-6 text-center space-y-3">
            <div className="w-12 h-12 mx-auto bg-[#00A3FF]/30 rounded-full flex items-center justify-center">
              <FaTools className="text-[#00FFB2]" size={20} />
            </div>
            <h4 className="text-lg font-bold text-[#00FFB2]">
              Submission Successful!
            </h4>
            <p className="text-sm text-[#B3D9FF]">
              Your request has been received. One of our auto parts specialists
              will contact you shortly.
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

            {/* MAKE */}
            <div>
              <label className="block text-xs font-semibold text-[#E8F3FF] mb-1.5">
                Vehicle Company (Make)
              </label>
              <div className="flex items-center gap-2 bg-[#07142B] border border-[#00A3FF]/40 rounded-lg px-3 py-2.5 focus-within:border-[#00A3FF] transition">
                <FaCar className="text-[#00A3FF] text-sm flex-shrink-0" />
                <input
                  type="text"
                  required
                  placeholder="Toyota, Ford, Honda"
                  value={formData.make}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, make: e.target.value }))
                  }
                  className="w-full bg-transparent text-white text-sm placeholder-[#8CBFFF]/50 focus:outline-none"
                />
              </div>
            </div>

            {/* MODEL */}
            <div>
              <label className="block text-xs font-semibold text-[#E8F3FF] mb-1.5">
                Vehicle Model
              </label>
              <div className="flex items-center gap-2 bg-[#07142B] border border-[#00A3FF]/40 rounded-lg px-3 py-2.5 focus-within:border-[#00A3FF] transition">
                <FaCar className="text-[#00A3FF] text-sm flex-shrink-0" />
                <input
                  type="text"
                  required
                  placeholder="Camry, F-150"
                  value={formData.model}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, model: e.target.value }))
                  }
                  className="w-full bg-transparent text-white text-sm placeholder-[#8CBFFF]/50 focus:outline-none"
                />
              </div>
            </div>

            {/* PART */}
            <div>
              <label className="block text-xs font-semibold text-[#E8F3FF] mb-1.5">
                Part Required
              </label>
              <div className="flex items-center gap-2 bg-[#07142B] border border-[#00A3FF]/40 rounded-lg px-3 py-2.5 focus-within:border-[#00A3FF] transition">
                <FaTools className="text-[#00A3FF] text-sm flex-shrink-0" />
                <input
                  type="text"
                  required
                  placeholder="Engine, Transmission"
                  value={formData.part}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, part: e.target.value }))
                  }
                  className="w-full bg-transparent text-white text-sm placeholder-[#8CBFFF]/50 focus:outline-none"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-xs font-semibold text-[#E8F3FF] mb-1.5">
                Email Address
              </label>
              <div className="flex items-center gap-2 bg-[#07142B] border border-[#00A3FF]/40 rounded-lg px-3 py-2.5 focus-within:border-[#00A3FF] transition">
                <FaEnvelope className="text-[#00A3FF] text-sm flex-shrink-0" />
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, email: e.target.value }))
                  }
                  className="w-full bg-transparent text-white text-sm placeholder-[#8CBFFF]/50 focus:outline-none"
                />
              </div>
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-xs font-semibold text-[#E8F3FF] mb-1.5">
                Phone Number
              </label>
              <div className="flex items-center gap-2 bg-[#07142B] border border-[#00A3FF]/40 rounded-lg px-3 py-2.5 focus-within:border-[#00A3FF] transition">
                <FaPhoneAlt className="text-[#00A3FF] text-sm flex-shrink-0" />
                <input
                  type="tel"
                  required
                  placeholder="(555) 123-4567"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((p) => ({ ...p, phone: e.target.value }))
                  }
                  className="w-full bg-transparent text-white text-sm placeholder-[#8CBFFF]/50 focus:outline-none"
                />
              </div>
            </div>

            {/* ERROR */}
            {error && (
              <p className="text-red-400 text-xs font-medium text-center bg-red-500/10 py-2 rounded-lg">
                ⚠️ {error}
              </p>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full mt-3 bg-gradient-to-r from-[#00A3FF] to-[#003D80] text-white py-2.5 rounded-lg font-semibold hover:opacity-90 active:scale-95 transition shadow-[0_0_20px_rgba(0,163,255,0.6)]"
            >
              Get My Free Quote
            </button>

            {/* TRUST */}
            <p className="text-[11px] text-center text-[#B3D9FF] pt-2">
              ✓ We respect your privacy. Your information is secure and protected.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
