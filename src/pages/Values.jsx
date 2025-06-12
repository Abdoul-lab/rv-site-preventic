import React from 'react';

const teamMembers = [
  {
    name: "Dr BROU N’Dri",
    role: "Consultant Formateur / Directeur Associé",
    competence: "Médecin du travail / Certifié ISO 45001 Lead Implementer",
    image: "/rv-site-preventic/assets/team/team-1.jpg",
  },
  {
    name: "Dr VE Sandrine",
    role: "Médecin vacataire",
    competence: "Médecin du travail / Médecin urgentiste",
    image: "/rv-site-preventic/assets/team/team-2.jpg",
  },
  {
    name: "Dr MANI Paule",
    role: "Médecin vacataire",
    competence: "Médecin du travail",
    image: "/rv-site-preventic/assets/team/team-3.jpg",
  },
  {
    name: "Dr TIEMOU Léonard",
    role: "Médecin vacataire",
    competence: "Médecin Psychiatre / DESS santé au travail",
    image: "/assets/img/team/team-4.jpg",
  },
  {
    name: "Mr OBLOU Arthur",
    role: "Infirmier permanent",
    competence: "Infirmier diplômé d’état",
    image: "/assets/img/team/team-5.jpg",
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
  <div className="col-lg-4 mt-2">
    <div className="member flex align-items-start">
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

const About = () => {
  const sectionStyle = {
    backgroundColor: '#fff',
    marginTop: '-2%',
    borderRadius: '15px',
  };

  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <section id="breadcrumbs" className="breadcrumbs" style={{ backgroundColor: '#fff' }}>
        <div style={{ width: '100%' }}>
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%', flexDirection: 'column' }}>
            <img
              src="src/assets/img/slide/5.jpg"
              className="img-fluid"
              alt="À propos"
              style={{ width: '30%' }}
            />
            <div className="container-fluid" style={{ backgroundColor: '#d94261', height: '15vh' }}>
              <div>
                <h2 style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>À PROPOS</h2>
              </div>
            </div>

            {/* Histoire */}
            <div className="container about" style={sectionStyle}>
              <div className="row content">
                <div className="col-lg-12">
                  <div id="histoire"></div>
                  <h1>Histroire de l'entreprise</h1>
                  <p className="fst-italic">
                    Notre histoire se confond avec l’ambition d’aider toutes les organisations à avoir une croissance soutenue grâce à des ressources humaines en bonne santé, disponibles et motivées.
                  </p>
                </div>
              </div>
              <br /><br />
            </div>

            {/* Vision */}
            <div className="container about" style={sectionStyle}>
              <div className="row content">
                <div className="col-lg-12">
                  <div id="vision"></div>
                  <h1>Notre vision</h1>
                  <p className="fst-italic">
                    Aider à créer des conditions de travail sûres et sécurisantes, contribuer à bâtir une équipe en bonne santé, accompagner pour obtenir une croissance soutenue.
                  </p>
                </div>
              </div>
              <br /><br />
            </div>

            {/* Valeurs */}
            <div className="container about" style={sectionStyle}>
              <div className="row content">
                <div className="col-lg-12">
                  <div id="valeurs"></div>
                  <h1>Nos valeurs</h1>
                  <ul className="fst-italic">
                    <li><strong>La responsabilité :</strong> Nous assumons la responsabilité des conséquences de nos décisions, actions et comportements pour préserver les intérêts de nos clients.</li>
                    <li><strong>La confiance :</strong> Nous travaillons à satisfaire les attentes de nos clients, à rester disponibles et à construire une relation durable de confiance.</li>
                    <li><strong>L’engagement :</strong> Notre engagement à protéger la ressource la plus importante de toute entreprise, ses hommes, est notre boussole.</li>
                    <li><strong>L’écoute :</strong> Écouter, comprendre, accompagner nos clients à construire des entreprises en croissance continue grâce à des travailleurs motivés et en bonne santé.</li>
                  </ul>
                </div>
              </div>
              <br /><br />
            </div>

            {/* Équipe */}
            <div className="container about" style={sectionStyle}>
              <div className="row content">
                <div className="col-lg-12">
                  <div id="equipe"></div>
                  <h1>Notre équipe</h1>
                  <p className="fst-italic">Présentation des membres clés avec leurs qualifications et expériences.</p>
                  <div className="row">
                    {teamMembers.map((member, index) => (
                      <TeamMember key={index} {...member} />
                    ))}
                  </div>
                </div>
              </div>
              <br /><br />
            </div>

            {/* Certifications */}
            <div className="container about" style={sectionStyle}>
              <div className="row content">
                <div className="col-lg-12">
                  <div id="certifications"></div>
                  <h1>Certifications et accréditations</h1>
                  <p className="fst-italic">
                    <strong>Preventic Afric</strong> est un centre médical reconnu par le ministère de la santé sous le numéro :
                    <br />
                    <em>N°0778/2025/MSHPCMU/DGSHP/ DEPPS/ DIR/SDGAESP/aan</em>
                  </p>
                  <p className="fst-italic">
                    Il est également un cabinet de formation agréé par le Fonds de Développement de la Formation Professionnelle (FDFP) dans les domaines suivants :
                  </p>
                  <ul className="fst-italic">
                    <li>Conditions de travail et ergonomie</li>
                    <li>Protection de l’environnement et écologie</li>
                    <li>Spécialités plurivalentes de service aux personnes</li>
                  </ul>
                </div>
              </div>
              <br /><br />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
