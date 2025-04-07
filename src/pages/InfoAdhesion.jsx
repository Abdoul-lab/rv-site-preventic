import React from "react";

const services = [
  "Le mesurage des niveaux de nuisances (bruit, chaleur, éclairement…)",
  "La réalisation de visites médicales réglementaires (embauche, périodique…)",
  "La réalisation d’examens complémentaires (biologiques, radiologiques…)",
  "Le centre médical d’entreprises (pour les entreprises n’ayant pas de service médical)",
  "L’externalisation des activités médicales (mise à disposition d’équipes médicales)",
  "L’assistance en gestion des prestations familiales",
  "L’étude de postes de travail",
  "L’évaluation des risques professionnels",
  "Mise en place et fonctionnement du comité de santé et sécurité au travail",
  "La formation en santé et sécurité au travail",
];

const Section = ({ title, children }) => (
  <div className="container about" style={sectionStyle}>
    <div className="row content">
      <div className="col-lg-12">
        <h1>{title}</h1>
      </div>
      <div className="col-lg-6 pt-4 pt-lg-0">{children}</div>
    </div>
  </div>
);

const ServiceList = () => (
  <ul>
    {services.map((service, index) => (
      <li key={index}>
        <i className="ri-check-double-line"></i> {service}
      </li>
    ))}
  </ul>
);

const InfoAdhesion = () => {
  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs" style={breadcrumbStyle}>
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center flex-column w-100">
            <img src="assets/img/slide/5.jpg" className="img-fluid" alt="" style={logoStyle} />
            <div className="container-fluid" style={headerStyle}>
              <h2>ESPACE ADHÉRENTS</h2>
            </div>

            <Section title="Les conditions d’adhésion à Preventic-Afric">
              <p>
                Quel que soit votre secteur d’activité, la taille de votre entreprise, nous sommes prêts à vous accompagner.
              </p>
            </Section>

            <Section title="Comment procéder ?">
              <p>
                Il suffit de télécharger, remplir notre fiche d’adhésion et nous l’envoyer à 
                <a href="mailto:preventci.afric@gmail.com"> preventci.afric@gmail.com</a>.
                <br />
                Contactez-nous au <strong>2021006322</strong> ou <strong>0707204845</strong> pour plus d’informations.
              </p>
              <a href="assets/docs/fiche_adhesion.pdf" download className="btn btn-primary">
                📥 Télécharger la fiche d’adhésion
              </a>
            </Section>

            <Section title="Quelle est la suite ?">
              <p>
                Un courrier de confirmation vous sera transmis. Ce courrier précisera les informations sur l’équipe médico-sociale dédiée ainsi que les services dont vous bénéficierez.
              </p>
              <p><strong>Nos offres de service :</strong></p>
              <ServiceList />
            </Section>

            <Section title="Pourquoi nous rejoindre ?">
              <p className="text-danger">
                Preventic Afric vous accompagne dans l’évolution de votre entreprise en vous aidant à être en conformité avec vos obligations en matière de santé et sécurité au travail. Nous contribuons à garantir une équipe en bonne santé et motivée pour l’atteinte de vos objectifs dans un environnement sécurisé.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </main>
  );
};

// Styles en inline pour respecter le design
const breadcrumbStyle = { backgroundColor: "#fff", padding: "20px 0" };
const logoStyle = { width: "30%" };
const headerStyle = { backgroundColor: "#d94261", color: "#fff", textAlign: "center", padding: "20px 0" };
const sectionStyle = { backgroundColor: "#fff", padding: "20px", borderRadius: "15px", marginTop: "-2%" };

export default InfoAdhesion;
