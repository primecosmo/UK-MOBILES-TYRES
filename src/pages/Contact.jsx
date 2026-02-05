import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaChevronDown,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null); // "success" | "error"

  // ✅ PAGE LOAD HOTE HI TOP
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setPopup("success");
          setLoading(false);
          formRef.current.reset();
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        (err) => {
          console.error("EmailJS Error:", err);
          setPopup("error");
          setLoading(false);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      );
  };

  return (
    <>
      <section
        id="contact"
        className="min-h-screen bg-[#0b0c1c] px-6 sm:px-16 pt-28 pb-24 relative overflow-hidden"
      >
        {/* Background glows */}
        <div className="absolute -top-32 left-1/2 w-96 h-96 bg-[#00ffff]/20 blur-[160px] -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#001f3f]/40 blur-[160px]" />

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h1 className="text-white text-4xl sm:text-5xl font-extrabold">
            Get in <span className="text-[#00ff99]">Touch</span>
          </h1>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Select a service and send us a message. Our mobile tyre experts will
            get back to you quickly.
          </p>
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto mt-16 grid lg:grid-cols-2 gap-14">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8 text-white"
          >
            {[
              { icon: <FaPhoneAlt />, title: "Call Us", text: "+44 7459 745929" },
              {
                icon: <FaEnvelope />,
                title: "Email",
                text: "info@ukmobilestyres.co.uk",
              },
              {
                icon: <FaMapMarkerAlt />,
                title: "Service Coverage",
                text: "All across the United Kingdom",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-5 bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#00ff99]/40 transition"
              >
                <div className="text-2xl text-[#00ff99]">{item.icon}</div>
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p className="opacity-70 text-sm mt-1">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#001f3f]/60 backdrop-blur-xl
                       border border-[#00ffff]/30
                       rounded-2xl p-8 sm:p-10 space-y-6 text-white"
          >
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-[#00ff99] focus:ring-2 focus:ring-[#00ff99]/40 outline-none transition"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-[#00ff99] focus:ring-2 focus:ring-[#00ff99]/40 outline-none transition"
              />
            </div>

            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-[#00ff99] focus:ring-2 focus:ring-[#00ff99]/40 outline-none transition"
              />
            </div>

            <div className="relative">
              <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none" />
              <select
                name="service"
                required
                className="w-full appearance-none px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-[#00ff99] focus:ring-2 focus:ring-[#00ff99]/40 outline-none transition"
              >
                <option value="">Select Service</option>
                <option>Mobile Tyre Fitting</option>
                <option>Tyre Replacement</option>
                <option>Puncture Repair</option>
                <option>Wheel Balancing</option>
                <option>Emergency Call-Out</option>
              </select>
            </div>

            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your issue..."
              className="w-full p-4 rounded-lg bg-black/30 border border-white/10 focus:border-[#00ff99] focus:ring-2 focus:ring-[#00ff99]/40 outline-none transition"
            />

            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-[#00ff99] text-black
                         font-semibold shadow-[0_0_30px_#00ff99]
                         hover:scale-[1.02] transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Request"}
            </button>
          </motion.form>
        </div>
      </section>

      {/* ================= POPUP MODAL ================= */}
      <AnimatePresence>
        {popup && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center
                       bg-black/70 backdrop-blur-md px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`max-w-md w-full rounded-2xl p-8 text-center text-white
                ${
                  popup === "success"
                    ? "bg-gradient-to-br from-[#00ff99]/90 to-[#00ccff]/90"
                    : "bg-gradient-to-br from-red-500/90 to-red-700/90"
                }`}
            >
              <h3 className="text-2xl font-bold mb-3">
                {popup === "success"
                  ? "Message Sent 🎉"
                  : "Failed to Send ❌"}
              </h3>

              <p className="text-sm opacity-90 mb-6">
                {popup === "success"
                  ? "Thanks for contacting us. Our team will get back to you shortly."
                  : "Something went wrong. Please try again later."}
              </p>

              <button
                onClick={() => setPopup(null)}
                className="px-6 py-2 rounded-full bg-black/30
                           border border-white/30 hover:bg-black/50 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
