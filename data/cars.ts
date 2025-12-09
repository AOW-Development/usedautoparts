
// TYPES -----------------------------------------------------

export type CarBrand = {
  id: string;
  title: string;

  heroSection: {
    headline: string;
    description: string;
    image?: {
      src: string;
      alt: string;
      position: "left" | "right" | string; // JSON-safe
    };
  };

  sections?: Record<
    string,
    {
      headline?: string;
      description?: string;

      // Simple arrays
      list?: string[];
      points?: string[];
      testimonials?: string[];
      models?: string[];

      // FAQ sections
      questions?: {
        question: string;
        answer: string;
      }[];

      // CTA
      cta?: string;

      // Nested structured content
      subsections?: Record<
        string,
        {
          headline?: string;
          list?: string[];
          exteriors?: string[];
          interiors?: string[];
        }
      >;
    }
  >;

  // Allow any other flexible fields safely
  [key: string]: any;
};

// IMPORT -----------------------------------------------------

import carsData from "./cars.json";

// Export all cars as this new type
export const allCars: CarBrand[] = carsData as CarBrand[];

// HELPERS -----------------------------------------------------

export function getCar(id: string): CarBrand | undefined {
  return allCars.find((c) => c.id === id);
}

export function getAllCarIds() {
  return allCars.map((car) => ({ id: car.id }));
}
