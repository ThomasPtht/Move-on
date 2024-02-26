import React from "react";
import data from "../assets/images/sportswoman.png";

function Datas(props) {
  return (
    <section className="flex m-10 space-x-10">
      <div className="mx-12 space-y-8">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Analyse pointue de vos{" "}
          <span
            className="inline-block px-2 py-1 relative bg-blue-200 "
            style={{ borderRadius: "91% 9% 90% 10% / 29% 82% 18% 71%" }}
          >
            performances
          </span>
        </h2>
        <p className="font-light">
          Nous vous offrons une analyse approfondie de vos performances grâce à
          notre intégration innovante des données de votre tracker de dépenses
          énergétiques via votre téléphone, captées avec précision par votre
          montre connectée. Plongez dans l'univers de la personnalisation, où
          chaque séance d'entraînement est soigneusement adaptée en fonction de
          vos données biométriques en temps réel. Optimisez votre progression,
          identifiez les zones de croissance et atteignez vos objectifs de
          manière plus stratégique que jamais. Transformez vos données en
          résultats concrets avec notre approche axée sur la précision et la
          personnalisation.
        </p>
      </div>
      <div className="">
        <img className="w-full " src={data} alt="" />
      </div>
    </section>
  );
}

export default Datas;
