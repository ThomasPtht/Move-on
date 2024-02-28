import React from "react";
import data from "../assets/images/sportswoman.png";
import heart from "../assets/images/heart-rate.png";
import fire from "../assets/images/fire.png";

function Datas(props) {
  return (
    <section className="flex flex-col md:flex-row items-center m-20 space-x-10">
      <div className="space-y-8">
        <h2 className="text-center text-4xl font-extrabold text-gray-800">
          Analyse pointue de vos{" "}
          <span
            className="inline-block px-2 py-1 relative bg-indigo-400 text-white "
            style={{ borderRadius: "91% 9% 90% 10% / 29% 82% 18% 71%" }}
          >
            performances
          </span>
        </h2>
        <p className="font-light text-gray-500 sm:text-lg ">
          Nous vous offrons une analyse approfondie de vos performances grâce à
          notre intégration innovante des données de votre tracker de dépenses
          énergétiques via votre téléphone, captées avec précision par votre
          montre connectée. <br />
          Plongez dans l'univers de la personnalisation, où chaque séance
          d'entraînement est soigneusement adaptée en fonction de vos données
          biométriques en temps réel. Optimisez votre progression, identifiez
          les zones de croissance et atteignez vos objectifs de manière plus
          stratégique que jamais. <br />
          Transformez vos données en résultats concrets avec notre approche axée
          sur la précision et la personnalisation.
        </p>
      </div>
      <div className="mt-20 flex justify-items-center relative ">
        <div className="p-28 sm:p-32 bg-indigo-400 rounded-full"></div>
        <img
          className="w-72 h-72 sm:w-80 sm:h-80 object-cover absolute bottom-4 "
          src={data}
          alt=""
        />
        <div className=" absolute bottom-0  flex items-center p-2 bg-white rounded-lg shadow-lg">
          <img className="w-4 h-4 sm:w-6 sm:h-6" src={heart} alt="" />
          <div className="flex flex-col ml-4 text-xs sm:text-sm">
            <p className="font-roboto font-bold"> 78 bpm</p>
            <p className="">Rythme cardiaque </p>
          </div>
        </div>
        <div className="right-36 w-32 sm:w-40 absolute top-4 sm:left-40 flex items-center p-2 bg-white rounded-lg shadow-xl">
          <img className="w-4 h-4 sm:w-6 sm:h-6" src={fire} alt="" />
          <div className="flex flex-col ml-4 text-xs sm:text-sm">
            <p className=" font-roboto font-bold "> 14%</p>
            <p className="">Calories brûlées </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Datas;
