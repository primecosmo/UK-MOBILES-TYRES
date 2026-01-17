import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function OverlayMenu({ isOpen, onClose }) {
  const [showServices, setShowServices] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
  const origin = isMobile ? "95% 8%" : "50% 8%";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-1000 flex flex-col items-center justify-start pt-24 bg-brandBlack"
          initial={{ clipPath: `circle(0% at ${origin})` }}
          animate={{ clipPath: `circle(150% at ${origin})` }}
          exit={{ clipPath: `circle(0% at ${origin})` }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          style={{ background: "rgba(0,0,0,0.95)" }}
        >
          {/* CLOSE BUTTON */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-neonGreen hover:text-neonBlue text-3xl focus:outline-none transition-colors duration-300 z-1100"
            aria-label="Close Menu"
          >
            <FiX />
          </button>

          <ul className="space-y-6 text-center w-full z-1050">
            {/* Main Links */}
            {["Home", "About Us", "Booking"].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase().replace(/\s+/g, "")}`}
                  onClick={onClose}
                  className="text-2xl text-white font-bold hover:text-neonGreen transition-colors duration-300 neon-text"
                >
                  {item}
                </a>
              </motion.li>
            ))}

            {/* Services Dropdown */}
            <motion.li
              className="relative z-1050"
              onMouseEnter={() => setShowServices(true)}
              onMouseLeave={() => setShowServices(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-2xl text-white font-bold cursor-pointer hover:text-neonGreen transition-colors duration-300 neon-text">
                Services
              </span>

              <AnimatePresence>
                {showServices && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="
                      absolute left-1/2 -translate-x-1/2 mt-13
                      bg-brandBlack border border-brandNavy
                      rounded-lg px-6 py-4 space-y-4
                      min-w-55 hadow-neonGreen z-1200
                    "
                  >
                    {[
                      "Mobile Tyre Fitting",
                      "Car Tyres Replacement",
                      "Wheel Balancing",
                      "Puncture Repairs",
                    ].map((service) => (
                      <li key={service}>
                        <a
                          href={`#${service.toLowerCase().replace(/\s+/g, "")}`}
                          onClick={onClose}
                          className="text-white hover:text-neonGreen font-medium transition-colors duration-300 neon-text whitespace-nowrap block text-center"
                        >
                          {service}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>

            {/* Contact */}
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <a
                href="#contact"
                onClick={onClose}
                className="text-2xl text-white font-bold hover:text-neonGreen transition-colors duration-300 neon-text"
              >
                Contact
              </a>
            </motion.li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
