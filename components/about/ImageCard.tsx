import Image from "next/image";

export default function ImageCard({ src }: { src: string }) {
  return (
    <div className="relative w-[100%] max-w-[560px] h-[360px]">
      <div className="
        absolute inset-0 rounded-[10px]
        bg-gradient-to-br from-[#049FFF] to-[#E8F3FF]
        shadow-[4px_4px_4px_rgba(3,113,181,0.25)]
      "></div>

      <Image
        src={src}
        alt="About"
        fill
        className="rounded-[10px] object-cover mix-blend-normal"
      />
    </div>
  );
}
