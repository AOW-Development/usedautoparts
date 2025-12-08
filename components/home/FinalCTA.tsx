export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white text-center">
      <div className="container max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">
          Don't Overpay at the Dealership
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Get your quote TODAY and save big on quality parts
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+18779827774"
            className="bg-white text-red-600 font-bold px-10 py-4 rounded-lg hover:bg-gray-100 transition text-lg"
          >
            📞 CALL NOW: (877) 982-7774
          </a>
          <a
            href="#quote"
            className="border-2 border-white text-white font-bold px-10 py-4 rounded-lg hover:bg-white hover:text-red-600 transition text-lg"
          >
            ✓ Get Free Quote
          </a>
        </div>

        <p className="text-sm mt-6 opacity-75">
          Fast response guaranteed. No credit card needed.
        </p>
      </div>
    </section>
  );
}
