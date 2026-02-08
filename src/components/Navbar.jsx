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
      const scrollPosition = scrollTop + 200; // offset for navbar height
      navLinks.forEach((nav) => {
        const section = document.getElementById(nav.id);
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
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain" /> */}
        </Link>

        {/* Desktop Menu */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[18px] font-medium cursor-pointer
                border-b-2 border-transparent
                hover:border-white hover:text-white
                transition-all duration-300 ${
                  active === nav.title ? "border-white text-white" : "text-secondary"
                }`}
            >
              <a href={`#${nav.id}`} onClick={(e) => handleNavClick(e, nav.id, nav.title)}>
                {nav.title}
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
  } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
     bg-[#6a1b9a]`}
>

            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]
                    border-b-2 border-transparent
                    hover:border-white hover:text-white
                    transition-all duration-300 ${
                      active === nav.title ? "border-white text-white" : "text-secondary"
                    }`}
                >
                  <a href={`#${nav.id}`} onClick={(e) => handleNavClick(e, nav.id, nav.title)}>
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
