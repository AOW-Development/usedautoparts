export default function Footer() {
  return (
    <footer className="bg-black/40 py-20 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-20">
        
        {/* Quick Links */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">Quick Links</h3>
          {[
            "Home",
            "About Us",
            "Contact Us",
            "Search by Make/Model",
            "Shop Online",
            "FAQ",
          ].map((item) => (
            <p key={item} className="text-white/80">
              {item}
            </p>
          ))}
        </div>

        {/* Resources */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">Resources</h3>
          {["Privacy Policy", "Make a Proposal", "Submit a ticket"].map(
            (item) => (
              <p key={item} className="text-white/80">
                {item}
              </p>
            )
          )}
        </div>

        {/* Contact */}
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <p>US Toll Free: (877) 982-7774</p>
          <p>Fax: 312-485-9711</p>
          <p>Email: sales@usedautoparts.pro</p>
          <p>Website: usedautoparts.pro</p>
        </div>
      </div>
    </footer>
  );
}
