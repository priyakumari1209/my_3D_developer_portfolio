import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);

      // Update active link based on scroll position
      const scrollPosition = scrollTop + 200;

      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id); // ✅ THIS
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
      
          if (scrollPosition >= top && scrollPosition < bottom) {
            setActive(nav.title);
          }
        }
      });
    };      
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, navId, navTitle) => {
    e.preventDefault();
    const section = document.getElementById(navId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(navTitle);
      setToggle(false); // close mobile menu
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled 
          ? "bg-[#020617]/80 backdrop-blur-md shadow-xl border-b border-white/10" 
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-cyan-400/20 to-purple-600/20 flex items-center justify-center shadow-lg shadow-purple-500/20 border border-white/10 group-hover:shadow-[#afc6ff]/40 group-hover:scale-105 transition-all duration-300">
            <img src="/favicon/navbar_logo.png" alt="logo" className="w-8 h-8 object-contain" />
          </div>
          <p className="text-white text-[18px] font-bold cursor-pointer flex tracking-wide">
            Hemanth &nbsp;
            <span className="sm:block hidden font-light text-gray-300">| Portfolio</span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative text-[16px] font-medium cursor-pointer tracking-wide
                hover:text-[#afc6ff] transition-colors duration-300
                ${active === nav.title ? "text-[#afc6ff]" : "text-gray-300"}
              `}
            >
              <a 
                href={`#${nav.id}`} 
                onClick={(e) => handleNavClick(e, nav.id, nav.title)}
                className="relative group py-2"
              >
                {nav.title}
                {/* Animated underline */}
                <span className={`absolute left-0 bottom-0 w-full h-[2px] bg-[#afc6ff] transition-transform duration-300 origin-left 
                  ${active === nav.title ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                `}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

<div
  className={`${
    !toggle ? "hidden" : "flex"
  } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-2xl
     bg-[#020617]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-500/20`}
>

            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] w-full
                    hover:text-[#afc6ff] transition-colors duration-300
                    ${active === nav.title ? "text-[#afc6ff]" : "text-gray-300"}
                  `}
                >
                  <a 
                    href={`#${nav.id}`} 
                    onClick={(e) => handleNavClick(e, nav.id, nav.title)}
                    className="block w-full"
                  >
                    {nav.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
