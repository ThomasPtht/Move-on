import React from "react";
import aboutPic from "../assets/images/sportsman-sportswoman.jpg";
import { Fade } from "react-awesome-reveal";

function About(props) {
  return (
    <div id="about" className="m-4 md:my-28 flex flex-col lg:flex-row">
      <div className="relative flex items-center justify-center ">
        <img
          className="w-full sm:w-2/3 lg:w-auto h-auto rounded-xl"
          src={aboutPic}
          alt=""
        />
        <div className="absolute flex bottom-0 right-20  p-3 bg-white rounded-xl shadow-xl">
          <div className="flex flex-col text-xs sm:text-sm">
            <p className=" mb-2">Aujourd'hui</p>
            <p className="font-roboto font-bold">850 cal</p>
            <div className="flex items-center">
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6"
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
            <div className="h-12 w-3 sm:w-4 bg-yellow-500 rounded-sm"></div>
            <div className="h-16 w-3 sm:w-4  bg-yellow-500 rounded-sm"></div>
            <div className="h-8 w-3 sm:w-4  bg-yellow-500 rounded-sm"></div>
            <div className="h-12 w-3 sm:w-4  bg-yellow-500 rounded-sm"></div>
            <div className="h-14 w-3 sm:w-4  bg-yellow-500 rounded-sm"></div>
          </div>
        </div>
      </div>
      <Fade direction="up" triggerOnce>
        <div className="space-y-4 ml-10 mt-8">
          <h2 className=" text-4xl mb-6 font-extrabold text-gray-800 ml-10">
            Soyez prêts à atteindre vos{" "}
            <span
              className="inline-block text-center px-2 py-1 relative bg-indigo-400 text-white "
              style={{ borderRadius: "91% 9% 90% 10% / 29% 82% 18% 71%" }}
            >
              objectifs
            </span>
          </h2>
          <p className="font-light text-gray-500 sm:text-lg">
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
            <button class="mt-8 w-30 h-10 px-6 bg-indigo-400 text-white group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md font-medium">
              <span>Programme offert</span>
              <div class="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default About;
