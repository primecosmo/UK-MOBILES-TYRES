import { motion } from "framer-motion";
import {
    FaClock,
    FaTools,
    FaCarSide,
    FaStar,
    FaMapMarkedAlt,
    FaShieldAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
    return (
        <section className="min-h-screen bg-[#0b0c1c] px-6 sm:px-16 pt-28 pb-24 relative overflow-hidden">

            {/* BACKGROUND GLOWS */}
            <div className="absolute -top-32 left-1/2 w-96 h-96 bg-[#00ffff]/20 blur-[160px] -translate-x-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#001f3f]/40 blur-[160px]" />

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center relative z-10"
            >
                <h1 className="text-white text-4xl sm:text-5xl font-extrabold">
                    Why <span className="text-[#00ff99]">Choose Us</span>
                </h1>
                <p className="text-white/70 mt-4 max-w-2xl mx-auto">
                    We provide fast, reliable and professional mobile tyre services across
                    the UK. Here’s why thousands of drivers trust us.
                </p>
            </motion.div>

            {/* FEATURES */}
            <div className="relative z-10 max-w-7xl mx-auto mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

                {[
                    {
                        icon: <FaCarSide />,
                        title: "Fully Mobile Service",
                        desc: "We come to your home, office or roadside — no garage visits, no waiting.",
                    },
                    {
                        icon: <FaClock />,
                        title: "Fast Response Time",
                        desc: "Quick arrival and efficient service to get you back on the road safely.",
                    },
                    {
                        icon: <FaTools />,
                        title: "Expert Technicians",
                        desc: "Experienced and trained professionals using modern tyre equipment.",
                    },
                    {
                        icon: <FaShieldAlt />,
                        title: "Safe & Reliable",
                        desc: "All work is carried out following strict safety and quality standards.",
                    },
                    {
                        icon: <FaMapMarkedAlt />,
                        title: "UK-Wide Coverage",
                        desc: "Our mobile vans cover cities, towns and motorways across the UK.",
                    },
                    {
                        icon: <FaStar />,
                        title: "Trusted by Customers",
                        desc: "High customer satisfaction with hundreds of successful tyre fittings.",
                    },
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-white/5 backdrop-blur-xl border border-[#00ffff]/30
                       rounded-2xl p-8 text-white
                       hover:border-[#00ff99]/60
                       hover:shadow-[0_0_25px_#00ff99]
                       transition"
                    >
                        <div className="text-4xl text-[#00ff99] mb-5">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                        </h3>
                        <p className="text-sm opacity-70 leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative z-10 max-w-3xl mx-auto mt-24 text-center"
            >
                <h2 className="text-white text-2xl sm:text-3xl font-bold">
                    Need a tyre service today?
                </h2>
                <p className="text-white/70 mt-3">
                    Book our mobile tyre experts and get fast, reliable service at your location.
                </p>

                <div className="flex flex-wrap justify-center gap-5 mt-8">
                    <Link to="/contact">
                        <a
                            className="px-8 py-4 rounded-xl bg-[#00ff99] text-black font-semibold
                       shadow-[0_0_30px_#00ff99]
                       hover:scale-105 transition"
                        >
                            Book Now
                        </a>
                    </Link>
                    <div>
                                            <a
                        href="tel:+44 7459 745929"
                        className="px-8 py-4 rounded-xl border border-[#00ffff]
                       text-white hover:bg-[#00ffff]/10 transition"
                    >
                        Call Us
                    </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
