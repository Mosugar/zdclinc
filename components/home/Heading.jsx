"use client";
import { useRef, useEffect } from "react";
import style from "@/styles/Heading.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Heading = ({
  subHeading,
  topHeading,
  botHeading,
  thirdHeading,
  centerHeading,
  showSubHeading,
  showThirdHeading,
  showBotHeading,
}) => {
  const triggerRef = useRef(null);

  useEffect(() => {
    const animation = gsap.fromTo(
      triggerRef.current.querySelectorAll(".head_part"),
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
        stagger: 0.4,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "bottom bottom",
          end: "bottom center",
          ease: "power4.inOut",
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [subHeading, topHeading, botHeading]);

  const headingStyle = centerHeading
    ? {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }
    : { display: "block" };

  return (
    <div className={style.content}>
      {showSubHeading && (
        <div className={style.sub_heading}>
          <span className={style.point}></span>
          <span>{subHeading}</span>
        </div>
      )}
      <div className={style.heading} ref={triggerRef} style={headingStyle}>
        <div className={style.part}>
          <h1 className="head_part">{topHeading}</h1>
        </div>
        {showBotHeading && (
          <div className={style.part}>
            <h1 className="head_part">{botHeading}</h1>
          </div>
        )}
        {showThirdHeading && (
          <div className={style.part}>
            <h1 className="head_part">{thirdHeading}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Heading;