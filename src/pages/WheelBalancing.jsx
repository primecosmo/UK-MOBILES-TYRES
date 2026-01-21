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

export default function WheelBalancing() {
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
          Wheel <span className="text-[#00ff99]">Balancing</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl text-white/80 text-lg"
        >
          Ensure smooth driving and extend tyre life with professional
          wheel balancing performed at your home, office, or roadside.
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
              Why Choose <span className="text-[#00ff99]">Wheel Balancing</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaCar />,
                  title: "All Vehicle Types",
                  text: "Cars, SUVs, vans – we balance them all.",
                },
                {
                  icon: <FaBolt />,
                  title: "Precision Service",
                  text: "Using advanced balancing equipment for accuracy.",
                },
                {
                  icon: <FaTools />,
                  title: "On-Site Convenience",
                  text: "No garage trips – service at your location.",
                },
                {
                  icon: <FaShieldAlt />,
                  title: "Safe & Smooth",
                  text: "Improves stability and extends tyre life.",
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
                "Book your wheel balancing service online",
                "We bring professional equipment to your location",
                "Wheels are precisely balanced and tested",
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
              Trusted Wheel <span className="text-[#00ff99]">Specialists</span>
            </h2>

            <ul className="grid sm:grid-cols-2 gap-4 text-white/80">
              <li>✔ Accurate balancing for all wheels</li>
              <li>✔ On-site service saves time</li>
              <li>✔ Experienced & insured technicians</li>
              <li>✔ Thousands of satisfied drivers</li>
            </ul>
          </motion.div>
        </div>

        {/* RIGHT – BOOKING FORM */}
        <div className="lg:sticky lg:top-32">
          <BookingForm defaultService="WHEEL BALANCING" />
        </div>
      </div>
    </section>
  );
}
