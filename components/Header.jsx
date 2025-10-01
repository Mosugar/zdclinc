"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import style from "@/styles/header.module.css";
import Image from "next/image";

const Header = () => {
  const [logoSrc, setLogoSrc] = useState("/images/logo.svg");

  useEffect(() => {
    gsap.fromTo(
      ".link__zr",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.3,
        duration: 0.2,
        stagger: 0.2,
      }
    );
  }, []);

  const handleClick = () => {
    const navigation = document.querySelector("#navigation");
    const hamburger = document.querySelector("#hamburger");
    navigation.classList.toggle(`${style.active}`);
    hamburger.classList.toggle(`${style.active}`);
  };

  const handleCloseMenu = () => {
    const navigation = document.querySelector("#navigation");
    const hamburger = document.querySelector("#hamburger");
    navigation.classList.remove(`${style.active}`);
    hamburger.classList.remove(`${style.active}`);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero");
      const navigation = document.querySelector("#navigation");
      const scrolled = window.scrollY;
      const scrollThreshold = heroHeight ? heroHeight.offsetHeight - 50 : 500;
      
      if (scrolled >= scrollThreshold && !navigation.classList.contains(`${style.active}`)) {
        setLogoSrc("/images/logo-blue.svg");
        const hamColor = document.querySelector(".Ham-col");
        if (hamColor) hamColor.style.fill = "var(--blue)";
      } else {
        setLogoSrc("/images/logo.svg");
        const hamColor = document.querySelector(".Ham-col");
        if (hamColor) hamColor.style.fill = "var(--white)";
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.logo}>
          <h1 style={{ color: 'white', fontFamily: 'Expo-Arabic', fontSize: '1.8rem' }}>
            ZR Dental
          </h1>
        </div>
        <div className={style.links} id="navigation">
          <ul>
            <li onClick={handleCloseMenu} className="overflow-hidden">
              <a href="#services" className="link__zr">
                خدمــاتنـا
              </a>
            </li>
            <li onClick={handleCloseMenu} className="overflow-hidden">
              <a href="#advices" className="link__zr">
                نصـائحنــا
              </a>
            </li>
            <li onClick={handleCloseMenu} className="overflow-hidden">
              <a href="#team" className="link__zr">
                فريـقــنا
              </a>
            </li>
            <li onClick={handleCloseMenu} className="overflow-hidden">
              <a href="#testimonial" className="link__zr">
                آراء المرضى
              </a>
            </li>
            <li onClick={handleCloseMenu} className="overflow-hidden">
              <a href="#contact" className="link__zr">
                تواصـل معنـا
              </a>
            </li>
            <li onClick={handleCloseMenu} className="overflow-hidden">
              <a href="#faq" className="link__zr">
                الأسئــــلة الشــــائعـة
              </a>
            </li>
          </ul>
        </div>
        <div
          className={style.hamburger}
          id="hamburger"
          onClick={handleClick}
        >
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15 10"
            width={30}
            height={30}
            fill="var(--white)"
            className="Ham-col"
          >
            <rect width="15" height="2" className={style.bar} />
            <rect y="4" width="15" height="2" className={style.bar_two} />
            <rect y="8" width="15" height="2" className={style.bar_three} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Header;