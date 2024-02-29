import React from "react";
import banner from "../assets/images/portrait-young-sportive-girl.jpg";
import { Fade } from "react-awesome-reveal";

function Banner() {
  return (
    <div className="font-jaldi text-white">
      <div
        className="relative bg-cover flex items-start"
        style={{
          backgroundImage: `url('${banner}')`,
          backgroundPosition: "right",
          height: "800px",
        }}
      >
        <div className="my-36 ml-4 md:ml-24">
          <Fade direction="up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-14">
              Rester actif n’a jamais <br />
              été aussi simple{" "}
            </h2>
            <p className="flex flex-wrap mb-14 text-base sm:text-lg">
              Découvrez des programmes d'exercices adaptés à votre profil,
              suivez votre <br />
              évolution, et connectez-vous à une communauté mondiale dédiée au
              bien-être. <br />
              Votre chemin vers une vie plus saine commence ici.
            </p>
          </Fade>
          <div className="flex  gap-4 sm:gap-8 font-bold ml-6">
            <button class="w-30 sm:w-36 h-10 bg-indigo-400 p-2 group relative overflow-hidden rounded-md bg-blue-500 px-6 text-neutral-50 transition">
              <span>Commencer</span>
              <div class="absolute inset-0 h-full w-0 bg-white/30 transition-[width] group-hover:w-full"></div>
            </button>

            <button class="w-32 sm:w-36 h-10 text-indigo-400 border-2 border-indigo-400 bg-white p-2 group relative rounded-md border border-2">
              <span class="relative inline-flex overflow-hidden">
                <div class="text-indigo-400 translate-y-0 skew-y-0 transition duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                  Mon plan
                </div>
                <div class="text-indigo-400 absolute translate-y-[110%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Mon plan
                </div>
              </span>
            </button>
          </div>
          <div className="font-roboto flex mt-20 ml-0 sm:ml-10 text-xs sm:text-xl">
            <div className="flex flex-col items-center mb-4 sm:mb-0 mr-3 sm:mr-6">
              <p>5k</p>
              <p>utilisateurs</p>
            </div>
            <div className="pr-1 sm:pr-4 mx-1 sm:mx-6 border-r border-gray-300"></div>
            <div className="flex flex-col text-center items-center sm:mb-0 sm:mr-6">
              <p>10M+</p>
              <p>calories brûlées</p>
            </div>
            <div className="pr-1 sm:pr-4 mx-1 sm:mx-6  border-r border-gray-300"></div>
            <div className="flex flex-col items-center mb-4 sm:mb-0 sm:mr-6">
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
