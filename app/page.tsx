
import SearchCar from "@/components/home/search";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">Welcome to Used Auto Parts</h1>

      <SearchCar />
    </div>

  );
}
