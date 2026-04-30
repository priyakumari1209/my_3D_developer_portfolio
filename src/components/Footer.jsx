import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-6 px-6 border-t border-white/10 glass-card rounded-t-3xl mt-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex justify-center items-center relative z-10">
        <p className="text-[#cbd5f5] text-[14px] opacity-70 font-medium tracking-wide text-center">
          © {new Date().getFullYear()} Hemanth Thogaruchesti. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
