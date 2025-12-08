import { ShieldCheck, Truck, Clock, Award } from "lucide-react";

export default function TrustSignals() {
  return (
    <section className="bg-gradient-to-r from-[#07142B] via-[#0A2F5C] to-[#001D3D] text-white py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* ICON GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          
          {/* QUALITY */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <ShieldCheck className="w-9 h-9 sm:w-11 sm:h-11 text-[#00A3FF]" />
            <h3 className="font-bold text-sm sm:text-base">Verified Quality</h3>
            <p className="text-xs sm:text-sm text-[#B3D9FF]">
              100% OEM Authentic
            </p>
          </div>

          {/* SHIPPING */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <Truck className="w-9 h-9 sm:w-11 sm:h-11 text-[#00A3FF]" />
            <h3 className="font-bold text-sm sm:text-base">Free Shipping</h3>
            <p className="text-xs sm:text-sm text-[#B3D9FF]">
              All 50 States
            </p>
          </div>

          {/* RESPONSE */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <Clock className="w-9 h-9 sm:w-11 sm:h-11 text-[#00A3FF]" />
            <h3 className="font-bold text-sm sm:text-base">Fast Response</h3>
            <p className="text-xs sm:text-sm text-[#B3D9FF]">
              1 Hour Callback
            </p>
          </div>

          {/* WARRANTY */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <Award className="w-9 h-9 sm:w-11 sm:h-11 text-[#00A3FF]" />
            <h3 className="font-bold text-sm sm:text-base">
              90-Day Warranty
            </h3>
            <p className="text-xs sm:text-sm text-[#B3D9FF]">
              Guaranteed
            </p>
          </div>

        </div>

        {/* RATING */}
        <div className="text-center mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-[#00A3FF]/20">
          <div className="text-[#00A3FF] text-xl sm:text-2xl mb-2">
            ★★★★★
          </div>
          <p className="text-base sm:text-lg font-bold">
            4.9/5 (487 verified reviews)
          </p>
          <p className="text-xs sm:text-sm text-[#B3D9FF]">
            From real customers
          </p>
        </div>

      </div>
    </section>
  );
}
