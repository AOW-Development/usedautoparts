import React from "react";
import CarPartsList from "@/components/CarPartsList";
import CarBrandInfo, { CarBrandInfoProps } from "@/components/CarBrandInfo";

function Page() {
  // Dummy data for CarBrandInfo
  const dummyData: CarBrandInfoProps = {
    brand: "DemoCar",
    title: "USED DEMOCAR AUTO PARTS FOR SALE",
    image: "/dummy-car.jpg",
    sections: [
      {
        heading: "ABOUT DEMOCAR",
        text:
          "DemoCar is a fictional automobile brand used for testing UI components. It features reliable engines, sleek designs, and advanced technology.",
      },
      {
        heading: "QUALITY PARTS",
        text:
          "All DemoCar parts in our store are thoroughly inspected, ensuring top-tier performance and reliability for customers across the country.",
      },
      {
        heading: "AFFORDABLE OPTIONS",
        text:
          "From engines to transmissions, headlights, bumpers, and electrical modules — we offer all parts at budget-friendly prices.",
      },
      {
        heading: "FAST QUOTATIONS",
        text:
          "Simply fill out our form and our support team will provide a quick quotation for DemoCar used parts within minutes.",
      },
    ],
  };

  return (
    <div className="">

      {/* Demo About Section Component */}
      <CarBrandInfo
        brand={dummyData.brand}
        title={dummyData.title}
        sections={dummyData.sections}
        image={dummyData.image}
      />
      <CarPartsList brand="Car" />
    </div>
  );
}

export default Page;
