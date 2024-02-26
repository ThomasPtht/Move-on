import React from "react";

function CTA(props) {
  return (
    <section class="bg-blue-50 my-10 lg:py-12 lg:flex lg:justify-center">
      <div class="overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl">
        <div class="lg:w-1/2">
          <div
            class="h-64 bg-cover lg:h-full"
            style={{
              backgroundImage:
                'url("https://img.freepik.com/photos-gratuite/femme-portion-homme-gymnase_23-2149627070.jpg?t=st=1708935803~exp=1708939403~hmac=750b230db46721ff3aa2d83d0bb83728138d4958799055a423a135ddaf6257d8&w=1380")',
            }}
          ></div>
        </div>

        <div class="max-w-xl px-6 py-16 lg:max-w-5xl lg:w-1/2">
          <h2 class="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
            Démarrez votre <span class="text-blue-500">Aventure</span>
          </h2>

          <p class="mt-4 text-gray-500 dark:text-gray-300">
            Rejoignez notre communauté dynamique et transformez chaque
            entraînement en une célébration de vos progrès. Ensemble, nous
            bâtirons une version plus forte, plus résiliente et plus
            épanouissante de vous-même. Cliquez maintenant pour débuter cette
            aventure enrichissante vers le sommet de vos performances.
          </p>

          <div class="inline-flex w-full mt-6 sm:w-auto">
            <a
              href="#"
              class="inline-flex items-center justify-center w-full px-6 py-2 text-sm text-white duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
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
