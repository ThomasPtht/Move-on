import React, { useState, useEffect } from "react";
import logo from "../assets/images/logo.png";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer la visibilité du menu burger
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   // Ajoute ou retire la classe 'overflow-hidden' au corps du document
  //   document.body.classList.toggle("overflow-y-hidden", isOpen);

  //   // Nettoie l'effet lorsque le composant est démonté
  //   return () => {
  //     document.body.classList.remove("overflow-y-hidden");
  //   };
  // }, [isOpen]);

  return (
    <div className="absolute z-10 top-0 left-0 w-full text-white font-jaldi">
      <div className="flex justify-between items-center  mt-2 sm:mt-6 mx-4  lg:mx-6">
        <div className="flex items-center">
          <img className="w-9 mr-2" src={logo} alt="" />
          <h1 className=" font-bold text-3xl">MOVE'ON</h1>
        </div>

        {/* Burger Menu */}
        <div
          className={`w-screen h-screen bg-blue-200 text-white text-2xl font-bold pt-8 gap-3 text-center fixed top-24 right-0 z-10 flex flex-col translate-x duration-1000 ease-in-out md:hidden  ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul>
            <li
              className="hover:bg-white hover:text-indigo-300"
              to="#"
              onClick={toggleNavbar}
            >
              Accueil
            </li>
            <a
              href="/#about"
              className="hover:bg-white hover:text-indigo-300"
              onClick={toggleNavbar}
            >
              A propos
            </a>
            <li>
              <a
                href="/#programs"
                className="hover:bg-white hover:text-indigo-300"
                onClick={toggleNavbar}
              >
                Programmes
              </a>
            </li>
            <li>
              <a
                href="#price"
                className="hover:bg-white hover:text-indigo-300"
                onClick={toggleNavbar}
              >
                Tarifs
              </a>
            </li>
          </ul>
        </div>
        {/* Bouton de toggle avec icône de burger */}
        <button
          className={`z-20 p-2 rounded-lg bg-indigo-400 text-white border text-lg hover:bg-white hover:text-indigo-400 hover:border-indigo-400 hover:border transition duration-200 mt-4 md:hidden ${
            isOpen ? "hidden" : "block"
          }`}
          onClick={toggleNavbar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Bouton de toggle avec l'icône de croix (X) */}
        <button
          className={` z-20 p-2 rounded-lg bg-indigo-400 text-white border text-lg hover:bg-white hover:text-indigo-400 hover:border-indigo-400 hover:border transition duration-200 mt-4 ${
            isOpen ? "" : "hidden"
          }`}
          onClick={toggleNavbar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <nav className="hidden md:flex mx-auto  items-center ">
          <ul className="flex justify-center items-center gap-14 text-lg ">
            <a href="#">
              <li className="hover:text-indigo-400 hover:scale-105 transition duration-200 ">
                Accueil
              </li>
            </a>
            <a href="#about">
              <li className="hover:text-indigo-400 hover:scale-105 transition duration-200">
                A propos
              </li>
            </a>
            <a href="#programs">
              <li className="hover:text-indigo-400 hover:scale-105 transition duration-200">
                Programmes
              </li>
            </a>
            <a href="#price">
              <li className="hover:text-indigo-400 hover:scale-105 transition duration-200">
                Tarifs
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
