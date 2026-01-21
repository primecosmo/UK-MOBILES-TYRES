import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaCity, FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Coverage() {
  return (
    <section className="min-h-screen bg-[#0b0c1c] px-6 sm:px-16 pt-28 pb-24 relative overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-32 left-1/2 w-96 h-96 bg-[#00ffff]/20 blur-[160px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#001f3f]/40 blur-[160px]" />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        <h1 className="text-white text-4xl sm:text-5xl font-extrabold">
          Our <span className="text-[#00ff99]">Coverage Areas</span>
        </h1>
        <p className="text-white/70 mt-4 max-w-2xl mx-auto">
          We provide fast and reliable mobile tyre services across the United Kingdom.
          Wherever you are, our experts come to you.
        </p>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto mt-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6 text-white"
        >
          <div className="flex items-start gap-4">
            <FaMapMarkedAlt className="text-3xl text-[#00ff99]" />
            <div>
              <h3 className="font-semibold text-lg">UK-Wide Mobile Coverage</h3>
              <p className="opacity-70 mt-1">
                Our fully equipped mobile vans operate across cities, towns,
                motorways and residential areas throughout the UK.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-3xl text-[#00ff99]" />
            <div>
              <h3 className="font-semibold text-lg">Home, Office & Roadside</h3>
              <p className="opacity-70 mt-1">
                Whether you're at home, work or stranded roadside,
                we’ll reach you quickly and safely.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-3xl text-[#00ff99]" />
            <div>
              <h3 className="font-semibold text-lg">Fast Response Times</h3>
              <p className="opacity-70 mt-1">
                Strategically positioned vans ensure fast arrival and minimal waiting.
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CITIES GRID */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-[#001f3f]/60 backdrop-blur-xl border border-[#00ffff]/30
                     rounded-2xl p-8 text-white"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">
            Major Areas We Cover
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            {[
              "London",
              "Birmingham",
              "Manchester",
              "Leeds",
              "Liverpool",
              "Sheffield",
              "Bristol",
              "Nottingham",
              "Leicester",
              "Coventry",
              "Wolverhampton",
              "Derby",
              "Milton Keynes",
              "Reading",
              "Slough",
            ].map((city, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white/5 border border-white/10
                           rounded-lg px-3 py-2 hover:border-[#00ff99]/50 transition"
              >
                <FaCity className="text-[#00ff99]" />
                {city}
              </div>
            ))}
          </div>

          <p className="text-center text-sm opacity-70 mt-6">
            Don’t see your area listed?  
            <span className="text-[#00ff99] font-semibold"> We still cover you!</span>
          </p>
        </motion.div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative z-10 max-w-3xl mx-auto mt-24 text-center"
      >
        <h2 className="text-white text-2xl sm:text-3xl font-bold">
          Need Mobile Tyre Service in Your Area?
        </h2>
        <p className="text-white/70 mt-3">
          Contact us now and our mobile tyre experts will come directly to you.
        </p>
                <div className="flex flex-wrap justify-center gap-5 mt-8">
                    <Link to="/contact">
                        <a
                            className="px-8 py-4 rounded-xl bg-[#00ff99] text-black font-semibold
                       shadow-[0_0_30px_#00ff99]
                       hover:scale-105 transition"
                        >
                            Book Now
                        </a>
                    </Link>
                    <div>
                                            <a
                        href="tel:+44 7459 745929"
                        className="px-8 py-4 rounded-xl border border-[#00ffff]
                       text-white hover:bg-[#00ffff]/10 transition"
                    >
                        Call Us
                    </a>
                    </div>
                </div>
      </motion.div>
    </section>
  );
}
