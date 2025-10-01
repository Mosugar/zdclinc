"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "../../styles/home/testimonial.module.css";
import Heading from "../Heading";

const Testimonial = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".testimonial_zr", {
      y: '100%',
      opacity: 0,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      scrollTrigger: {
        trigger: ".testimonial_zr",
        start: "center bottom",
        end: "bottom center",
        ease: "power4.inOut",
      },
    });
  }, []);

  const testimonials = [
    {
      client: "Amina Zahraoui",
      description: "Expérience exceptionnelle avec ZR Dental ! L'équipe est très professionnelle et le service est excellent. Je recommande vivement.",
      rating: 5
    },
    {
      client: "Youssef Marabti",
      description: "La meilleure clinique dentaire de Kénitra. Le traitement était sans douleur et les résultats ont dépassé mes attentes.",
      rating: 5
    },
    {
      client: "Fatima Zahra",
      description: "Merci à l'équipe de ZR Dental pour l'attention et les soins exceptionnels. Mon sourire n'a jamais été aussi beau !",
      rating: 5
    },
  ];

  return (
    <div className={style.content} id="testimonial">
      <div className={style.container}>
        <Heading
          topHeading={'Témoignages de Nos Patients'}
          centerHeading={true}
          showSubHeading={false}
          showBotHeading={false}
        />
        <div className={style.cards}>
          {testimonials.map((testimonial, index) => (
            <div className={style.card} key={index}>
              <div className={style.top}>
                <div className={style.pic}>
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center text-3xl font-bold text-white">
                    {testimonial.client.charAt(0)}
                  </div>
                </div>
                <div className={style.client}>
                  <h4>{testimonial.client}</h4>
                </div>
              </div>
              <div className={style.description}>
                <p>{testimonial.description}</p>
              </div>
              <div className={style.stars}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <div className={style.teeth}>
                <span className="text-4xl">🦷</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
