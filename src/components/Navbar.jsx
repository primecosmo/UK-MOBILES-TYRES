import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const homeSection = document.querySelector("#home");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setForceVisible(true);
          setVisible(true);
        } else {
          setForceVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (homeSection) observer.observe(homeSection);
    return () => homeSection && observer.unobserve(homeSection);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (forceVisible || menuOpen) {
        setVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;
      setVisible(currentScrollY < lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceVisible, menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full h-20 z-50 transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
        bg-[#001f3f]/80 backdrop-blur-xl border-b border-[#00ffff]/20`}
      >
        <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">

          {/* LOGO */}
          <Link to="/" className="flex flex-col">
            <span className="text-white font-extrabold tracking-widest text-sm sm:text-lg">
              UK Mobile Tyres
            </span>
            <span className="text-[10px] text-[#00ff99] tracking-wider">
              Mobile Tyre Experts
            </span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-10 text-white text-sm">
            {["Services", "About", "Coverage"].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden sm:inline-flex px-6 py-2 rounded-xl
                         bg-[#00ff99] text-white font-semibold
                         shadow-[0_0_20px_#00ff99]
                         hover:scale-105 transition"
            >
              Book Now
            </a>

            {/* HAMBURGER */}
            <button
              onClick={() => setMenuOpen(true)}
              className="text-[#00ffff] text-3xl lg:hidden
                         hover:scale-110 transition"
              aria-label="Open Menu"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </nav>

      <OverlayMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
