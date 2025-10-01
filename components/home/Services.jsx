"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "@/styles/home/services.module.css";
import Heading from "@/components/Heading";
import Image from "next/image";

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
        onComplete: () => {
          gsap.to(".card_img__zr", {
            rotate: 360,
            opacity: 1,
          });
        },
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
      icon: "/images/cards-icon/crown.png",
      title: "تركيبات الأسنان",
      description: 'تركيب التيجان والجسور الخزفية لاستعادة وظيفة ومظهر الأسنان المتضررة.',
    },
    {
      icon: "/images/cards-icon/implant.png",
      title: "زراعة الأسنان",
      description: 'زراعة أسنان بتقنيات حديثة لتعويض الأسنان المفقودة بحلول دائمة وطبيعية.',
    },
    {
      icon: "/images/cards-icon/clean.png",
      title: "تبييض الأسنان",
      description: 'تبييض احترافي للأسنان للحصول على ابتسامة ناصعة البياض وجذابة.',
    },
    {
      icon: "/images/cards-icon/root-canal.png",
      title: "علاج الجذور",
      description: 'علاج قنوات الجذور بأحدث التقنيات للحفاظ على الأسنان المصابة.',
    },
    {
      icon: "/images/cards-icon/regular.png",
      title: "تقويم الأسنان",
      description: 'تقويم الأسنان التقليدي والشفاف لتصحيح اصطفاف الأسنان والحصول على ابتسامة مثالية.',
    },
    {
      icon: "/images/cards-icon/chair.png",
      title: "طب أسنان الأطفال",
      description: 'رعاية متخصصة لأسنان الأطفال في بيئة مريحة وآمنة.',
    },
  ];

  return (
    <div className={style.content} id="services">
      <div className={style.container}>
        <Heading
          topHeading={"خدمــات طبيــة متكاملــة"}
          botHeading={"لصحــة أسنانــك وجمــال ابتسامتــك"}
          centerHeading={true}
          showSubHeading={false}
          showBotHeading={true}
        />
        <div className={style.cards}>
          {services.map((card, index) => (
            <div className={style.card} key={index}>
              <div className={style.icon}>
                <div className="w-[50px] h-[50px] bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl">🦷</span>
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