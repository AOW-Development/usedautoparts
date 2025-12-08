import Image from "next/image";

const brands = [
  { img: "1.svg", name: "Acura" },
  { img: "2.svg", name: "Audi" },
  { img: "3.svg", name: "BMW" },
  { img: "4.svg", name: "Buick" },
  { img: "5.svg", name: "Cadillac" },
  { img: "6.svg", name: "Chevrolet" },
  { img: "7.svg", name: "Chrysler" },
  { img: "8.svg", name: "Dodge" },
  { img: "9.svg", name: "Eagle" },
  { img: "10.svg", name: "Ford" },
  { img: "11.svg", name: "GMC" },
  { img: "12.svg", name: "Honda" },
  { img: "13.svg", name: "Hyundai" },
  { img: "14.svg", name: "Infiniti" },
  { img: "15.svg", name: "Isuzu" },
  { img: "16.svg", name: "Jaguar" },
  { img: "17.svg", name: "Jeep" },
  { img: "18.svg", name: "KIA" },
  { img: "19.svg", name: "LandRover" },
  { img: "20.svg", name: "Lexus" },
  { img: "21.svg", name: "Lincoln" },
  { img: "22.svg", name: "Mazda" },
  { img: "23.svg", name: "Mercedes" },
  { img: "24.svg", name: "Mercury" },
  { img: "25.svg", name: "Mini" },
  { img: "26.svg", name: "Mitsubishi" },
  { img: "27.svg", name: "Nissan" },
  { img: "28.svg", name: "Pontiac" },
  { img: "29.svg", name: "Porsche" },
  { img: "30.svg", name: "SAAB" },
  { img: "31.svg", name: "Saturn" },
  { img: "32.svg", name: "Subaru" },
  { img: "33.svg", name: "Suzuki" },
  { img: "34.svg", name: "Toyota" },
  { img: "35.svg", name: "Volkswagen" },
  { img: "36.svg", name: "Volvo" }
];

export default function SearchCar() {
  return (
    <section className="w-full bg-gradient-to-br from-[#07142B] via-[#0A2F5C] to-[#001D3D]">
      <div className="max-w-7xl mx-auto px-6 py-20">

        <h2
          className="text-center font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] via-[#0099FF] to-[#dcedff]"
          style={{
            fontSize: "42px",
            fontFamily: "Copyman Bold",
          }}
        >
          Available Brands
        </h2>

        <div
          className="
            grid 
            grid-cols-2 
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-6 
            gap-12 
            place-items-center
          "
        >
          {brands.map((brand, idx) => (
            <div
              key={idx}
              className="
                w-[128px] h-[128px]
                rounded-2xl
                border border-[#049FFF]
                bg-[#091B33]
                flex flex-col items-center justify-center
                cursor-pointer
                shadow-[0_0_15px_rgba(29,78,216,0.2)]
                px-[7px] py-[10px]
              "
            >
              <div className="w-full h-[70px] flex items-center justify-center">
                <Image
                  src={`/brands/${brand.img}`}
                  alt={brand.name}
                  width={72}
                  height={72}
                  className="
                    object-contain 
                    max-h-full 
                    transition-transform 
                    duration-300 
                    hover:scale-125
                  "
                />
              </div>

              <p
                className="text-center w-full mt-[6px]"
                style={{
                  color: "#E8F3FF",
                  fontFamily: "Jaldi, sans-serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "100%",
                  whiteSpace: "nowrap",
                }}
              >
                {brand.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
