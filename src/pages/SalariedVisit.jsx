import React from "react";
import { useEffect } from 'react';

const SalariedVisit = () => {
  useEffect(() => {
    // Vérifie si l'URL contient un hash et fait défiler l'élément cible
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <section id="breadcrumbs" className="breadcrumbs" style={{ backgroundColor: "#fff" }}>
      <div style={{ width: "100%" }}>
        <div className="d-flex justify-content-between align-items-center" style={{ width: "100%", flexDirection: "column" }}>
          <img src="/6.jpg" className="img-fluid" alt="Slide" style={{ width: "40%" }} />
          
          <div
  className="container-fluid"
  style={{
    background: "linear-gradient(to right, #2563eb, #1e40af, #f97316)", // palette bleu → bleu foncé → orange
    height: "15vh",
  }}
>
  <div>
    <h2
      style={{
        textAlign: "center",
        color: "#fff",
        fontWeight: "bold",
        marginTop: "25px",
      }}
    >
      VOTRE CENTRE MÉDICAL D'ENTREPRISE
    </h2>
  </div>
</div>


          {/* Section Visite Médicale */}
          <div className="container about" style={containerStyle}>
            <div className="row content">
              <div className="mt-4">
                <div id="medicale"></div>
                <h1>Vous Venez Pour Une Visite Médicale ?</h1>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0"></div>
              <p>
                Dans le cadre de votre embauche ou de votre suivi médical périodique, vous pouvez être convié à une visite
                médicale dans nos locaux. Il est important de confirmer votre rendez-vous avec nos services pour préparer cette
                visite médicale. Certaines conditions peuvent être nécessaires :
              </p>
              <ul>
                {[
                  "Être à jeun",
                  "Apporter les prescriptions médicales",
                  "Apporter les rapports médicaux et autres résultats d’analyses médicales"
                ].map((item, index) => (
                <li key={index}>
                   <i className="ri-check-double-line"></i> {item}
                </li>
                ))}
              </ul>
              <p className="fst-italic">
                À l’issue de l’examen médical, un dossier médical sera créé et mis à jour, et une fiche d’aptitude sera délivrée pour conclure la visite médicale.
              </p>
              <p>
                Vous pouvez vous-même solliciter une visite médicale si vous pensez qu’il est nécessaire d’évaluer votre état de santé par rapport à vos activités professionnelles.
              </p>
              <p>
                Si votre entreprise est partenaire de notre centre médical d’entreprises, vous pouvez bénéficier de consultations en cas de maladie pendant les heures de travail. N’hésitez pas à contacter nos services pour bénéficier d’une prise en charge d’urgence.
              </p> <br />
            </div><br /><br />
          </div>

          {/* Section Formations */}
          <div className="container about" style={containerStyle}>
            <div className="row content">
              <div className="mt-1">
                <div id="formations"></div>
                <h1>Vous Venez Pour Une Formations ?</h1>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0"></div>
              <p>
                Pour votre formation professionnelle continue dans le domaine de la santé et de la sécurité au travail, vous pouvez
                parcourir notre catalogue de formations ainsi que nos programmes de séminaires. Vous pouvez renseigner une fiche
                d’inscription pour manifester votre besoin en formation.
              </p><br />
            </div><br /><br />
          </div>

          {/* Section Autres Besoins */}
          <div className="container about" style={containerStyle}>
            <div className="row content">
              <div className="col-lg-6">
                <div id="besoins"></div>
                <h1>Autres besoins</h1>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0"></div>
              <p>
                Nous sommes outillés pour vous accompagner dans tous vos besoins en matière de protection de votre santé et de
                votre sécurité au travail. Alors contactez-nous et vous aurez la réponse à votre requête.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Styles globaux réutilisables
const containerStyle = {
  backgroundColor: "#fff",
  marginTop: "-2%",
  borderRadius: "15px",
};

export default SalariedVisit;
