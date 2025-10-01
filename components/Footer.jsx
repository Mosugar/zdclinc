import style from "../styles/footer.module.css";

const Footer = () => {
  return (
    <div className={style.content}>
      <div className={style.container}>
        <div className={style.info}>
          <div className={style.right_part}>
            <div className={style.logo}>
              <h2 style={{ color: 'white', fontFamily: 'Expo-Arabic', fontSize: '2rem' }}>
                ZR Dental
              </h2>
            </div>
            <div className={style.desc}>
              <p>
                عيادة ZR Dental - عيادة أسنان متعددة التخصصات في القنيطرة. 
                نقدم خدمات طبية متكاملة بأحدث التقنيات وأعلى معايير الجودة.
                نفتح 7 أيام في الأسبوع لخدمتكم.
              </p>
            </div>
            <div className="mt-5">
              <p className="text-white text-sm">
                © 2025 ZR Dental Clinic. جميع الحقوق محفوظة
              </p>
            </div>
          </div>
          <div className={style.left_part}>
            <div className={style.links}>
              <h2>معلومات الاتصال</h2>
              <ul>
                <li>
                  <a href="tel:+212770222236">
                    <span>📞</span>
                    <span>07 70 22 22 36</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+212770222237">
                    <span>📞</span>
                    <span>07 70 22 22 37</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+212770222238">
                    <span>📞</span>
                    <span>07 70 22 22 38</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:contact@zrdental.ma">
                    <span>📧</span>
                    <span>contact@zrdental.ma</span>
                  </a>
                </li>
                <li>
                  <a>
                    <span>📍</span>
                    <span>Avenue Imam Ali, Immeuble 175, Bureau N°1, Kénitra</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className={style.social}>
              <h2>تابعنا على:</h2>
              <ul>
                <li>
                  <a href="https://www.facebook.com/Zr.dentalclinic" target="_blank" rel="noopener noreferrer">
                    <span>📘</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/zr.dental.clinic" target="_blank" rel="noopener noreferrer">
                    <span>📷</span>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/212770222236" target="_blank" rel="noopener noreferrer">
                    <span>💬</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@zr.dental.clinic" target="_blank" rel="noopener noreferrer">
                    <span>🎵</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={style.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.2874517240876!2d-6.588419!3d34.261045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDE1JzM5LjgiTiA2wrAzNScxOC4zIlc!5e0!3m2!1sen!2sma!4v1234567890"
            width="290"
            height="400"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Footer;
