import style from "@/styles/banner.module.css";

const Banner = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.part}>
          <div>نفتــــــخر بثقتكـــــــم</div>
          <div>ونسعـــــــــــد بخدمتكـــــــم</div>
          <div>ZR Dental Clinic</div>
        </div>

        <div className={style.part}>
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-9xl">🦷✨</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;