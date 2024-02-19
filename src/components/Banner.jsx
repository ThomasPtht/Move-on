import React from "react";
import banner from "../assets/images/portrait-young-sportive-girl.jpg";

function Banner() {
  return (
    <div className="font-jaldi text-white">
      <div
        className="relative bg-cover h-screen"
        style={{ backgroundImage: `url('${banner}')` }}
      >
        <div className="absolute top-32 my-14 ml-16">
          <h2 className="text-5xl font-bold mb-10">
            Rester actif n’a jamais <br />
            été aussi simple{" "}
          </h2>
          <p className="mb-10 text-lg">
            Découvrez des programmes d'exercices adaptés à votre profil, suivez
            votre <br />
            évolution, et connectez-vous à une communauté mondiale dédiée au
            bien-être. <br />
            Votre chemin vers une vie plus saine commence ici.
          </p>
          <div className="flex gap-8 font-bold ml-6">
            <button className="w-36 h-10 bg-indigo-400 p-2 rounded-xl">
              Commencer
            </button>
            <button className="w-36 h-10 text-indigo-400 bg-white p-2 rounded-xl border-2 border-indigo-400">
              Mon plan
            </button>
          </div>
          <div className="font-roboto flex mt-16 ml-10 text-xl">
            <div className="flex flex-col items-center">
              <p>5k</p>
              <p>utilisateurs</p>
            </div>
            <div className="pr-4 mx-6 border-r border-gray-300"></div>
            <div className="flex flex-col items-center">
              <p>10M+</p>
              <p>calories brûlées</p>
            </div>
            <div className="pr-4 mx-6 border-r border-gray-300"></div>
            <div className="flex flex-col items-center">
              <p>200+</p>
              <p>programmes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
