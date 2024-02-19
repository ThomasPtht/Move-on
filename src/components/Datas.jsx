import React from "react";
import data from "../assets/images/sportswoman.png";

function Datas(props) {
  return (
    <section className="flex m-10">
      <div className="">
        <h2 className="text-4xl">Analyse pointue de vos performances</h2>
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
      <div className="relative">
        <img className="absolute top-0 left-0 w-1/2 h-auto" src={data} alt="" />
        <svg
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:svgjs="http://svgjs.dev/svgjs"
          viewBox="0 0 800 400"
        >
          <path
            d="M99.10314178466797,293.2735290527344C105.53064600626628,268.01194763183594,123.16891606648763,141.55456034342447,137.6681671142578,141.70404052734375C152.16741816202799,141.85352071126303,171.15096537272134,298.2062848409017,186.09864807128906,294.17041015625C201.04633076985678,290.1345354715983,206.87593841552734,117.63827260335286,227.35426330566406,117.4887924194336C247.83258819580078,117.33931223551433,283.25858306884766,297.75783411661786,308.9685974121094,293.2735290527344C334.6786117553711,288.7892239888509,354.70851643880206,93.7219746907552,381.6143493652344,90.58296203613281C408.5201822916667,87.44394938151042,439.6113637288411,277.2795130411784,470.4035949707031,274.439453125C501.1958262125651,271.5993932088216,550.3737131754557,107.02541097005209,566.3677368164062,73.5426025390625"
            fill="none"
            stroke-width="25"
            stroke='url("#SvgjsLinearGradient1001")'
            stroke-linecap="round"
          ></path>
          <defs>
            <linearGradient id="SvgjsLinearGradient1001">
              <stop stop-color="hsl(184, 74%, 44%)" offset="0"></stop>
              <stop stop-color="hsl(332, 87%, 70%)" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}

export default Datas;
