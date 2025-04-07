import React from "react";

const QuestionsAnswers = () => {
  // Liste des questions et réponses
  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <section id="breadcrumbs" className="breadcrumbs" style={{ backgroundColor: "#fff" }}>
        <div style={{ width: "100%" }}>
          <div className="d-flex justify-content-between align-items-center" style={{ width: "100%", flexDirection: "column" }}>
            <img src="assets/img/slide/5.jpg" className="img-fluid" alt="FAQ" style={{ width: "30%" }} />
            <div className="container-fluid" style={{ backgroundColor: "#d94261", height: "15vh" }}>
              <div>
                <h2 style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}>FOIRE AUX QUESTIONS</h2>
              </div>
            </div>
          </div>

          {/* Liste des questions/réponses */}
          <div className="container about" id="about" style={styles.container}>
            <Question
              title="Est-ce que mon entreprise est concernée par la prévention des risques professionnels ?"
              content="Quel que soit votre domaine d’activité, la taille de votre entreprise, rejoignez-nous..."
            />

            <Question
              title="Est-ce qu’investir dans ce domaine est bénéfique pour mon entreprise ?"
              content="Tout employeur doit assurer un service de santé au travail..."
              list={[
                "Le service médical autonome",
                "Le service médical interentreprises (Art 43.1 du code du travail ivoirien)",
              ]}
              italic="Pour protéger la vie et la santé des salariés..."
              note="Votre obligation est la protection de la santé physique et mentale de vos salariés..."
            />

            <Question
              title="Quelle est la franchise annuelle à payer et quels en sont les bénéfices ?"
              content="Notre équipe vous accompagne à initier une analyse des risques professionnelles de votre entreprise..."
              list={[
                "La mise en place de l’équipe d’analyse des risques professionnels.",
                "Conception des outils de collecte des informations.",
                "Identifications des dangers.",
                "Définition des niveaux d’exposition et des niveaux de gravité.",
                "Proposition des actions préventives et correctives.",
                "Hiérarchisation des mesures préventives.",
              ]}
            />

            <Question
              title="Comment organiser les visites médicales pour mes travailleurs ?"
              content="Face à des atteintes à la santé des travailleurs affectés à certains postes de travail..."
            />

            <Question
              title="Comment organiser les formations pour mes travailleurs ?"
              content="Nous réalisons les visites médicales prescrites par le code du travail ivoirien..."
              list={[
                "La visite médicale d’embauche",
                "La visite médicale périodique",
                "La visite médicale de reprise",
                "Les visites médicales à la demande",
              ]}
              italic="Vous pouvez adhérer à notre centre médical d’entreprises..."
            />

            <Question
              title="Un travailleur en CDD doit-il refaire une visite médicale s’il passe en CDI ?"
              content="La formation est essentielle dans toute démarche d’amélioration des conditions de travail..."
            />

            <Question
              title="Est-ce que je peux demander une visite médicale spéciale pour un travailleur ?"
              list={[
                "Documents de gestion des accidents du travail et des maladies professionnelles",
                "Code du travail",
                "Liste des maladies professionnelles",
              ]}
            />

            <Question
              title="Dans quel cas dois-je demander une visite médicale de reprise ?"
              list={[
                "Documents de gestion des accidents du travail et des maladies professionnelles",
                "Code du travail",
                "Liste des maladies professionnelles",
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

// Composant Question pour simplifier la réutilisation des sections
const Question = ({ title, content, list, italic, note }) => {
  return (
    <div className="container about" style={styles.container}>
      <div className="row content">
        <div className="col-lg-12">
          <h1>{title}</h1>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0"></div>
        {content && <p>{content}</p>}
        {list && (
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <i className="ri-check-double-line"></i> {item}
              </li>
            ))}
          </ul>
        )}
        {italic && <p className="fst-italic">{italic}</p>}
        {note && <p className="text-danger">{note}</p>}
      </div>
    </div>
  );
};

// Styles pour éviter la répétition des CSS en inline
const styles = {
  container: {
    backgroundColor: "#fff",
    marginTop: "-2%",
    borderRadius: "15px",
    padding: "20px",
  },
};


export default QuestionsAnswers;
