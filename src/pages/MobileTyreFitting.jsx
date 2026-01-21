import { motion } from "framer-motion";
import {
  FaCarSide,
  FaClock,
  FaTools,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import BookingForm from "../components/BookingForm";
import { useEffect } from "react";

export default function MobileTyreFitting() {
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
          Mobile <span className="text-[#00ff99]">Tyre Fitting</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl text-white/80 text-lg"
        >
          Professional, fast and fully mobile tyre fitting service across the UK.
          We bring high-quality tyres and expert fitting directly to your location —
          saving you time and hassle.
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
              Why Choose Our <span className="text-[#00ff99]">Mobile Tyre Fitting</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaClock />,
                  title: "Fast Response",
                  text: "Quick arrival times with strategically located mobile vans.",
                },
                {
                  icon: <FaCarSide />,
                  title: "We Come To You",
                  text: "Home, office, roadside or motorway assistance.",
                },
                {
                  icon: <FaTools />,
                  title: "Professional Equipment",
                  text: "Latest tools ensuring safe and precise fitting.",
                },
                {
                  icon: <FaShieldAlt />,
                  title: "Safety Guaranteed",
                  text: "All work carried out to UK safety standards.",
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
                "Book your service online or by phone",
                "Our technician arrives at your location",
                "Tyres fitted and balanced professionally",
              ].map((step, i) => (
                <div key={i} className="flex gap-3">
                  <FaCheckCircle className="text-[#00ff99] text-xl mt-1" />
                  <p className="text-white/80">{step}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* TRUST SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/5 backdrop-blur-xl border border-[#00ffff]/30 rounded-3xl p-10 text-white"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Trusted Across the <span className="text-[#00ff99]">UK</span>
            </h2>

            <ul className="grid sm:grid-cols-2 gap-4 text-white/80">
              <li>✔ 10+ years of experience</li>
              <li>✔ Thousands of tyres fitted</li>
              <li>✔ Fully insured technicians</li>
              <li>✔ Transparent pricing</li>
            </ul>
          </motion.div>
        </div>

        {/* RIGHT – BOOKING FORM */}
        <div className="lg:sticky lg:top-32">
          <BookingForm defaultService="MOBILE TYRE FITTING" />
        </div>
      </div>
    </section>
  );
}
