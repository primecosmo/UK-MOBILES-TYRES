import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import CustomCursor from "./components/CustomCursor.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import Main from "./pages/Main.jsx";
import Footer from "./components/Footer.jsx";
import MobileTyreFitting from "./pages/MobileTyreFitting.jsx";
import CarTyreReplacement from "./pages/CarTyreReplacement.jsx";
import WheelBalancing from "./pages/WheelBalancing.jsx";
import PunctureRepair from "./pages/PunctureRepair.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";


export default function App() {
  return (
    <Router>
      <div className="relative gradient text-white min-h-screen">
        <CustomCursor />
        <WhatsAppButton
          phone="447459745929"
          message="Hi I am looking for Mobile Tyre Services . "
        />
        <Navbar />

        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services/mobile-tyre-fitting" element={<MobileTyreFitting />} />
          <Route path="/services/car-tyre-replacement" element={<CarTyreReplacement />} />
          <Route path="/services/wheel-balancing" element={<WheelBalancing />} />
          <Route path="/services/puncture-repair" element={<PunctureRepair />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
