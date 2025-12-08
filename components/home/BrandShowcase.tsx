"use client";

import Image from "next/image";

const brands = Array.from({ length: 36 }, (_, i) => ({
  img: `${i + 1}.svg`,
  name: ["Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet"][i % 6],
}));

export default function BrandShowcase() {
  return (
    <section id="brands" className="py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          We Source Parts for All Brands
        </h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300 hover:border-blue-500 hover:shadow-lg transition text-center cursor-pointer"
            >
              <div className="h-12 flex items-center justify-center mb-2">
                <span className="font-bold">{brand.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
