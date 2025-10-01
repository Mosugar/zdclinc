"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import style from "../../styles/home/testimonial.module.css";
import Heading from "..//Heading";

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
      trigger: 0.5,
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
      client: "أمينة الزهراوي",
      description: "تجربة رائعة مع عيادة ZR Dental! الفريق محترف للغاية والخدمة ممتازة. أنصح بها بشدة.",
      rating: 5
    },
    {
      client: "يوسف المرابط",
      description: "أفضل عيادة أسنان في القنيطرة. العلاج كان بدون ألم والنتائج فاقت توقعاتي.",
      rating: 5
    },
    {
      client: "فاطمة الزهراء",
      description: "شكراً لفريق ZR Dental على الاهتمام والعناية الفائقة. ابتسامتي الآن أجمل من أي وقت مضى!",
      rating: 5
    },
  ];

  return (
    <div className={style.content} id="testimonial">
      <div className={style.container}>
        <Heading
          topHeading={'آراء مرضانــا الكــرام'}
          centerHeading={true}
          showSubHeading={false}
          showBotHeading={false}
        />
        <div className={style.cards}>
          {testimonials.map((testimonial, index) => (
            <div className={style.card} key={index}>
              <div className={style.top}>
                <div className={style.pic}>
                  <div className="w-full h-full bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center text-2xl">
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
                  <span key={i}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 45.91 44.2"
                      width={20}
                      height={20}
                      className="testimonial_zr"
                    >
                      <path
                        d="M107.43,72.09c-.21-.14-.37-.23-.52-.32L93.46,63.26a.59.59,0,0,0-.75,0L79.25,71.77l-.53.33c.23-.93.44-1.79.66-2.65q1.71-6.7,3.43-13.41a.58.58,0,0,0-.22-.69L70.51,45.11l-.36-.33,1.95-.15,11.6-.75c.92-.06,1.85-.14,2.77-.17.33,0,.39-.2.48-.43l4.62-11.61c.49-1.22,1-2.44,1.5-3.77.1.22.17.36.22.5q3,7.41,5.9,14.82a.66.66,0,0,0,.66.5c3.5.21,7,.45,10.48.68l4.75.3,1,.09-2.77,2.35-9.69,8.21a.6.6,0,0,0-.23.72q2,7.78,4,15.58C107.38,71.77,107.39,71.89,107.43,72.09Z"
                        transform="translate(-70.15 -27.9)"
                      />
                    </svg>
                  </span>
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