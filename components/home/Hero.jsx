"use client";
import { useEffect } from "react";
import style from "@/styles/home/hero.module.css";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".ov-zr",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        delay: 1.2,
        duration: 0.3,
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className={style.content} id="hero">
      <div className={style.container}>
        <div className={style.body}>
          <div className="overflow-hidden">
            <div className="ov-zr opacity-0">ابتسامتــــك الصحيـــــة</div>
          </div>
          <div className="overflow-hidden">
            <div className="ov-zr opacity-0">تبـــــدأ مــــن هنـــــــا</div>
          </div>
          <div className="overflow-hidden">
            <div className="ov-zr opacity-0">ZR Dental Clinic</div>
          </div>
          <div className={`${style.btn} ov-zr`}>
            <a href="https://wa.me/212770222236">احجــز موعــدك</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;