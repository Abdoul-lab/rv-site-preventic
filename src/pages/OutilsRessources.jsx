import React, { useEffect } from "react";

const OutilsRessources = () => {
  useEffect(() => {
    // Vérifie si l'URL contient un hash et fait défiler vers la section correspondante
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section id="breadcrumbs" className="breadcrumbs" style={{ backgroundColor: "#fff" }}>
      <div style={{ width: "100%" }}>
        <div
          className="d-flex justify-content-between align-items-center"
          style={{ width: "100%", flexDirection: "column" }}
        >
          <img src="/7.jpg" className="img-fluid" alt="Slide" style={{ width: "40%" }} />

          {/* Bandeau principal */}
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
      OUTILS & RESSOURCES
    </h2>
  </div>
</div>


          {/* Section Outils disponibles */}
          <div className="container about" style={containerStyle}>
            <div className="row content">
              <div className="col-lg-6">
                <div id="outils"></div>
                <h1>OUTILS DISPONIBLES</h1>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0"></div>
              <p>
                Nous mettons à votre disposition plusieurs outils pratiques pour vous accompagner
                dans la gestion de la santé et de la sécurité au travail :
              </p>
              <ul>
                {["Tableaux de bord", "Logiciels de gestion des incidents"].map((item, index) => (
                  <li key={index}>
                    <i className="ri-check-double-line"></i> {item}
                  </li>
                ))}
              </ul>
            </div>
            <br />
            <br />
          </div>

          {/* Section Ressources téléchargeables */}
          <div className="container about" style={containerStyle}>
            <div className="row content">
              <div className="col-lg-6">
                <div id="ressources"></div>
                <h1>RESSOURCES TÉLÉCHARGEABLES</h1>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0"></div>
              <p>
                Vous pouvez télécharger et consulter des documents utiles pour renforcer vos
                pratiques de prévention et de sécurité :
              </p>
              <ul>
                <li>
                  <a href="/docs/checklist.pdf" download>
                    <i className="ri-file-download-line"></i> Check-list de sécurité
                  </a>
                </li>
                <li>
                  <a href="/docs/guide-pratique.pdf" download>
                    <i className="ri-file-download-line"></i> Guide pratique
                  </a>
                </li>
              </ul>
            </div>
            <br />
            <br />
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

export default OutilsRessources;
