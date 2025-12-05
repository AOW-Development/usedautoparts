import { PhoneCall, Mail } from "lucide-react";

export default function ContactIconCard({
  label,
  iconType,
}: {
  label: string;
  iconType: "phone" | "mail";
}) {
  const Icon = iconType === "phone" ? PhoneCall : Mail;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="
        w-[110px] h-[110px] rounded-full 
        flex items-center justify-center 
        border-[5px] border-[#E8F3FF]
      ">
        <Icon size={50} color="#E8F3FF" strokeWidth={2.5} />
      </div>

      <p className="font-[Orbitron] text-[28px]">{label}</p>
    </div>
  );
}
