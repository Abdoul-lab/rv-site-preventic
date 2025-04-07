import React from "react";

const Adhesion = () => {
  return (
    <section id="breadcrumbs" className="breadcrumbs" style={{ backgroundColor: "#fff" }}>
      <div style={{ width: "100%" }}>
        <div className="d-flex justify-content-between align-items-center" style={{ width: "100%", flexDirection: "column" }}>
          <img src="src/assets/img/slide/5.jpg" className="img-fluid" alt="" style={{ width: "30%" }} />
          <div className="container-fluid" style={{ backgroundColor: "#d94261", height: "15vh" }}>
            <div>
              <h2 style={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}>ESPACE EMPLOYEURS</h2>
            </div>
          </div>

          {/* Contenu principal */}
          <div className="container about" style={containerStyle}>
            <div className="row content">
              <div className="col-lg-8">
                <div id="adherer"></div>
                <h1>ADHERER A NOS ACTIVITES</h1>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0"></div>
              <p>
              Quel que soit votre domaine d’activité, la taille de votre entreprise, rejoignez-nous. Nous avons des solutions personnalisées et adaptées à vos besoins en matière de santé et sécurité au travail.Nos experts sont disponibles pour vous rencontrer dans votre entreprise et vous écouter. Adhérez à notre service médical d’entreprises et accéder à tous les services qu’offre un service de santé au travail à un coût mutualisé ! Pour votre service médical autonome, nous avons les ressources humaines qu’il faut pour accompagner votre entreprise dans sa démarche de santé et sécurité au travail.
             </p> <br/> 
            </div>
            <br/><br/>
          </div>

          {/* Section Responsabilités */}
          <div className="container about" style={containerStyle}>
            <div className="row content">
              <div className="col-lg-8">
                <div id="responsabilites"></div>
                <h1>QUELLES SONT VOS RESPONSABILITÉS</h1>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0"></div>
              <p>
                Tout employeur doit assurer un service de santé au travail au profit des travailleurs qu'il emploie. Ce service
                de santé au travail existe sous deux formes :
              </p>
              <ul>
                <li><i className="ri-check-double-line"></i> Le service médical autonome</li>
                <li><i className="ri-check-double-line"></i> Le service médical interentreprises (Art 43.1 du code du travail ivoirien)</li>
              </ul>
              <p className="fst-italic">
                Pour protéger la vie et la santé des salariés, l'employeur est tenu de prendre toutes les mesures utiles adaptées
                aux conditions d'exploitation de l'entreprise. Il doit notamment aménager les installations et régler la marche du travail de manière â préserver le mieux possible les salariés des accidents et maladies.  (Art. 41.2 du code du travail ivoirien) 
              </p>
              <p>Tout employeur est tenu d'organiser une formation en matière d'hygiène et de sècurité au bénéfice des salariés nouvellement embauchés et de ceux qui changent de poste de travail ou de technique. (Art. 41.3. du code du travail ivoirien)</p>
                <p className="text-danger">Votre obligation est la protection de la santé physique et mentale de vos salariés, ainsi que de leur sécurité au travail. Vous devez être capable de démontrer que vous avez mis en œuvre une politique de prévention cohérente. Ne pas exposer vos salariés aux risques professionnels, c’est agir en prévention primaire.
                </p>  <br />
            </div>
            <br/><br/>
          </div>

          {/* Section Risques professionnels */}
          <div className="container about" id="about" style={containerStyle}>
            <div className="row content">
              <div className="col-lg-8">
                <div id="risques"></div>
                <h1>EVALUER VOS RISQUES PROFESSIONNELS</h1>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0"></div>
              <p>
                Notre équipe vous accompagne dans l’analyse des risques professionnels de votre entreprise. Cette démarche est l’outil par excellence pour la maitrise des conditions de travail et la protection de la santé et la sécurité de vos travailleurs. Nous proposons les étapes suivantes dans la réalisation de cette démarche :
              </p>
              <ul>
                {[
                  "La mise en place de l’équipe d’analyse des risques professionnels.",
                  "Conception des outils de collecte des informations.",
                  "Identification des dangers.",
                  "Définition des niveaux d’exposition et des niveaux de gravité.",
                  "Proposition des actions préventives et correctives.",
                  "Hiérarchisation des mesures préventives."
                ].map((item, index) => (
                  <li key={index}><i className="ri-check-double-line"></i> {item}</li>
                ))}
              </ul>
            </div>
            <br/><br/>
          </div>

          {/* Section Études des postes de travail */}
          <div className="container about" style={containerStyle}>
            <div className="row content">
              <div className="col-lg-8">
                <div id="etudes"></div>
                <h1>DEMANDER DES ETUDES POUR VOS POSTES DE TRAVAIL</h1>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0"></div>
              <p>
              Face à des atteintes à la santé des travailleurs affectés à certains postes de travail, il peut être nécessaire d’étudier ces postes de travail afin d’en identifier les facteurs qui affectent la santé des travailleurs. Nos experts procèderont à l’étude de ces postes de travail et mettrons en place des actions visant à aménager le poste, à former les travailleurs afin de réduire les problèmes de santé antérieurs
              </p> <br/>
            </div>
            <br/><br/>
          </div>

          {/* Section Surveillance de la santé */}
          <div className="container about" style={containerStyle}>
            <div className="row content">
              <div className="col-lg-7">
                <div id="embauche"></div>
                <h1>SURVEILLEZ LA SANTE DE VOS TRAVAILLEURS</h1>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0"></div>
              <p>
                        Nous réalisons les visites médicales prescrites par le code du travail ivoirien qui permettent de garantir des ressources humaines disponibles et en bonne santé                      </p>
                        <ul>
                        {[
    {
      title: "La visite médicale d’embauche :",
      description: "Tout travailleur candidat à l’embauche bénéficie d’une visite médicale qui permet d’évaluer son état de santé et déterminer l’adaptation de son état au poste de travail à pourvoir. Cette visite médicale comporte un aspect clinique au cabinet du médecin du travail, mais aussi des examens complémentaires (examens radiologiques, biologiques…) qui sont fonction des risques liés au poste de travail à occuper."
    },
    {
      title: "La visite médicale périodique :",
      description: "La visite médicale périodique évalue le maintien de l’état de santé du travailleur en activité et l’adéquation entre cet état et les ses activités professionnelles. La périodicité est fonction des risques d’atteinte à la santé liés au travail."
    },
    {
      title: "La visite médicale de reprise :",
      description: "Cette visite médicale est nécessaire avant la reprise du travail après un accident du travail, une maladie professionnelle, ou tout autre raison de santé ayant entrainée une absence prolongée. Elle peut aboutir à la reprise du travail au poste de poste de travail habituel ou des changements dans le travail tel qu’il était exécuté avant l’absence."
    },
    {
      title: "Les visites médicales à la demande :",
      description: "A la demande du travailleur, du médecin du travail, de l’employeur ou de toute autre partie intéressée, une visite médicale peut être réalisée pour évaluer l’état de santé du travailleur. L’objectif étant de prendre une décision en rapport son maintien à son poste de travail habituel."
    }
  ].map((item, index) => (
    <li key={index}>
      <i className="ri-check-double-line"></i> <strong>{item.title}</strong>
      <p>{item.description}</p>
    </li>
  ))}
  </ul>
                      <p className="fst-italic">
                        Vous pouvez adhérer à notre centre médical d’entreprises dans le cadre de la prise en charge des cas de maladies pendant les heures de travail. Ainsi, si vous ne pouvez pas créer un centre médical dans votre entreprise, vous bénéficier des services de notre centre médical d’entreprises                      
                      </p>
                      <p>Nous pouvons par ailleurs vous accompagner mettre en place votre centre médical autonome répondant aux besoins de votre entreprise

                      </p>
            </div>
            <br/><br/>
          </div>
          <br/>

          {/* Section Formation des travailleurs */}
          <div className="container about" style={containerStyle}>
            <div className="row content">
              <div className="col-lg-7">
                <div id="former"></div>
                <h1>FORMEZ VOS TRAVAILLEURS</h1>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0"></div>
              <p>
              La formation est essentielle dans toute démarche d’amélioration des conditions de travail et protection de la santé et la sécurité des travailleurs. Notre cabinet, habilité pour la formation professionnelle continue dans les domaines de la santé et la sécurité au travail vous accompagne à avoir des travailleurs engagés dans une démarche de prévention des risques professionnels
              </p> <br/>
            </div>
            <br/><br/>
          </div>

          {/* Section Documents utiles */}
          <div className="container about" style={containerStyle}>
            <div className="row content">
              <div className="col-lg-8">
                <h1>QUELQUES DOCUMENTS UTILES</h1>
              </div>
              <div className="col-lg-6 pt-4 pt-lg-0"></div>
              <ul>
                {[
                  "Documents de gestion des accidents du travail et des maladies professionnelles.",
                  "Code du travail.",
                  "Liste des maladies professionnelles."
                ].map((item, index) => (
                  <li key={index}><i className="ri-check-double-line"></i> {item}</li>
                ))}
              </ul>
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

export default Adhesion;
