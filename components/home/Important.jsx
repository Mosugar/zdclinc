"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "@/styles/home/important.module.css";
import Image from "next/image";

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
        onComplete: () => {
          gsap.fromTo(
            ".text__zr",
            {
              y: "100%",
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.2,
              stagger: 0.1,
              scrollTrigger: {
                trigger: ".text__zr",
                start: "bottom bottom",
                end: "bottom center",
                ease: "power4.inOut",
              },
            }
          );
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
                <span className="text-6xl">🦷</span>
              </div>
            </div>
            <div className={`${style.pic} pic__zr`}>
              <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
                <span className="text-6xl">😁</span>
              </div>
            </div>
          </div>
          <div className={style.row_2}>
            <div className={`${style.pic} pic__zr`}>
              <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-400 flex items-center justify-center">
                <span className="text-6xl">✨</span>
              </div>
            </div>
            <div className={`${style.pic} pic__zr`}>
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white">
                <span className="text-6xl">💙</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.heading}>
            <h1 className="text__zr">
              لماذا تختار ZR Dental Clinic؟
            </h1>
          </div>
          <div className={style.lists}>
            <ul>
              <li className="text__zr">
                <div className={style.symbol}>
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30.16 30.16"
                    fill="var(--blue)"
                    width={15}
                    height={15}
                  >
                    <path
                      d="M40.08,24.12v1.76a1.19,1.19,0,0,0,0,.26,14.25,14.25,0,0,1-1.72,5.94,14.86,14.86,0,0,1-10.68,7.76c-.58.11-1.17.16-1.75.24H24.12l-.23,0a14.15,14.15,0,0,1-6-1.72,14.86,14.86,0,0,1-7.76-10.69c-.11-.57-.16-1.16-.24-1.74V24.12a1.19,1.19,0,0,0,.05-.26,14.25,14.25,0,0,1,1.72-5.94,14.86,14.86,0,0,1,10.68-7.76c.58-.11,1.17-.16,1.75-.24h1.76l.23.05a14.15,14.15,0,0,1,6,1.72,14.86,14.86,0,0,1,7.76,10.69C40,23,40,23.54,40.08,24.12ZM25,37.72A12.72,12.72,0,1,0,12.28,25,12.72,12.72,0,0,0,25,37.72Z"
                      transform="translate(-9.92 -9.92)"
                    />
                    <path
                      d="M23,27.33a2.36,2.36,0,0,1,.2-.31l6.68-6.68a1.28,1.28,0,0,1,.95-.46,1.17,1.17,0,0,1,1,1.85,2.61,2.61,0,0,1-.27.31l-7.6,7.6a1.22,1.22,0,0,1-2,0L18.41,26.1a1.18,1.18,0,1,1,1.65-1.68c.88.87,1.75,1.75,2.62,2.62Z"
                      transform="translate(-9.92 -9.92)"
                    />
                  </svg>
                </div>
                <div className={style.text}>
                  <h4>فريق طبي متخصص ومؤهل</h4>
                  <p>
                    نفتخر بفريقنا الطبي المكون من أطباء أسنان ذوي خبرة عالية ومؤهلات متميزة في مختلف تخصصات طب الأسنان.
                  </p>
                </div>
              </li>
              <br />
              <li className="text__zr">
                <div className={style.symbol}>
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30.16 30.16"
                    fill="var(--blue)"
                    width={15}
                    height={15}
                  >
                    <path
                      d="M40.08,24.12v1.76a1.19,1.19,0,0,0,0,.26,14.25,14.25,0,0,1-1.72,5.94,14.86,14.86,0,0,1-10.68,7.76c-.58.11-1.17.16-1.75.24H24.12l-.23,0a14.15,14.15,0,0,1-6-1.72,14.86,14.86,0,0,1-7.76-10.69c-.11-.57-.16-1.16-.24-1.74V24.12a1.19,1.19,0,0,0,.05-.26,14.25,14.25,0,0,1,1.72-5.94,14.86,14.86,0,0,1,10.68-7.76c.58-.11,1.17-.16,1.75-.24h1.76l.23.05a14.15,14.15,0,0,1,6,1.72,14.86,14.86,0,0,1,7.76,10.69C40,23,40,23.54,40.08,24.12ZM25,37.72A12.72,12.72,0,1,0,12.28,25,12.72,12.72,0,0,0,25,37.72Z"
                      transform="translate(-9.92 -9.92)"
                    />
                    <path
                      d="M23,27.33a2.36,2.36,0,0,1,.2-.31l6.68-6.68a1.28,1.28,0,0,1,.95-.46,1.17,1.17,0,0,1,1,1.85,2.61,2.61,0,0,1-.27.31l-7.6,7.6a1.22,1.22,0,0,1-2,0L18.41,26.1a1.18,1.18,0,1,1,1.65-1.68c.88.87,1.75,1.75,2.62,2.62Z"
                      transform="translate(-9.92 -9.92)"
                    />
                  </svg>
                </div>
                <div className={style.text}>
                  <h4>متاحون 7 أيام في الأسبوع</h4>
                  <p>
                    نعمل طوال أيام الأسبوع لنوفر لك الرعاية السنية في الوقت المناسب لك، لأن صحة أسنانك لا تنتظر.
                  </p>
                </div>
              </li>
              <br />
              <li className="text__zr">
                <div className={style.symbol}>
                  <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30.16 30.16"
                    fill="var(--blue)"
                    width={15}
                    height={15}
                  >
                    <path
                      d="M40.08,24.12v1.76a1.19,1.19,0,0,0,0,.26,14.25,14.25,0,0,1-1.72,5.94,14.86,14.86,0,0,1-10.68,7.76c-.58.11-1.17.16-1.75.24H24.12l-.23,0a14.15,14.15,0,0,1-6-1.72,14.86,14.86,0,0,1-7.76-10.69c-.11-.57-.16-1.16-.24-1.74V24.12a1.19,1.19,0,0,0,.05-.26,14.25,14.25,0,0,1,1.72-5.94,14.86,14.86,0,0,1,10.68-7.76c.58-.11,1.17-.16,1.75-.24h1.76l.23.05a14.15,14.15,0,0,1,6,1.72,14.86,14.86,0,0,1,7.76,10.69C40,23,40,23.54,40.08,24.12ZM25,37.72A12.72,12.72,0,1,0,12.28,25,12.72,12.72,0,0,0,25,37.72Z"
                      transform="translate(-9.92 -9.92)"
                    />
                    <path
                      d="M23,27.33a2.36,2.36,0,0,1,.2-.31l6.68-6.68a1.28,1.28,0,0,1,.95-.46,1.17,1.17,0,0,1,1,1.85,2.61,2.61,0,0,1-.27.31l-7.6,7.6a1.22,1.22,0,0,1-2,0L18.41,26.1a1.18,1.18,0,1,1,1.65-1.68c.88.87,1.75,1.75,2.62,2.62Z"
                      transform="translate(-9.92 -9.92)"
                    />
                  </svg>
                </div>
                <div className={style.text}>
                  <h4>تقنيات حديثة ومعدات متطورة</h4>
                  <p>
                    نستخدم أحدث التقنيات والمعدات الطبية لضمان أفضل النتائج وأعلى مستويات الراحة والأمان للمرضى.
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