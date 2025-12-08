const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#07142B",      // Deepest background (Footer/Body)
          primary: "#0B1C33",   // Section background
          accent: "#0099FF",    // Bright Blue (Buttons/Highlights)
          gradient: "#0066CC",  // Gradient stop
          text: "#E8F3FF",      // Light text
        },
      },
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"], // Headings
        jaldi: ["var(--font-jaldi)", "sans-serif"],       // Body
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')", // You'll need to add your background image
        'card-gradient': "linear-gradient(180deg, #049FFF 0%, #091B33 100%)",
      }
    },
  },
  plugins: [],
};
export default config;
