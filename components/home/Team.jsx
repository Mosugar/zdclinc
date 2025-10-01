"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "../../styles/home/team.module.css";
import Heading from "../Heading";

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
      name: "Dr. Zakaria Rahmani",
      specialty: "Chirurgien Dentiste",
      emoji: "👨‍⚕️"
    },
    {
      name: "Dr. Rachida Benissa",
      specialty: "Orthodontiste",
      emoji: "👩‍⚕️"
    },
    {
      name: "Dr. Mohamed Idrissi",
      specialty: "Implantologue",
      emoji: "👨‍⚕️"
    },
  ];

  return (
    <div className={style.content} id="team">
      <div className={style.container}>
        <Heading
          topHeading={"Notre Équipe d'Excellence"}
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
