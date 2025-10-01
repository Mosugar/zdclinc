"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "../../styles/home/services.module.css";
import Heading from "../Heading";

const Services = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".card_det__zr",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".card_det__zr",
          start: "bottom bottom",
          end: "bottom center",
          ease: "power4.inOut",
        },
      }
    );
  }, []);

  const services = [
    {
      icon: "🦷",
      title: "Couronnes & Bridges",
      description: 'Restauration dentaire avec des couronnes et bridges en céramique pour retrouver fonction et esthétique.',
    },
    {
      icon: "💎",
      title: "Implants Dentaires",
      description: 'Implantologie moderne pour remplacer les dents manquantes avec des solutions durables et naturelles.',
    },
    {
      icon: "✨",
      title: "Blanchiment Dentaire",
      description: 'Blanchiment professionnel pour un sourire éclatant et des dents blanches naturellement.',
    },
    {
      icon: "🔬",
      title: "Endodontie",
      description: 'Traitement des canaux radiculaires avec les dernières technologies pour sauver vos dents.',
    },
    {
      icon: "📐",
      title: "Orthodontie",
      description: 'Orthodontie traditionnelle et invisible pour corriger l\'alignement dentaire.',
    },
    {
      icon: "👶",
      title: "Dentisterie Pédiatrique",
      description: 'Soins dentaires spécialisés pour enfants dans un environnement confortable et sécurisé.',
    },
  ];

  return (
    <div className={style.content} id="services">
      <div className={style.container}>
        <Heading
          topHeading={"Services Dentaires Complets"}
          botHeading={"Pour Votre Santé et Votre Sourire"}
          centerHeading={true}
          showSubHeading={false}
          showBotHeading={true}
        />
        <div className={style.cards}>
          {services.map((card, index) => (
            <div className={style.card} key={index}>
              <div className={style.icon}>
                <div className="w-[70px] h-[70px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-4xl">{card.icon}</span>
                </div>
              </div>
              <div className={`${style.title} overflow-hidden`}>
                <h3 className="card_det__zr">{card.title}</h3>
              </div>
              <div className={`${style.description} overflow-hidden`}>
                <p className="card_det__zr">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
