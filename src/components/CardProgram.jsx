import React from "react";

function CardProgram({ icon, title, text }) {
  return (
    <div className="w-72 h-80 p-4 rounded-lg bg-blue-400 shadow-lg">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center rounded-full w-12 p-3 bg-indigo-500">
          {icon}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm mb-2">{text}</p>
      <button className="flex">
        En savoir plus{" "}
        <svg
          className="w-3 ml-2"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </button>
    </div>
  );
}

export default CardProgram;
