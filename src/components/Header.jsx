import React from "react";

function Header(props) {
  return (
    <div className="absolute z-10 top-0 left-0 w-full text-white font-jaldi">
      <div className="flex items-center  justify-between mt-6 mx-4  lg:mx-6">
        <h1 className=" font-bold text-3xl">MOVE'ON</h1>
        <nav className="mx-auto">
          <ul className="flex justify-center items-center gap-14 text-lg ">
            <li>Accueil</li>
            <li>A propos</li>
            <li>Tarifs</li>
            <li>Blog</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
