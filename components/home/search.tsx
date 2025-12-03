import Image from "next/image";

const brands = [
  "1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg", "7.svg", "8.svg",
  "9.svg", "10.svg", "11.svg", "12.svg", "13.svg", "14.svg", "15.svg",
  "16.svg", "17.svg", "18.svg", "19.svg", "20.svg", "21.svg", "22.svg",
  "23.svg", "24.svg", "25.svg", "26.svg", "27.svg", "28.svg", "29.svg",
  "30.svg", "31.svg", "32.svg",
];

export default function SearchCar() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-16">
        Search by Car Brands
      </h2>

      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-4
          gap-10
          place-items-center       
          justify-items-center      
          justify-center 
        "
      >
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="
              w-28 h-28 
              bg-[#000000] 
              rounded-xl 
              flex items-center justify-center
              hover:scale-105 transition-transform
            "
          >
            <Image
              src={`/brand/${brand}`}
              alt={brand.replace(".svg", "")}
              width={60}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
