"use client";

import { useState } from "react";

export default function HeroSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    zip: "",
    phone: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.email || !form.name) {
      setStatus("Please fill in required fields.");
      return;
    }

    try {
      const res = await fetch("/api/submitForm", {
        method: "POST",
        body: JSON.stringify(form),
      });

      setStatus(res.ok ? "Request submitted successfully!" : "Error submitting form.");
    } catch (err) {
      setStatus("Network error.");
    }
  };

  return (
    <section className="pt-40 pb-20 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
      {/* Left Side */}
      <div className="space-y-6">
        <h1 className="text-4xl font-bold">Used Engines for Sale</h1>

        <div>
          <p className="text-2xl font-medium">Unlock Savings, Quality & Performance</p>
          <p className="text-2xl font-medium text-[#CBF1FF]">Affordable used auto parts</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-3 text-lg text-white/70">
          <p className="flex items-center gap-2">📞 (877) 982–7774</p>
          <p className="flex items-center gap-2">✉️ email@autosquare.com</p>
        </div>
      </div>

      {/* Form */}
      <div className="bg-[#00A3FF]/20 border border-white/50 shadow-xl rounded-2xl p-10 space-y-10">

        <h2 className="text-2xl font-semibold text-center">Refurbished Auto Parts</h2>

        {/* Dropdowns */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { name: "year", options: ["2024", "2023", "2022", "2021"] },
            { name: "car", options: ["Toyota", "Honda", "Ford", "Nissan"] },
            { name: "model", options: ["Model A", "Model B", "Model C"] },
            { name: "part", options: ["Engine", "Transmission", "Radiator"] },
            { name: "engineSize", options: ["2.0L", "2.4L", "3.0L"] },
            { name: "transmission", options: ["Automatic", "Manual"] },
          ].map((item, idx) => (
            <select
              key={idx}
              name={item.name}
              onChange={handleChange}
              className="bg-[#E8F3FF] text-[#090D15] px-4 py-3 rounded-lg border border-[#c7d5e8] focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
            >
              <option value="">Select {item.name}</option>
              {item.options.map((opt, i) => (
                <option key={i} value={opt}>{opt}</option>
              ))}
            </select>
          ))}
        </div>

        {/* Inputs */}
        <div className="grid grid-cols-2 gap-6">
          <input
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="bg-[#E8F3FF] text-[#090D15] px-4 py-3 rounded-lg border border-[#c7d5e8] focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
          />
          <input
            name="email"
            placeholder="Email Address *"
            onChange={handleChange}
            className="bg-[#E8F3FF] text-[#090D15] px-4 py-3 rounded-lg border border-[#c7d5e8] focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
          />
          <input
            name="zip"
            placeholder="Zip Code"
            onChange={handleChange}
            className="bg-[#E8F3FF] text-[#090D15] px-4 py-3 rounded-lg border border-[#c7d5e8] focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
          />
          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="bg-[#E8F3FF] text-[#090D15] px-4 py-3 rounded-lg border border-[#c7d5e8] focus:outline-none focus:ring-2 focus:ring-[#00A3FF]"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-[#00A3FF] rounded-lg font-semibold hover:bg-[#008CD6] transition"
        >
          Submit Request
        </button>

        {status && (
          <p className="text-center text-sm text-[#CBF1FF]">{status}</p>
        )}
      </div>
    </section>
  );
}
