import { FaFacebookF, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-[#001f3f]/90 backdrop-blur-xl border-t border-[#00ffff]/20 text-white">

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 -top-32 w-96 h-96 bg-[#00ffff] opacity-20 blur-[160px] -translate-x-1/2" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* BRAND */}
        <div>
          <h2 className="text-xl font-extrabold tracking-widest">
            UKMobileStyres
          </h2>
          <p className="text-sm opacity-70 mt-3">
            Fast, reliable and professional mobile tyre services across the UK.
            We come to you — anytime, anywhere.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold text-[#00ff99] mb-4">Services</h3>
          <ul className="space-y-2 text-sm opacity-80">
            <li>
              <Link
                to="/services/mobile-tyre-fitting"
                className="hover:text-[#00ff99] transition"
              >
                Mobile Tyre Fitting
              </Link>
            </li>
            <li>
              <Link
                to="/services/car-tyre-replacement"
                className="hover:text-[#00ff99] transition"
              >
                Tyre Replacement
              </Link>
            </li>
            <li>
              <Link
                to="/services/puncture-repair"
                className="hover:text-[#00ff99] transition"
              >
                Puncture Repairs
              </Link>
            </li>
            <li>
              <Link
                to="/services/wheel-balancing"
                className="hover:text-[#00ff99] transition"
              >
                Wheel Balancing
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold text-[#00ff99] mb-4">Contact</h3>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#00ff99]" /> 0161-6522335
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#00ff99]" /> ukmobiletyress@gmail.com
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="font-semibold text-[#00ff99] mb-4">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            {[{ icon: <FaFacebookF />, link: "#" },
              { icon: <FaInstagram />, link: "#" },
              { icon: <FaLinkedin />, link: "#" }].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full
                           border border-[#00ff99] bg-white/5
                           hover:shadow-[0_0_15px_#00ff99]
                           hover:scale-110 transition"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 text-center py-5 text-sm opacity-60">
        © {new Date().getFullYear()} UKMobileStyres. All rights reserved.
      </div>
    </footer>
  );
}
