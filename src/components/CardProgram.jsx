import React from "react";

function CardProgram({ image, title, text }) {
  return (
    <div className="relative my-10 w-64 h-auto rounded-md bg-blue-400 shadow-lg">
      <img src={image} className="w-full object-cover rounded-md" alt="" />

      <div className="p-4">
        <h3 className="font-semibold pb-2 text-white">{title}</h3>

        <p className="text-white text-sm mb-8">{text}</p>
        <button className="flex text-white text-sm absolute bottom-2">
          En savoir plus{" "}
          <svg
            className="w-3 ml-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CardProgram;
