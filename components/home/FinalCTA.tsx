export default function FinalCTA() {
  return (
    <section
      className="py-20 bg-[#07142B] text-white text-center"
      aria-labelledby="final-cta-heading"
    >
      <div className="container max-w-3xl mx-auto px-4">
        <h2
          id="final-cta-heading"
          className="text-4xl font-bold mb-4"
        >
          Don&apos;t Overpay at the Dealership
        </h2>

        <p className="text-xl mb-8 text-gray-300">
          Get your quote today and save big on quality OEM parts.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+18779827774"
            className="bg-blue-600 text-white font-semibold px-10 py-4 rounded-lg hover:bg-blue-700 transition text-lg inline-flex items-center justify-center shadow-md"
            aria-label="Call now at 877-982-7774"
          >
            CALL NOW: (877) 982-7774
          </a>

          <a
            href="#quote"
            className="border border-white/30 text-white font-semibold px-10 py-4 rounded-lg hover:bg-white hover:text-[#07142B] transition text-lg inline-flex items-center justify-center shadow-md"
            aria-label="Get a free quote"
          >
            Get Free Quote
          </a>
        </div>

        <p className="text-sm mt-6 text-gray-400">
          Fast response guaranteed. No credit card required.
        </p>
      </div>
    </section>
  );
}
