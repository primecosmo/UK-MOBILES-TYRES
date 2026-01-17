import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton({
  phone = "447521440329",
  message = "Hello! I saw your portfolio and would like to connect.",
}) {
  const encoded = encodeURIComponent(message);
  const waHref = `https://api.whatsapp.com/send?phone=${phone}&text=${encoded}`;

  return (
    <>
      <style>
        {`
          @keyframes bounceIn {
            0% { transform: scale(0.4); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes pulseRing {
            0% { transform: scale(0.9); opacity: 0.6; }
            70% { transform: scale(1.4); opacity: 0; }
            100% { opacity: 0; }
          }
          .animate-bounceIn {
            animation: bounceIn 0.5s ease-out;
          }
          .animate-pulseRing {
            animation: pulseRing 1.8s infinite;
          }
        `}
      </style>

      <div className="fixed bottom-6 right-6 z-9999 group">
        <span
          className="absolute right-16 bottom-3 bg-black/80 text-white text-sm px-3 py-1 rounded-md
          opacity-0 group-hover:opacity-100 transition-all duration-300
          backdrop-blur-md shadow-lg pointer-events-none"
        >
          Chat on WhatsApp
        </span>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center
          w-16 h-16 rounded-full bg-green-600 text-white shadow-xl
          hover:scale-110 active:scale-95 transition-all duration-300
          animate-bounceIn"
        >
          <FaWhatsapp size={32} />
          <span className="absolute inset-0 rounded-full border-4 border-green-500/40 animate-pulseRing"></span>
        </a>
      </div>
    </>
  );
}
