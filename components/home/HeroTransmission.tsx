"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneCall, Mail, Check, Loader2, Shield } from "lucide-react";
import { FaCog } from "react-icons/fa";

export default function HeroTransmission() {
  return (
    <section
      id="lead-form"
      className="relative w-full min-h-[calc(100vh-80px)] mt-[0px] flex flex-col lg:flex-row bg-gradient-to-br from-[#07142B] via-[#0A2F5C] to-[#001D3D] overflow-hidden shadow-[0_-40px_120px_rgba(0,163,255,0.6)]"
    >
      
      {/* Background Animated Cogs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-4 sm:top-14 sm:left-6 md:top-20 md:left-12 w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 lg:w-56 lg:h-56 opacity-10 text-[#00A3FF] animate-spin-slow">
          <FaCog className="w-full h-full" />
        </div>

        <div className="absolute top-1/3 left-1/4 w-64 h-64 sm:w-80 sm:h-80 bg-[#00A3FF]/15 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-[#0099FF]/15 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Layout Grid */}
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-8 justify-between items-stretch lg:items-center px-4 sm:px-6 lg:px-8 py-0 sm:py-0 lg:py-0">

        {/* LEFT CONTENT */}
        <div className="text-white space-y-2 flex flex-col justify-center lg:justify-start relative flex-1 min-h-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight drop-shadow-[0_-20px_60px_rgba(0,163,255,0.65)]">
            High-Quality Used{" "}
            <span className="block bg-gradient-to-r from-[#00A3FF] via-[#0099FF] to-[#003D80] bg-clip-text text-transparent">
              Transmissions
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#B3D9FF] font-light">
            Unlock Savings, Quality & Performance
          </p>

          <p className="text-sm sm:text-base md:text-lg text-[#8CBFFF] font-light">
            Reliable transmissions with expert support
          </p>

          {/* Contact Buttons */}
          <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-4 relative">

            {/* Call Now */}
            <a
              href="tel:+18779827774"
              className="flex items-center gap-3 sm:gap-4 w-fit rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white hover:scale-105 transition-transform"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00A3FF]/25 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,163,255,0.5)]">
                <PhoneCall className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <span className="text-xs sm:text-sm text-[#8CBFFF]">Call Now</span>
                <p className="text-base sm:text-lg md:text-xl font-bold">(877) 982-7774</p>
              </div>
            </a>

            {/* Email Us */}
            <a href="mailto:support@usedautoparts.com" className="flex items-center gap-3 sm:gap-4 w-fit rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white relative hover:scale-105 transition-transform">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#00A3FF]/25 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_rgba(0,163,255,0.5)]">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div>
                <span className="text-xs sm:text-sm text-[#8CBFFF]">Email Us</span>
                <p className="text-base sm:text-lg md:text-xl font-bold">support@usedautoparts.com</p>
              </div>

            </a>
              <div className="!hover:scale-100 hidden md:block absolute right-[-100px] lg:right-[20px] top-[30%] translate-y-0 w-24 h-24 lg:w-32 lg:h-32 opacity-50 text-[#00A3FF] animate-spin-slow drop-shadow-[0_-10px_20px_rgba(0,163,255,0.6)] pointer-events-none">
                <FaCog className="w-full h-full" />
              </div>

          </div>
        </div>

        {/* RIGHT SECTION — FORM */}
        <div className="flex-1 mt-10 sm:mt-14 lg:mt-16 lg:self-start rounded-2xl overflow-hidden shadow-[0_-40px_110px_rgba(0,163,255,0.7)] border border-[#00A3FF]/40 flex flex-col">
          <LeadForm />
        </div>

      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*                            LEAD FORM                               */
/* ------------------------------------------------------------------ */

