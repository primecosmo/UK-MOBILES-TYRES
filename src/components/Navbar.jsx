import { useEffect, useRef, useState } from "react";
import OverlayMenu from "./OverlayMenu.jsx";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from "../assets/loogo.png"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [forceVisible, setForceVisible] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);

  const lastScrollY = useRef(0);

  const services = [
    { name: "Mobile Tyre Fitting", path: "/services/mobile-tyre-fitting" },
    { name: "Car Tyres Replacement", path: "/services/car-tyre-replacement" },
    { name: "Wheel Balancing", path: "/services/wheel-balancing" },
    { name: "Puncture Repairs", path: "/services/puncture-repair" },
  ];

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
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
          ${visible ? "translate-y-0" : "-translate-y-full"}
          bg-[#001f3f]/80 backdrop-blur-xl border-b border-[#00ffff]/20`}
      >
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

          {/* LOGO */}
          <Link to="/" className="flex flex-col">
            <img
              src={Logo}
              alt="UK Mobile Tyres Logo"
              className="h-30 sm:h-30 w-auto object-contain"
            />

            {/* <span className="text-white font-extrabold tracking-widest text-sm sm:text-lg">
              UK Mobile Tyres
            </span>
            <span className="text-[10px] text-[#00ff99] tracking-wider">
              Mobile Tyre Experts
            </span> */}
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-10 text-white text-sm relative">
            <Link to="/" className="relative group">
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link to="/about" className="relative group">
              About
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button className="relative group flex items-center gap-1">
                Services
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[#00ff99] transition-all duration-300 group-hover:w-full" />
              </button>

              {/* DROPDOWN */}
              {servicesDropdown && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-[#001f3f]/90 backdrop-blur-xl border border-[#00ffff]/30 rounded-xl shadow-lg z-50">
                  {services.map((service, i) => (
                    <Link
                      key={i}
                      to={service.path}
                      className="block px-6 py-3 text-white hover:bg-[#00ff99]/20 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden sm:inline-flex px-6 py-2 rounded-xl
                         bg-[#00ff99] text-white font-semibold
                         shadow-[0_0_10px_#00ff99]
                         hover:scale-105 transition"
            >
              Book Now
            </Link>

            {/* HAMBURGER */}
            <button
              onClick={() => setMenuOpen(true)}
              className="text-[#00ffff] text-3xl lg:hidden hover:scale-110 transition"
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
