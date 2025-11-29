import React from "react";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="w-full flex flex-wrap justify-center gap-6 mt-10">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="w-32 h-32 flex flex-col items-center justify-center rounded-xl shadow-md border border-gray-200 bg-white transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
        >
          <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
          <p className="text-sm font-semibold mt-3 text-gray-700">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Tech;
