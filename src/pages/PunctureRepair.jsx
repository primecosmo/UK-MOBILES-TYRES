import { motion } from "framer-motion";
import {
  FaCar,
  FaBolt,
  FaTools,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import BookingForm from "../components/BookingForm";
import { useEffect } from "react";

export default function PunctureRepair() {
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
          Puncture <span className="text-[#00ff99]">Repair</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl text-white/80 text-lg"
        >
          Fast and reliable puncture repairs at your home, office, or roadside,
          ensuring you get back on the road safely.
        </motion.p>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-3 gap-16">

        {/* LEFT INFO */}
        <div className="lg:col-span-2 space-y-14">

          {/* WHY CHOOSE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-xl border border-[#00ffff]/30 rounded-3xl p-10 text-white"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Why Choose <span className="text-[#00ff99]">Puncture Repair</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaCar />,
                  title: "All Vehicle Types",
                  text: "Cars, SUVs, vans – we repair them all quickly.",
                },
                {
                  icon: <FaBolt />,
                  title: "Rapid Response",
                  text: "On-site service at home, office, or roadside.",
                },
                {
                  icon: <FaTools />,
                  title: "Professional Tools",
                  text: "Modern equipment for safe and lasting repairs.",
                },
                {
                  icon: <FaShieldAlt />,
                  title: "Safe & Reliable",
                  text: "We ensure your tyre is roadworthy before leaving.",
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
                "Book your puncture repair service online",
                "We arrive with all necessary tools and replacement kits",
                "Your tyre is repaired safely and tested for roadworthiness",
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
              Trusted <span className="text-[#00ff99]">Puncture Specialists</span>
            </h2>

            <ul className="grid sm:grid-cols-2 gap-4 text-white/80">
              <li>✔ Quick response to punctures anywhere</li>
              <li>✔ Professional on-site repairs</li>
              <li>✔ Experienced & insured technicians</li>
              <li>✔ Thousands of satisfied drivers</li>
            </ul>
          </motion.div>
        </div>

        {/* RIGHT – BOOKING FORM */}
        <div className="lg:sticky lg:top-32">
          <BookingForm defaultService="PUNCTURE REPAIRS" />
        </div>
      </div>
    </section>
  );
}
