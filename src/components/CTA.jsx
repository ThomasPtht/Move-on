import React from "react";
import cta from "../assets/images/squats.jpg";

function CTA(props) {
  return (
    <section class=" my-10 lg:py-16 lg:flex lg:justify-center">
      <div class="bg-gray-800 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div class="lg:w-1/2">
          <div
            class="h-64 bg-cover lg:h-full rounded-xl"
            style={{
              backgroundImage: `url(${cta})`,
            }}
          ></div>
        </div>

        <div class="max-w-xl px-6 py-16 lg:max-w-5xl lg:w-1/2">
          <h2 class="text-2xl font-semibold text-white md:text-3xl">
            Démarrez votre <span class="text-indigo-300">Aventure</span>
          </h2>

          <p class="mt-4 text-gray-300">
            Rejoignez notre communauté dynamique et transformez chaque
            entraînement en une célébration de vos progrès. Ensemble, nous
            bâtirons une version plus forte, plus résiliente et plus
            épanouissante de vous-même. Cliquez maintenant pour débuter cette
            aventure enrichissante vers le sommet de vos performances.
          </p>

          <div class="inline-flex w-full mt-6 sm:w-auto">
            <a
              href="#"
              class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-indigo-400 rounded-lg hover:bg-indigo-500 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
            >
              Commencer maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
