"use client";
import { useState } from "react";
import style from "../../styles/home/faqs.module.css";
import Heading from "../Heading";

const Faqs = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const handleClick = (index) => {
    setShowAnswer(index === showAnswer ? null : index);
  };

  const faq = [
    {
      question: "Comment prendre rendez-vous à ZR Dental Clinic ?",
      answer: "Vous pouvez prendre rendez-vous facilement en nous appelant au 07 70 22 22 36/37/38, via WhatsApp, ou en visitant directement notre clinique au Avenue Imam Ali, Immeuble 175, Bureau N°1, Kénitra.",
    },
    {
      question: "Quels sont les horaires d'ouverture ?",
      answer: "Nous sommes à votre service 7 jours sur 7. Nous sommes fiers d'offrir nos services tous les jours de la semaine pour votre confort.",
    },
    {
      question: "Acceptez-vous les assurances santé ?",
      answer: "Oui, nous travaillons avec la plupart des compagnies d'assurance santé. Veuillez nous contacter pour vérifier si votre assurance est acceptée.",
    },
    {
      question: "Les traitements sont-ils douloureux ?",
      answer: "Nous utilisons les dernières technologies et anesthésiques locaux pour assurer votre confort total. La plupart de nos procédures sont indolores ou avec une douleur très légère.",
    },
    {
      question: "Quels services d'urgence proposez-vous ?",
      answer: "Nous offrons des services d'urgence dentaire. En cas d'urgence, contactez-nous immédiatement et nous essaierons de vous recevoir dans les plus brefs délais.",
    },
  ];

  return (
    <div className={style.content} id="faq">
      <div className={style.container}>
        <Heading
          topHeading={"Questions Fréquentes"}
          centerHeading={true}
          showSubHeading={false}
          showBotHeading={false}
        />
        <div className={style.cards}>
          {faq.map((question, index) => (
            <div
              className={style.card}
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className={style.title}>
                <div className={style.question}>
                  <h2>{question.question}</h2>
                </div>
                <div className={style.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    fill="var(--blue)"
                    width={40}
                    height={40}
                    className={showAnswer === index ? 'active' : ''}
                  >
                    <path
                      d="M25,1A24,24,0,1,0,49,25,24,24,0,0,0,25,1Zm1.91,26.48c0,2.51,0,5,0,7.54a1.91,1.91,0,0,1-3.81.09c0-1.31,0-2.63,0-3.95V26.92H22.5c-2.52,0-5,0-7.54,0a1.91,1.91,0,1,1,.11-3.81h8v-.54c0-2.53,0-5.06,0-7.58a1.91,1.91,0,1,1,3.81.08v8h.57c2.52,0,5,0,7.54,0a1.9,1.9,0,0,1,1.82,2.61A1.93,1.93,0,0,1,35,26.92h-8Z"
                      transform="translate(-1 -1)"
                    />
                  </svg>
                </div>
              </div>
              {showAnswer === index && (
                <div className={style.answer}>
                  <p>{question.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
