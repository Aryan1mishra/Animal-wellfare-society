import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import landing from "./images/landing.jpg";
import { motion } from "framer-motion";

function Landing() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background image */}
      <img
        className="fixed top-0 left-0 w-full h-full object-cover opacity-25 z-0"
        src={landing}
        alt="main"
      />

      {/* Animated Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-primary mb-4 drop-shadow-lg"
        >
          Adopt Love, Not Just Pets
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-2xl text-para mb-6 max-w-2xl drop-shadow-md"
        >
          Give a forever home to a furry friend and change a life today.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
          href="/dogs"
          className="bg-secondary hover:bg-secondary-hover text-white text-base md:text-lg font-medium px-6 py-3 rounded-full shadow-lg transition"
        >
          View Pets Available for Adoption
        </motion.a>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918013255557"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition z-20"
      >
        <FaWhatsapp size={24} />
      </a>
    </section>
  );
}

export default Landing;
