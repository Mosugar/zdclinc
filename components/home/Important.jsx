"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "../../styles/home/important.module.css";

const Important = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      ".pic__zr",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".pic__zr",
          start: "bottom bottom",
          end: "bottom center",
          ease: "power4.inOut",
        },
      }
    );
  }, []);

  return (
    <div className={style.content} id="advices">
      <div className={style.container}>
        <div className={style.pics}>
          <div className={style.row}>
            <div className={`${style.pic} pic__zr`}>
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <span className="text-8xl">🦷</span>
              </div>
            </div>
            <div className={`${style.pic} pic__zr`}>
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                <span className="text-8xl">😁</span>
              </div>
            </div>
          </div>
          <div className={style.row_2}>
            <div className={`${style.pic} pic__zr`}>
              <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center">
                <span className="text-8xl">✨</span>
              </div>
            </div>
            <div className={`${style.pic} pic__zr`}>
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white">
                <span className="text-8xl">💙</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.heading}>
            <h1 className="text__zr">
              Pourquoi Choisir ZR Dental Clinic ?
            </h1>
          </div>
          <div className={style.lists}>
            <ul>
              <li className="text__zr">
                <div className={style.symbol}>
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <div className={style.text}>
                  <h4>Équipe Médicale Qualifiée</h4>
                  <p>
                    Notre équipe est composée de dentistes expérimentés et hautement qualifiés dans toutes les spécialités dentaires.
                  </p>
                </div>
              </li>
              <br />
              <li className="text__zr">
                <div className={style.symbol}>
                  <span className="text-2xl">📅</span>
                </div>
                <div className={style.text}>
                  <h4>Ouvert 7 Jours sur 7</h4>
                  <p>
                    Nous sommes disponibles tous les jours de la semaine pour vous offrir des soins dentaires quand vous en avez besoin.
                  </p>
                </div>
              </li>
              <br />
              <li className="text__zr">
                <div className={style.symbol}>
                  <span className="text-2xl">🔬</span>
                </div>
                <div className={style.text}>
                  <h4>Technologies Modernes</h4>
                  <p>
                    Nous utilisons les dernières technologies et équipements médicaux pour garantir les meilleurs résultats et votre confort.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Important;
