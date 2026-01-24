import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function BookingForm({ defaultService }) {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [popup, setPopup] = useState(null); // "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setPopup("success");
          setLoading(false);
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setPopup("error");
          setLoading(false);
        }
      );
  };

  return (
    <>
      {/* ================= FORM ================= */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#001f3f]/60 backdrop-blur-xl
                   border border-[#00ffff]/30
                   rounded-2xl p-8 space-y-5 text-white"
      >
        <h3 className="text-xl font-semibold text-center mb-4">
          Book Tyre Service
        </h3>

        {/* SERVICE */}
        <select
          name="service"
          defaultValue={defaultService}
          required
          className="w-full p-3 rounded-lg bg-black/40
                     border border-white/10 outline-none"
        >
          <option value="">Select Service</option>
          <option>MOBILE TYRE FITTING</option>
          <option>CAR TYRES REPLACEMENT</option>
          <option>WHEEL BALANCING</option>
          <option>PUNCTURE REPAIRS</option>
        </select>

        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-black/40 border border-white/10 outline-none"
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full p-3 rounded-lg bg-black/40 border border-white/10 outline-none"
        />

        <input
          name="location"
          type="text"
          placeholder="Postcode / Location"
          required
          className="w-full p-3 rounded-lg bg-black/40 border border-white/10 outline-none"
        />

        <input
          name="vehicle"
          type="text"
          placeholder="Vehicle / Tyre Size (optional)"
          className="w-full p-3 rounded-lg bg-black/40 border border-white/10 outline-none"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Additional Details"
          className="w-full p-3 rounded-lg bg-black/40 border border-white/10 outline-none"
        />

        <input
          type="hidden"
          name="time"
          value={new Date().toLocaleString()}
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-xl bg-[#00ff99] text-black
                     font-semibold shadow-[0_0_25px_#00ff99]
                     hover:scale-105 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Confirm Booking"}
        </button>
      </motion.form>

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
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
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
                  ? "Booking Confirmed 🎉"
                  : "Submission Failed ❌"}
              </h3>

              <p className="text-sm opacity-90 mb-6">
                {popup === "success"
                  ? "Your booking request has been sent successfully. Our team will contact you shortly."
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
