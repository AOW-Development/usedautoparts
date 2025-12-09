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

  sections: Record<
    string,
    {
      headline?: string;
      description?: string;

      list?: string[];
      points?: string[];
      questions?: { question: string; answer: string }[];
      cta?: string;
      models?: string[];
      testimonials?: string[];

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
};
