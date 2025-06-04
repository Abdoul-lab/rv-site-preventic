import React from 'react';

const teamMembers = [
  {
    name: "Dr BROU N’Dri",
    role: "Consultant Formateur / Directeur Associé",
    competence: "Médecin du travail / Certifié ISO 45001 Lead Implementer",
    image: "src/assets/img/team/team-1.jpg",
  },
  {
    name: "Dr VE Sandrine",
    role: "Médecin vacataire",
    competence: "Médecin du travail / Médecin urgentiste",
    image: "src/assets/img/team/team-2.jpg",
  },
  {
    name: "Dr MANI Paule",
    role: "Médecin vacataire",
    competence: "Médecin du travail",
    image: "src/assets/img/team/team-3.jpg",
  },
  {
    name: "Dr TIEMOU Léonard",
    role: "Médecin vacataire",
    competence: "Médecin Psychiatre / DESS santé au travail",
    image: "src/assets/img/team/team-4.jpg",
  },
  {
    name: "Mr OBLOU Arthur",
    role: "Infirmier permanent",
    competence: "Infirmier diplômé d’état",
    image: "src/assets/img/team/team-5.jpg",
  },
  {
    name: "Mr YEBOUA Koffi",
    role: "Infirmier vacataire",
    competence: "Infirmier diplômé d’état",
    image: "src/assets/img/team/team-6.jpg",
  },
  {
    name: "Mr ANGOUA Francois",
    role: "Infirmier vacataire",
    competence: "Infirmier diplômé d’état",
    image: "src/assets/img/team/team-7.jpg",
  },
  {
    name: "Mr YEBOUE Perre",
    role: "Responsable admin et financier",
    competence: "Comptable",
    image: "src/assets/img/team/team-8.jpg",
  },
  {
    name: "Mlle KADJO Armelle",
    role: "Communication clientèle",
    competence: "Secrétaire",
    image: "src/assets/img/team/team-9.jpg",
  },
];

const TeamMember = ({ name, role, competence, image }) => (
  <div className="col-lg-6 mt-2">
    <div className="member d-flex align-items-start">
      <div className="pic">
        <img src={image} className="img-fluid" alt={name} />
      </div>
      <div className="member-info">
        <h4>{name}</h4>
        <span>{role}</span>
        <p>{competence}</p>
        <div className="social">
          <a href="#"><i className="ri-twitter-fill"></i></a>
          <a href="#"><i className="ri-facebook-fill"></i></a>
          <a href="#"><i className="ri-instagram-fill"></i></a>
          <a href="#"><i className="ri-linkedin-box-fill"></i></a>
        </div>
      </div>
    </div>
  </div>
);

const Values = () => {
  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>À propos</h2>
            <ol>
              <li><a href="/">Accueil</a></li>
              <li>À propos</li>
            </ol>
          </div>
        </div>
      </section>

      {/* ======= Histoire ======= */}
      <section className="about container">
        <div className="section">
          <h3>Histoire de l'entreprise</h3>
        </div>
        <p>
          Notre histoire se confond avec l’ambition d’aider toutes les organisations à avoir une croissance soutenue grâce à des ressources humaines en bonne santé, disponibles et motivées.
        </p>

        <div className="section mt-5">
          <h3>Notre vision</h3>
        </div>
        <p>
          Aider à créer des conditions de travail sûres et sécurisantes, contribuer à bâtir une équipe en bonne santé, accompagner pour obtenir une croissance soutenue.
        </p>

        <div className="section mt-5">
          <h3>Nos valeurs</h3>
        </div>
        <ul>
          <li><strong>LA RESPONSABILITÉ :</strong> Nous assumons la responsabilité des conséquences de nos décisions, actions et comportements pour préserver les intérêts de nos clients.</li>
          <li><strong>LA CONFIANCE :</strong> Nous travaillons à satisfaire les attentes de nos clients, à rester disponibles et à construire une relation durable de confiance.</li>
          <li><strong>L’ENGAGEMENT :</strong> Notre engagement à protéger la ressource la plus importante de toute entreprise, ses hommes, est notre boussole.</li>
          <li><strong>L’ÉCOUTE :</strong> Écouter, comprendre, accompagner nos clients à construire des entreprises en croissance continue grâce à des travailleurs motivés et en bonne santé.</li>
        </ul>
        <section id="team" className="team">
        <div className="container"></div>
        <div className="section">
            <h3>Notre Équipe</h3>
            
          </div><p>Présentation des membres clés avec leurs qualifications et expériences.</p>
          <div className="row">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
          
      </section>

      {/* ======= Certifications ======= */}
      <section className="certifications container">
        <div className="section">
          <h3>Certifications et accréditations</h3>
        </div>
        <p>
          <strong>Preventic Afric</strong> est un centre médical reconnu par le ministère de la santé sous le numéro :
          <br />
          <em>N°0778/2025/MSHPCMU/DGSHP/ DEPPS/ DIR/SDGAESP/aan</em>
        </p>
        <p>
          Il est également un cabinet de formation agréé par le Fonds de Développement de la Formation Professionnelle (FDFP) dans les domaines suivants :
        </p>
        <ul>
          <li>Conditions de travail et ergonomie</li>
          <li>Protection de l’environnement et écologie</li>
          <li>Spécialités plurivalentes de service aux personnes</li>
        </ul>
      </section>
      </section>
    </main>
  );
};

export default Values;
