// faqData.ts

export interface FAQItem {
  question: string;
  answer?: string;
  expanded?: boolean;
}

export const faqData: FAQItem[] = [
  {
    question: "How long does it usually take for my used part to arrive?",
    answer:
      "The typical delivery time is 5–7 business days after order confirmation. In some cases, delivery may take up to 10–14 business days depending on your location, part availability, and carrier conditions.",
    expanded: true,
  },
  {
    question: "What happens when the order is placed?",
    answer:
      "Once your order is confirmed, our team immediately begins sourcing your exact part from our nationwide network. After inspection and quality verification, your part is securely packaged and shipped with tracking details sent to you via email.",
  },
  {
    question: "How does my part arrive?",
    answer:
      "Your part is shipped through trusted freight or courier services, depending on size and weight. Engines and transmissions are shipped on secured pallets, while smaller parts are delivered via standard carriers.",
  },
  {
    question: "What is the best method to contact you for any questions or concerns?",
    answer:
      "You can reach us by calling our toll-free number, using the live chat on our website, or emailing our support team. Our customer service specialists are available to assist you promptly.",
  },
  {
    question: "Will I be receiving the exact part I have searched for?",
    answer:
      "Yes. We match parts based on your vehicle’s year, make, model, engine type, and VIN (when provided) to ensure exact compatibility.",
  },
  {
    question: "How do I know the part I found on your website is compatible with my vehicle?",
    answer:
      "Our specialists verify compatibility using your vehicle details and VIN to ensure a perfect match before processing the order.",
  },
  {
    question: "What will be included with my used Engine?",
    answer:
      "Your used engine typically includes the long block assembly with internal components. Accessories such as alternators, sensors, and manifolds may vary depending on availability.",
  },
  {
    question: "What is included with our remanufactured engines?",
    answer:
      "Remanufactured engines undergo complete teardown, inspection, replacement of worn parts, machining, and reassembly to OEM specifications. They are fully tested before shipment.",
  },
  {
    question: "What is included with my used Transmission?",
    answer:
      "Your used transmission includes the complete transmission assembly. Torque converters may be included depending on the inventory source.",
  },
  {
    question: "What forms of payments do you accept?",
    answer:
      "We accept all major credit cards, debit cards, wire transfers, and secure online payment options for your convenience.",
  },
  {
    question: "What is your Return Policy?",
    answer:
      "We offer a return policy within 30 days of delivery for unused parts in original condition. Restocking fees may apply. Please contact our support team for return authorization.",
  },
  {
    question: "Is a VIN required to purchase parts on the website?",
    answer:
      "While not mandatory, providing your VIN helps us ensure the most accurate match for your vehicle and prevents ordering errors.",
  },
  {
    question: "If I buy a used engine or transmission, are they ‘drop-in’ ready?",
    answer:
      "Used engines and transmissions are inspected and tested but may require installation-specific adjustments such as new gaskets, fluids, or sensors.",
  },
  {
    question: "Where do I track or check shipment status for an online order?",
    answer:
      "Once your order ships, we send a tracking number to your registered email. You can also contact our support team for live status updates.",
  },
];
