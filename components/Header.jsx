"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import style from "../styles/header.module.css";
import Image from "next/image";

const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      ".link__zr",
      { opacity: 0 },
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

  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.logo}>
          <Image 
            src="https://res.cloudinary.com/dylpck2et/image/upload/v1759351935/208710117_197296808856120_6903803482356313607_n_orosrp.jpg"
            alt="ZR Dental Clinic"
            width={80}
            height={80}
            className={style.logoImage}
          />
        </div>
        <div className={style.links} id="navigation">
          <ul>
            <li onClick={handleCloseMenu} className="overflow-hidden">
              <a href="#services" className="link__zr">Nos Services</a>
            </li>
            <li onClick={handleCloseMenu} className="overflow-hidden">
              <a href="#advices" className="link__zr">Pourquoi Nous</a>
            </li>
            <li onClick={handleCloseMenu} className="overflow-hidden">
              <a href="#team" className="link__zr">Notre Équipe</a>
            </li>
            <li onClick={handleCloseMenu} className="overflow-hidden">
              <a href="#testimonial" className="link__zr">Témoignages</a>
            </li>
            <li onClick={handleCloseMenu} className="overflow-hidden">
              <a href="#contact" className="link__zr">Contact</a>
            </li>
            <li onClick={handleCloseMenu} className="overflow-hidden">
              <a href="#faq" className="link__zr">FAQ</a>
            </li>
          </ul>
        </div>
        <div className={style.hamburger} id="hamburger" onClick={handleClick}>
          <svg
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
