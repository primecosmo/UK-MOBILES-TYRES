import { motion } from "framer-motion";
import {
  FaCar,
  FaClock,
  FaTools,
  FaShieldAlt,
  FaCheckCircle,
  FaStar,
} from "react-icons/fa";
import BookingForm from "../components/BookingForm";
import { useEffect } from "react";

export default function CarTyreReplacement() {
      useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <section className="relative min-h-screen bg-[#0b0c1c] px-6 sm:px-16 pt-28 pb-24 overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute -top-32 left-1/2 w-96 h-96 bg-[#00ff99]/20 blur-[160px] -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#001f3f]/50 blur-[160px]" />

      {/* HERO */}
      <div className="relative z-10 max-w-7xl mx-auto mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold"
        >
          Car <span className="text-[#00ff99]">Tyre Replacement</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl text-white/80 text-lg"
        >
          Worn, damaged or unsafe tyres? We supply and replace high-quality
          car tyres directly at your location with expert fitting and
          transparent pricing.
        </motion.p>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">

        {/* LEFT INFO */}
        <div className="lg:col-span-2 space-y-14">

          {/* WHY THIS SERVICE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-[#00ffff]/30 rounded-3xl p-10 text-white"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Why Choose Our{" "}
              <span className="text-[#00ff99]">Car Tyre Replacement</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaCar />,
                  title: "All Vehicle Types",
                  text: "We replace tyres for cars, SUVs and light vehicles.",
                },
                {
                  icon: <FaClock />,
                  title: "Quick & Convenient",
                  text: "No garage visits, we come to your location.",
                },
                {
                  icon: <FaTools />,
                  title: "Premium Tyres",
                  text: "Top brands fitted with precision equipment.",
                },
                {
                  icon: <FaShieldAlt />,
                  title: "Safe & Reliable",
                  text: "Tyres installed to UK safety standards.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-2xl text-[#00ff99]">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm opacity-70 mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* HOW IT WORKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#001f3f]/60 backdrop-blur-xl border border-[#00ffff]/30 rounded-3xl p-10 text-white"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              How It <span className="text-[#00ff99]">Works</span>
            </h2>

            <div className="grid sm:grid-cols-3 gap-6">
              {[
                "Choose your tyre size and service",
                "We bring tyres to your location",
                "Old tyres removed, new tyres fitted",
              ].map((step, i) => (
                <div key={i} className="flex gap-3">
                  <FaCheckCircle className="text-[#00ff99] text-xl mt-1" />
                  <p className="text-white/80">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* TRUST */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-xl border border-[#00ffff]/30 rounded-3xl p-10 text-white"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Trusted Tyre <span className="text-[#00ff99]">Specialists</span>
            </h2>

            <ul className="grid sm:grid-cols-2 gap-4 text-white/80">
              <li>✔ Wide range of tyre brands</li>
              <li>✔ Competitive pricing</li>
              <li>✔ Fully insured technicians</li>
              <li>✔ Thousands of satisfied customers</li>
            </ul>
          </motion.div>
        </div>

        {/* RIGHT – BOOKING FORM */}
        <div className="lg:sticky lg:top-32">
          <BookingForm defaultService="CAR TYRES REPLACEMENT" />
        </div>
      </div>
    </section>
  );
}
