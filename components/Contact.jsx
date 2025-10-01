import style from "../styles/contact.module.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Merci de nous avoir contactés ! Nous vous répondrons dans les plus brefs délais.");
  };

  return (
    <div className={style.content} id="contact">
      <div className={style.container}>
        <div className={style.card}>
          <h1>Contactez-Nous</h1>
          <span>Obtenez une consultation gratuite de notre équipe médicale spécialisée</span>
          <form onSubmit={handleSubmit}>
            <div className={style.row}>
              <input type="text" placeholder="Nom complet" required/>
            </div>
            <div className={style.row}>
              <input type="tel" placeholder="Numéro de téléphone" required/>
            </div>
            <div className={style.row}>
              <input type="email" placeholder="Adresse e-mail" />
            </div>
            <div className={style.row}>
              <textarea name="message" placeholder="Votre message..." required></textarea>
            </div>
            <div className={style.btn}>
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
