import React from "react";
import aboutPic from "../assets/images/sportsman-sportswoman.jpg";

function About(props) {
  return (
    <div className="m-16">
      <div className="relative flex flex-col md:flex-row">
        <img className=" w-3/6 h-80  rounded-xl" src={aboutPic} alt="" />
        <div className="absolute flex bottom-1/4 left-1/4  h-auto p-3 bg-white rounded-xl shadow-xl">
          <div className="flex flex-col">
            <p className="text-xs mb-2">Aujourd'hui</p>
            <p className="font-roboto font-bold">850 cal</p>
            <div className="flex items-center">
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FB861B"
                  d="M21.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 6h-5a1 1 0 0 0 0 2h2.59L13 13.59l-3.29-3.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 12.41l3.29 3.3a1 1 0 0 0 1.42 0L20 9.41V12a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38"
                />
              </svg>

              <p className="text-green-400 text-sm ml-2 font-semibold">+3,2%</p>
            </div>
          </div>
          <div className="flex items-end space-x-1 ml-4">
            <div className="h-12 w-4 bg-yellow-500 rounded-sm"></div>
            <div className="h-16 w-4 bg-yellow-500 rounded-sm"></div>
            <div className="h-8 w-4 bg-yellow-500 rounded-sm"></div>
            <div className="h-12 w-4 bg-yellow-500 rounded-sm"></div>
            <div className="h-14 w-4 bg-yellow-500 rounded-sm"></div>
          </div>
        </div>
        <div className="space-y-4 m-8">
          <h2 className=" text-4xl mb-6 font-extrabold text-gray-800 ml-10">
            Soyez prêts à atteindre vos
            <span
              className="inline-block px-2 py-1 relative bg-blue-200 "
              style={{ borderRadius: "91% 9% 90% 10% / 29% 82% 18% 71%" }}
            >
              objectifs
            </span>
          </h2>
          <p className="font-light text-gray-500">
            Découvrer un monde de programmes sur mesure, conçus pour vous aider
            à concrétiser vos objectifs de manière ciblée et efficace. Notre
            site web exploite les données que vous suivez de près afin de créer
            des plans parfaitement adaptés à vos besoins spécifiques. Que vous
            cherchiez à améliorer votre condition physique, à atteindre des
            objectifs de perte de poids ou à adopter un mode de vie plus sain,
            nos programmes sont élaborés pour vous accompagner à chaque étape.
            Préparez-vous à transformer vos aspirations en réalité en accédant
            dès maintenant à votre plan gratuit.
          </p>
          <div className="flex justify-center">
            <button className="flex w-30 h-10 p-2 bg-blue-400 text-white rounded-xl">
              Accéder à votre plan gratuit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
