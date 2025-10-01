"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "@/styles/home/team.module.css";
import Heading from "@/components/Heading";

const Team = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(".team_det__zr", {
      y: '100%',
      opacity: 0,
    }, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      trigger: 0.2,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".team_det__zr",
        start: "center bottom",
        end: "bottom center",
        ease: "power4.inOut",
      },
    });
  }, []);

  const team = [
    {
      name: "د. زكريا الرحماني",
      specialty: "جراح الفم والأسنان",
      emoji: "👨‍⚕️"
    },
    {
      name: "د. رشيدة بنعيسى",
      specialty: "أخصائية تقويم الأسنان",
      emoji: "👩‍⚕️"
    },
    {
      name: "د. محمد الإدريسي",
      specialty: "أخصائي زراعة الأسنان",
      emoji: "👨‍⚕️"
    },
  ];

  return (
    <div className={style.content} id="team">
      <div className={style.container}>
        <Heading
          topHeading={"فريقنــا الطبــي المتميــز"}
          centerHeading={true}
          showSubHeading={false}
          showBotHeading={false}
        />
        <div className={style.cards}>
          {team.map((member, index) => (
            <div className={style.card} key={index}>
              <div className={style.pic}>
                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                  <span className="text-9xl">{member.emoji}</span>
                </div>
              </div>
              <div className={style.details}>
                <h3 className="team_det__zr">{member.name}</h3>
                <span className="team_det__zr">{member.specialty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;