function LeadForm() {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    year: "",
    make: "",
    model: "",
    part: "",
    engineSize: "",
    transmission: "",
    name: "",
    email: "",
    phone: "",
    zipCode: "",
  });

  const yearOptions = Array.from({ length: 65 }, (_, i) => (2025 - i).toString());
  const makes = ["AMC",
  "Acura",
  "Alfa",
  "Aston Martin",
  "Audi",
  "Bentley",
  "BMW",
  "Buick",
  "Cadillac",
  "Checker",
  "Chevy",
  "Chrysler",
  "Citroen",
  "Daewoo",
  "Daihatsu",
  "Dodge",
  "Eagle",
  "Ferrari",
  "Fiat",
  "Fisker",
  "Ford",
  "Freightliner",
  "GMC",
  "Genesis",
  "Geo",
  "Honda",
  "Hummer",
  "Hyundai",
  "IH",
  "Infiniti",
  "Isuzu",
  "Jaguar",
  "Jeep",
  "Kaiser",
  "Kenworth",
  "Kia",
  "Lamborghini",
  "Landrover",
  "Lexus",
  "Lincoln",
  "Maserati",
  "Maybach",
  "Mazda",
  "McLaren",
  "Mercedes",
  "Mercury",
  "Mini",
  "Mitsubishi",
  "Nissan",
  "Oldsmobile",
  "Peugeot",
  "Plymouth",
  "Polestar",
  "Pontiac",
  "Porsche",
  "RAM",
  "Renault",
  "RollsRoyce",
  "Rover",
  "Saab",
  "Saturn",
  "Scion",
  "Seat",
  "Subaru",
  "Suzuki",
  "Tesla",
  "Toyota",
  "Triumph",
  "Volkswagen",
  "Volvo",
  "Yugo"];
  const parts = [ "Engine Assembly",
  "Transmission",
  "ABS Control Module",
  "ABS System (Anti-Lock)",
  "AC Compressor",
  "AC Compressor Clutch",
  "AC Condenser",
  "AC Evaporator",
  "Air Bag Control Module",
  "Air Cleaner Box",
  "Air Flow Meter",
  "Air Injection Pump",
  "Alternator",
  "Axle Assembly - Front",
  "Axle Assembly - Rear",
  "Axle Housing",
  "Axle Shaft",
  "Back Glass",
  "Backup Lamp",
  "Beam Axle",
  "Bell Housing",
  "Blower Motor",
  "Body Control Module",
  "Brain Box (Engine)",
  "Brain Box (Not Engine)",
  "Brake Master Cylinder",
  "Bumper Assembly - Front",
  "Bumper Assembly - Rear",
  "Bumper Reinforcement - Front",
  "Bumper Reinforcement - Rear",
  "Camera/Projector",
  "Camshaft",
  "Car Window Lifter",
  "Car Window Regulator",
  "Carburetor",
  "Carrier Assembly",
  "Carrier Case",
  "Clutch Disc",
  "Clutch Master Cylinder",
  "Clutch Slave Cylinder",
  "Coil Spring",
  "Column Switch",
  "Communication Module",
  "Computer (Engine)",
  "Computer (Not Engine)",
  "Condenser Fan",
  "Control Arm - Lower (Front)",
  "Control Arm - Lower (Rear)",
  "Control Arm - Upper (Front)",
  "Control Arm - Upper (Rear)",
  "Convertible Top Lift",
  "Convertible Top Motor",
  "Cooling Fan",
  "Crankshaft",
  "Cruise Switch",
  "Cylinder Block",
  "Cylinder Head",
  "Dash Panel",
  "DC Converter (Inverter)",
  "Decklid",
  "Differential",
  "Differential Assembly",
  "Differential Case",
  "Differential Flange",
  "Distributor Coil",
  "DistributorCoil - Engine",
  "Door Assembly - Front",
  "Door Assembly - Rear",
  "Door Electrical Switch",
  "Door Glass - Front (Side)",
  "Door Glass - Rear (Side)",
  "Door Lock Control Module",
  "Door Vent Glass - Front (Side)",
  "Door Vent Glass - Rear (Side)",
  "Door Window Motor",
  "Door Window Regulator - Front",
  "Door Window Regulator - Rear",
  "Drive Shaft - Front",
  "Drive Shaft - Rear",
  "ECM/ECU (Engine)",
  "ECM/ECU (Not Engine)",
  "ECU (Not Engine)",
  "Electric Door Motor",
  "Electrical Switch (Door)",
  "Electronic Control Module (Engine)",
  "Electronic Control Module (Not Engine)",
  "Engine Coil",
  "Engine Computer",
  "Engine Control Module",
  "Engine Oil Cooler",
  "Exhaust Manifold",
  "Fan Blade",
  "Fan Clutch",
  "Fender",
  "Flywheel",
  "Fog Light Stalk",
  "Front Axle",
  "Front Axle I-Beam (2WD)",
  "Front Body Panel",
  "Front Bumper",
  "Front Bumper Reinforcement",
  "Front Clip",
  "Front Door Assembly",
  "Front Door Glass (Side)",
  "Front Door Hinge",
  "Front Door Vent Glass (Side)",
  "Front End Assembly",
  "Front Fender",
  "Front Side Lamp",
  "Front Spoiler",
  "Front Window Lifter",
  "Front Wiper Motor",
  "Fuel Injection Parts",
  "Fuel Pump",
  "Fuel Pump Control Module",
  "Generator",
  "GPS ScreenTV Info Screen",
  "Grille",
  "Harmonic Balancer",
  "Head Light Assembly",
  "Head Light Door",
  "Head Light Motor",
  "Head Light Switch",
  "Header Panel",
  "Heater Assembly",
  "Heater Core",
  "Heater or Air Conditioner Parts - Misc.",
  "High Mounted Stop Light",
  "Hood",
  "Hood Hinge",
  "Hub Brakes",
  "Ignition Switch",
  "Intake Manifold",
  "Intercooler",
  "Interior Light Control Module",
  "K-Frame",
  "Knee",
  "Leaf Spring - Front",
  "Leaf Spring - Rear",
  "Loaded Beam Axle",
  "Lower Control Arm - Front",
  "Lower Control Arm - Rear",
  "Navigation Control Module",
  "Oil Pan",
  "Overdrive Unit Transmission",
  "Power Brake Boosters",
  "Power Steering Pump",
  "Power Supply Control Module",
  "Power Window Motor",
  "Pressure Plate",
  "Quarter Glass",
  "Quarter Panel",
  "Quarter Window Regulator - Rear",
  "Radiator",
  "Radiator Cooling Fan",
  "Radiator Core Support",
  "Radiator Fan",
  "Radio/Audio Cowl",
  "Rear Axle",
  "Rear Body Panel",
  "Rear Bumper",
  "Rear Bumper Reinforcement",
  "Rear Clip Assembly",
  "Rear Door Assembly",
  "Rear Door Glass (Side)",
  "Rear Door Vent Glass (Side)",
  "Rear Fender",
  "Rear Independent Suspension Assembly",
  "Rear Lower Control Arm",
  "Rear Quarter Panel",
  "Rear Side Lamp",
  "Rear Spoiler",
  "Rear View Mirror",
  "Rear Window Washer Motor",
  "Rear Wiper Motor",
  "Ring Gear and Pinion Assembly",
  "Rocker Arm",
  "Roof Control Module",
  "Roof Glass",
  "SAM Control Module",
  "Seat Control Module",
  "Seat Track - Front",
  "Security System Control Module",
  "Shock Absorber",
  "Side Lamp (Front)",
  "Side Lamp (Rear)",
  "Side View Mirror",
  "Speedometer Cluster",
  "Spindle Knuckle - Front",
  "Spoiler - Front",
  "Spoiler - Rear",
  "Stabilizer Bar",
  "Starter Motor",
  "Starter Solenoid",
  "Steering Column",
  "Steering Gear - Rack & Pinion",
  "Strut",
  "Stub Axle - Rear",
  "Sun RoofMoon Roof",
  "Supercharger",
  "Suspension Compressor/Pump",
  "Suspension Control Module",
  "Suspension Crossmember",
  "Tail Finish Panel",
  "Tail Gate Hinge",
  "Tail Gate Molding",
  "Tail Gate Windor Regulator",
  "Tail Light",
  "Tail Panel",
  "Tailgate",
  "Temperature Control Module",
  "Throttle Body Assembly",
  "Timing Cover",
  "Torque Converter",
  "Torsion Bar",
  "Transfer Case",
  "Transfer Case Assembly",
  "Transmission Control Module",
  "Trunk Lid",
  "Turbocharger",
  "Turn Signal Lever",
  "Upper Control Arm - Front",
  "Upper Control Arm - Rear",
  "Vacuum Pump",
  "Valance - Front",
  "Voltage Regulator",
  "Water Pump",
  "Wheel",
  "Window Lifter",
  "Window Motor",
  "Window Regulator",
  "Window Regulator - Front",
  "Window Regulator - Rear",
  "Window Regulator (Quarter) - Rear",
  "Window Regulator (Tail Gate)",
  "Windshield Washer Motor",
  "Windshield Washer Reservoir",
  "Windshield Wiper Switch",
  "Wiper Motor - Front",
  "Wiper Motor - Rear",
  "Wiper Motor (Windshield)",
  "Wiper Transmission"];
  const sizes = [ "1.5L","1.6L","1.7L","1.8L","1.9L",
  "2.0L","2.1L","2.2L","2.3L","2.4L","2.5L","2.6L","2.7L","2.8L","2.9L",
  "3.0L","3.1L","3.2L","3.3L","3.4L","3.5L","3.6L","3.7L","3.8L","3.9L",
  "4.0L","4.1L","4.2L","4.3L","4.4L","4.5L","4.6L","4.7L","4.8L","4.9L",
  "5.0L","5.1L","5.2L","5.3L","5.4L","5.5L","5.6L","5.7L","5.8L","5.9L",
  "6.0L","6.1L","6.2L","6.3L","6.4L","6.5L","6.6L","6.7L","6.8L","6.9L",
  "7.0L","7.1L","7.2L","7.3L","7.4L","7.5L","7.6L","7.7L","7.8L","7.9L",
  "8.0L","8.1L","8.2L","8.3L","8.4L","8.5L","8.6L","8.7L","8.8L","8.9L",
  "9.0L","9.1L","9.2L","9.3L","9.4L","9.5L","9.6L","9.7L","9.8L","9.9L",
  "10.0L"];
  const transOptions = ["2WD / Automatic Transmission",
  "4x4 / Automatic Transmission",
  "2WD / Manual Transmission",
  "4x4 / Manual Transmission"];

  const formatPhone = (v: string) => {
    const n = v.replace(/\D/g, "");
    if (n.length <= 3) return n;
    if (n.length <= 6) return `(${n.slice(0, 3)}) ${n.slice(3)}`;
    return `(${n.slice(0, 3)}) ${n.slice(3, 6)}-${n.slice(6, 10)}`;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((r) => setTimeout(r, 1500));

    // Navigate to thank you page directly (no popup)
    router.push("/thank-you");

    setIsSubmitting(false);
  };

  return (
    <div className="bg-gradient-to-br from-[#00A3FF] via-[#0080D0] to-[#001D3D] w-full h-full p-4 sm:p-5 md:p-6 border border-[#00A3FF]/30 shadow-xl flex flex-col overflow-hidden justify-between">
      <h3 className="text-[#E8F3FF] text-2xl sm:text-3xl font-extrabold mb-4 text-center tracking-wide">
        Find Your Part Instantly
      </h3>

      <form className="space-y-2 sm:space-y-3 flex-1 overflow-hidden" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <SelectFieldCustom label="Year" name="year" value={formData.year} options={yearOptions} onChange={setFormData} onOpen={setOpenDropdown} isOpen={openDropdown === "year"} required />
          <SelectFieldCustom label="Make" name="make" value={formData.make} options={makes} onChange={setFormData} onOpen={setOpenDropdown} isOpen={openDropdown === "make"} required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <InputField label="Model" name="model" value={formData.model} placeholder="Camry, F-150" onChange={setFormData} required />
          <SelectFieldCustom label="Part" name="part" value={formData.part} options={parts} onChange={setFormData} onOpen={setOpenDropdown} isOpen={openDropdown === "part"} required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <SelectFieldCustom label="Engine Size" name="engineSize" value={formData.engineSize} options={sizes} onChange={setFormData} onOpen={setOpenDropdown} isOpen={openDropdown === "engineSize"} />
          <SelectFieldCustom label="Transmission" name="transmission" value={formData.transmission} options={transOptions} onChange={setFormData} onOpen={setOpenDropdown} isOpen={openDropdown === "transmission"} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <InputField label="Name" name="name" value={formData.name} placeholder="John Smith" onChange={setFormData} required />
          <InputField label="Email" name="email" value={formData.email} placeholder="john@example.com" onChange={setFormData} required />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          <InputField label="ZIP Code" name="zipCode" value={formData.zipCode} placeholder="12345" onChange={setFormData} required />

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-[#E8F3FF] mb-1 sm:mb-2">Phone Number</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData((p) => ({ ...p, phone: formatPhone(e.target.value) }))}
              required
              placeholder="(555) 123-4567"
              className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-white border-2 border-[#0A5FA6] rounded-lg text-gray-900 text-xs sm:text-sm"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-10 sm:h-12 rounded-xl bg-gradient-to-r from-[#E8F3FF] to-[#B3D9FF] text-[#001D3D] font-bold flex items-center justify-center gap-2 mt-2 sm:mt-3 text-sm sm:text-base flex-shrink-0"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
              Submitting…
            </>
          ) : (
            "Get Free Quote"
          )}
        </button>
      </form>

      <div className="text-[#E8F3FF]/70 flex items-center justify-center gap-2 text-xs sm:text-sm mt-2 sm:mt-3 flex-shrink-0 pb-0">
        <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
        Your information is secure.
      </div>
    </div>
  );
}

