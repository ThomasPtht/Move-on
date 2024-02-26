import React from "react";
import CardProgram from "./CardProgram";
import running from "../assets/images/couple-jogging.jpg";
import fitness from "../assets/images/woman-man-gym.jpg";
import yoga from "../assets/images/woman-yoga.jpg";
import gym from "../assets/images/man-training-gym.jpg";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function Programs() {
  return (
    // <Parallax pages={1} style={{ top: "0", left: "0" }}>
    //   <ParallaxLayer offset={0} speed={2.5}></ParallaxLayer>
    <section>
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Maximisez votre{" "}
          <span
            className="inline-block px-2 py-1 relative bg-blue-200 "
            style={{ borderRadius: "91% 9% 90% 10% / 29% 82% 18% 71%" }}
          >
            potentiel
          </span>{" "}
          avec nos programmes sur mesure
        </h2>
        <p className="mx-2 my-8 font-light text-gray-500 sm:text-xl">
          Plongez dans l'excellence du bien-être avec nos programmes 100%
          personnalisés, conçus pour répondre précisément à vos objectifs
          individuels. <br /> Explorez une approche unique qui optimise votre
          parcours sportif, vous permettant d'atteindre vos aspirations de
          manière efficace et gratifiante.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:m-12 justify-items-center  lg:grid-cols-4 lg:gap-20">
        <CardProgram
          image={running}
          title={"Running"}
          text={
            "Découvrez notre programme de running personnalisé, intégrant expertise sportive et technologie avancée pour des séances adaptées à tous les niveaux. Optimizez vos performances avec un suivi en temps réel via vos trackers de données."
          }
        />
        <CardProgram
          image={fitness}
          title={"Fitness / Renforcement"}
          text={
            "Optimisez votre bien-être physique avec nos programmes de renforcement et de fitness. Conçus pour sculpter votre corps et améliorer votre condition physique, ces séances d'entraînement équilibrées s'adaptent à tous les niveaux. "
          }
        />
        <CardProgram
          image={yoga}
          title={"Yoga"}
          text={
            "Plongez dans l'expérience apaisante de nos programmes de yoga, une fusion harmonieuse de postures, de techniques respiratoires et de méditation. Accessibles à tous les niveaux, ces séances visent à renforcer la souplesse du corps tout en cultivant la paix intérieure;"
          }
        />
        <CardProgram
          image={gym}
          title={"Prise de masse"}
          text={
            "Explorez notre programme conçu pour ceux qui cherchent à développer force et volume musculaire de manière significative. Ces séances intensives, adaptées à tous les niveaux, intègrent des exercices stratégiques et des techniques de levée de poids pour stimuler efficacement la croissance musculaire. "
          }
        />
      </div>
    </section>
    // </Parallax>
  );
}

export default Programs;
