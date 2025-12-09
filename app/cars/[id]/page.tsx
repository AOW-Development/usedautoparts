"use client";

import { useParams } from "next/navigation";
import { getCar } from "@/data/cars";
import CarBrandInfo from "@/components/CarBrandInfo";
import CarPartsList from "@/components/CarPartsList";

export default function CarPage() {
  const params = useParams();
  const id = params?.id as string;

  console.log("PARAM ID →", id);

  const car = getCar(id);

  if (!car) {
    return <div className="p-20 text-red-500 text-3xl">Brand not found.</div>;
  }

  const capitalize = (str: string) =>
    str ? str[0].toUpperCase() + str.slice(1) : "";


  return <>
    <CarBrandInfo car={car} />
    <CarPartsList brand={capitalize(id)} />
  </>;
}
