import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "./images/logo.jpg";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 bg-primary shadow-md p-4 flex justify-between items-center z-50"
    >
      <Link to="/">
        <img
          className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full object-cover border-2 border-white"
          src={logo}
          alt="logo"
        />
      </Link>

      <div className="flex space-x-3 md:space-x-6 lg:space-x-10 text-sm md:text-base overflow-x-auto whitespace-nowrap">
        {[
          { to: "/", label: "Home" },
          { to: "/about", label: "About Us" },
          { to: "/dogs", label: "Our Dogs" },
          { to: "/team", label: "Our Team" },
          { to: "/adoption", label: "Adoption" },
        ].map((link, idx) => (
          <Link
            key={idx}
            to={link.to}
            className="text-white relative group hover:text-secondary transition"
          >
            {link.label}
            <span className="block h-[2px] w-0 group-hover:w-full bg-secondary transition-all duration-300"></span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navbar;
