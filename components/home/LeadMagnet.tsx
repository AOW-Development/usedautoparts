"use client";

import { useState } from "react";

export default function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Save email
    fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Free Guide: Complete Part Buyer's Checklist
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Get the insider secrets to finding perfect parts at the best price (worth $47)
        </p>

        {submitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded-lg font-semibold">
            ✅ Check your email for the free guide!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your best email"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-3 rounded-lg transition"
            >
              Send Guide
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