/* ---------------------- Form Inputs ----------------------- */

function InputField({ label, name, value, placeholder, onChange, required }: any) {
  return (
    <div>
      <label className="block text-xs sm:text-sm font-semibold text-[#E8F3FF] mb-1 sm:mb-2">{label}</label>
      <input
        type="text"
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange((p: any) => ({ ...p, [name]: e.target.value }))}
        className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-white border-2 border-[#0A5FA6] rounded-lg text-gray-900 text-xs sm:text-sm"
      />
    </div>
  );
}


function SelectFieldCustom({
  label,
  name,
  value,
  options,
  onChange,
  onOpen,
  isOpen,
  required,
}: any) {
  const [search, setSearch] = useState("");

  const filteredOptions = options.filter((opt: string) =>
    opt.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      <label className="block text-xs sm:text-sm font-semibold text-[#E8F3FF] mb-1 sm:mb-2">
        {label}
      </label>

      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => onOpen(isOpen ? null : name)}
        className="w-full h-10 sm:h-12 px-3 sm:px-4 bg-white border-2 border-[#0A5FA6] rounded-lg text-gray-900 text-xs sm:text-sm text-left flex items-center justify-between"
      >
        <span>{value || "Select"}</span>
        <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
          ▼
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border-2 border-[#0A5FA6] rounded-lg shadow-lg z-50 max-h-60 sm:max-h-72 overflow-y-auto">

          {/* 🔍 Search Bar */}
          <div className="p-2 border-b border-gray-200 sticky top-0 bg-white text-gray-700">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-2 py-2 text-xs sm:text-sm border border-gray-300 rounded focus:outline-none focus:border-[#00A3FF]"
            />
          </div>

          {/* Options */}
          {filteredOptions.map((opt: string) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange((p: any) => ({ ...p, [name]: opt }));
                setSearch("");
                onOpen(null);
              }}
              className="w-full text-left px-3 sm:px-4 py-2 sm:py-3 hover:bg-[#00A3FF] hover:text-white text-gray-900 text-xs sm:text-sm border-b border-gray-200 last:border-b-0"
            >
              {opt}
            </button>
          ))}

          {/* If no match */}
          {filteredOptions.length === 0 && (
            <div className="px-4 py-3 text-xs sm:text-sm text-gray-500 text-center">
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  );
}

