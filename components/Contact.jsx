import style from "../styles/contact.module.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("شكراً لتواصلك معنا! سنرد عليك في أقرب وقت ممكن.");
  };

  return (
    <div className={style.content} id="contact">
      <div className={style.container}>
        <div className={style.card}>
          <h1>تواصــل معنــا</h1>
          <span>احصل على استشارة مجانية من فريقنا الطبي المتخصص</span>
          <form onSubmit={handleSubmit}>
            <div className={style.row}>
              <input type="text" placeholder="الاسم الكامل" required/>
            </div>
            <div className={style.row}>
              <input type="tel" placeholder="رقم الهاتف" required/>
            </div>
            <div className={style.row}>
              <input type="email" placeholder="البريد الإلكتروني" />
            </div>
            <div className={style.row}>
              <textarea name="message" placeholder="رسالتك..." required></textarea>
            </div>
            <div className={style.btn}>
              <button type="submit">إرسال</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
