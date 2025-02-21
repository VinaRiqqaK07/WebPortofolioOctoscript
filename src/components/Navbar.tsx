"use client";
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        controls.start({
          backgroundColor: "rgba(255, 255, 255, 1)",
          transition: { duration: 0.3, ease: "easeIn" },
        });
        setScrolling(true);
      } else {
        controls.start({
          backgroundColor: "rgba(255, 255, 255, 0)",
          transition: { duration: 0.3, ease: "easeIn" },
        });
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full px-6 py-6 z-50 transition-all duration-100 ${
        scrolling ? "bg-white shadow-md transition-colors" : "bg-transparent"
      } `}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">For OctoScript</h1>
        <div className="md:hidden">
          <button
            onClick={() => {
              setMenuOpen(!menuOpen);
              setScrolling(!menuOpen || window.scrollY > 50);
            }}
            className="p-2"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul
          className={`md:flex md:space-x-6 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } md:flex-row md:items-center md:p-0 p-4`}
        >
          {[
            { name: "Home", to: "home" },
            { name: "About", to: "about" },
            { name: "Projects", to: "project" },
            { name: "Message", to: "message" },
          ].map((item) => (
            <li
              key={item.name}
              className="md:inline-block block text-center md:text-left"
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                className="cursor-pointer block p-4 rounded-md hover:bg-blue-200 hover:text-blue-600 transition-all"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
