import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaCarSide, FaTools, FaBolt, FaPhoneAlt } from "react-icons/fa";

export default function Home() {
  const roles = useMemo(
    () => [
      "MOBILE TYRE FITTING",
      "CAR TYRES REPLACEMENT",
      "WHEEL BALANCING",
      "PUNCTURE REPAIRS",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  /* ---------- TYPING EFFECT ---------- */
  useEffect(() => {
    const current = roles[index];
    const timer = setTimeout(() => {
      if (!deleting && subIndex < current.length) setSubIndex(v => v + 1);
      else if (!deleting && subIndex === current.length)
        setTimeout(() => setDeleting(true), 1000);
      else if (deleting && subIndex > 0) setSubIndex(v => v - 1);
      else {
        setDeleting(false);
        setIndex(p => (p + 1) % roles.length);
      }
    }, deleting ? 40 : 90);

    return () => clearTimeout(timer);
  }, [subIndex, deleting, index, roles]);

  return (
    <section className="relative min-h-screen bg-[#0b0c1c] overflow-hidden px-6 sm:px-16 pt-28">

      {/* GRADIENT SHAPES */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#001f3f] opacity-40 blur-[160px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00ffff] opacity-30 blur-[160px]" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.p
            className="text-[#00ff99] tracking-widest text-sm mb-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {roles[index].substring(0, subIndex)}
            <span className="ml-1">|</span>
          </motion.p>

          <motion.h1
            className="text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
          >
            UK Mobiles Tyres
            <br />
            <span className="text-[#00ffff]">
              24/7 Mobile Tyre Fitting & Roadside Repair
            </span>
          </motion.h1>

          <p className="text-white/80 mt-5 max-w-xl">
            Fast, reliable mobile tyre services across the UK. We come to your home, workplace or roadside — anytime you need us.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-5 mt-8">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-[#00ff99] text-white font-semibold
             shadow-[0_0_10px_#00ff99] hover:scale-105 transition"
            >
              Contact Us
            </a>


            <a
              href="tel:+44 7459 745929"
              className="px-8 py-4 rounded-xl border border-[#00ffff] text-white
                         hover:bg-[#00ffff]/10 transition flex items-center gap-2"
            >
              <FaPhoneAlt /> Call Now
            </a>
          </div>
        </div>

        {/* RIGHT SERVICE CARDS */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            {
              icon: <FaCarSide />,
              title: "Mobile Fitting",
              desc: "We fit tyres at your home, office or roadside with zero hassle."
            },
            {
              icon: <FaTools />,
              title: "Tyre Replacement",
              desc: "Wide range of quality tyres installed by trained professionals."
            },
            {
              icon: <FaBolt />,
              title: "Emergency Puncture Repair",
              desc: "Fast response for punctures and breakdown tyre emergencies."
            },
            {
              icon: <FaCarSide />,
              title: "Wheel Balancing",
              desc: "Smooth, vibration-free driving with precision wheel balancing."
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-[#00ffff]/30
                         rounded-2xl p-6 text-white hover:scale-105 transition"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-3xl text-[#00ff99] mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-sm opacity-70 mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* STATS STRIP */}
      <div className="relative z-10 mb-5 max-w-6xl mx-auto mt-20
                      bg-[#001f3f]/60 backdrop-blur-xl
                      border border-[#00ffff]/30 rounded-2xl
                      grid grid-cols-2 sm:grid-cols-4 text-center p-6 text-white">
        {[
          ["1.2K+", "Tyres Fitted"],
          ["500+", "Happy Clients"],
          ["99%", "Satisfaction"],
          ["10+", "Years Experience"],
        ].map(([num, text], i) => (
          <div key={i}>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#00ff99]">{num}</h2>
            <p className="text-sm opacity-70">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
