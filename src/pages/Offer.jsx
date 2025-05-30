import React from 'react';

const Offer = () => {
  return (
    <main id="main">
      {/* ======= Breadcrumbs ======= */}
      <section id="breadcrumbs" className="breadcrumbs" style={{ backgroundColor: '#fff' }}>
        <div style={{ width: '100%' }}>
          <div className="d-flex justify-content-between align-items-center" style={{ width: '100%', flexDirection: 'column' }}>
            <img
              src="src/assets/img/slide/5.jpg"
              className="img-fluid"
              alt=""
              style={{ width: '30%' }}
            />
            <div className="container-fluid" style={{ backgroundColor: '#d94261', height: '15vh' }}>
              <div>
                <h2 style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>NOS OFFRES DE SERVICE</h2>
              </div>
            </div>

            <div
              className="container about"
              id="about"
              style={{
                backgroundColor: '#fff',
                marginTop: '-2%',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
                borderBottomLeftRadius: '15px',
                borderBottomRightRadius: '15px',
              }}
            >
              <div className="row content">
                <div className="col-lg-6">
                  <div id="medicale"></div>
                  <h1>LES VISITES MEDICALES</h1>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0"></div>
                <p className="fst-italic">
                  Les visites médicales d’embauche. Les visites médicales périodiques. Les visites médicales de reprises après accidents ou maladies ayant entraîné une absence prolongée. Les visites médicales à la demande de l’employeur ou du travailleur. Notre offre de service dans le cadre des visites médicales est fonction du besoin du client. Notre équipe est outillée pour réaliser les visites médicales sur site quel que soit la situation géographique et l’effectif de l’entreprise. Notre réseau de partenaires nous permet d’intervenir partout avec pour objectif essentiel réduire les pertes de temps liés à la réalisation.
                </p><br />
              </div><br /><br />
            </div>
            
            <div
              className="container about"
              id="about"
              style={{
                backgroundColor: '#fff',
                marginTop: '-2%',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
                borderBottomLeftRadius: '15px',
                borderBottomRightRadius: '15px',
              }}
            >
              <div className="row content">
                <div className="col-lg-6">
                  <div id="soins"></div>
                  <h1>LES SOINS MEDICAUX</h1>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0"></div>
                <p className="fst-italic">
                  Toutes les entreprises ne disposant pas de service médical autonome peuvent adhérer à notre centre médical d’entreprises. Nous recevons les travailleurs des entreprises pendant les heures de travail et réduisons le temps perdu en consultation externe. Notre centre médical d’entreprise est ouvert du lundi au vendredi de 8h00 à 16h30. Une équipe médicale composée de médecins du travail, d’infirmiers, de techniciens de laboratoire est disponible pendant ces heures.
                </p><br />
              </div><br />
            <br />
            </div>

            
            <div
              className="container about"
              id="about"
              style={{
                backgroundColor: '#fff',
                marginTop: '-2%',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
                borderBottomLeftRadius: '15px',
                borderBottomRightRadius: '15px',
              }}
            >
              <div className="row content">
                <div className="col-lg-8">
                  <div id="assistance"></div>
                  <h1>L’ASSISTANCE ET LE CONSEIL</h1>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0"></div>
                <p className="fst-italic">
                  Notre équipe de spécialistes dans les domaines de prévention vous accompagne dans la réalisation des activités ci-dessous :
                </p>

                <ul>
                  <li><i className="ri-check-double-line"></i> L’analyse des risques professionnels</li>
                  <p className="fst-italic">
                  PREVENTIC AFRIC dispose d’une équipe pluridisciplinaire capable d’aider les entreprises de toutes tailles et de tous secteurs à analyser les risques auxquels leurs employés sont exposés dans le cadre de leurs activités professionnelles. Toutes les tâches routinières de même que celles qui sont réalisées de façon exceptionnelle doivent faire l’objet d’une analyse.  Cette activité se révèle comme le cœur de toute démarche visant à réduire les atteintes à la santé des travailleurs et à créer des conditions de travail sûr et sécurisant pour la ressource la plus importante des entreprises. A terme, chaque travailleur devrait capable d’analyser un travail à effectuer, identifier les dangers qui y sont liés, les risques pour la santé qui en découlent et les moyens de prévention adaptés.  L’analyse des risques impose les étapes suivantes :
                  </p>
                
                  <ol>
                {[
                  "La définition du travail à effectuer",
                  "La détermination des tâches élémentaires",
                  "L’identification des dangers",
                  "Le repérage des actions préventives"
                ].map((item, index) => (
                <li key={index}>
                <strong>{index + 1}.</strong> {item}
                <br />
                </li>
                ))}
                </ol>

                  <li><i className="ri-check-double-line"></i> L’étude de postes de travail</li>
                  <p className="fst-italic">
                    Il s’agit d’une intervention visant un aménagement d’une situation de travail en vue de l’adapter au mieux à l’activité des opérateurs. L’étude de poste de travail prend en compte :
                  </p>
                  <ol>
                {[
                  "les caractéristiques techniques",
                  "les contraintes organisationnelles",
                  "les facteurs humains au poste de travail",
                  
                ].map((item, index) => (
                <li key={index}>
                <strong>{index + 1}.</strong> {item}
                <br />
                </li>
                ))}
                </ol>

                  <li><i className="ri-check-double-line"></i> Le mesurage des niveaux de nuisances</li>
                  <p className="fst-italic">
                    De nombreuses nuisances présentes dans l’environnement de travail sont responsables d’atteinte à la santé des travailleurs et de maladies professionnelles. Parmi ces nuisances, on peut citer le bruit, la chaleur, l’éclairage, les produits chimiques, la poussière….
                  </p>

                  <li><i className="ri-check-double-line"></i> L’évaluation des risques professionnels</li>
                  
  <p className="fst-italic">
    L’évaluation des risques professionnels constitue l’outil ultime pour la maîtrise des risques professionnels, la construction d’une équipe en bonne santé, motivée et disponible. L’évaluation des risques professionnels est un instrument important dans le management de la santé et la sécurité des travailleurs qui apparaît aujourd’hui comme un outil de gouvernance nécessaire aux performances de l’entreprise.
  </p>
  <p className="fst-italic">
    L’évaluation des risques professionnels constitue l’un des principaux leviers de progrès dans l’entreprise sur le plan humain et économique.
  </p>
  <p className="fst-italic">
    Pour aider votre entreprise à réaliser son évaluation des risques professionnels, une équipe composite comprenant les ressources de votre entreprise et les professionnels de PREVENTIC AFRIC sera mise en place. Elle aura à cœur de passer ces différentes étapes que sont :
  </p>
  <ol>
    <li>1 - La définition des unités de travail</li>
    <li>2 - Le repérage des dangers</li>
    <li>3 - La détermination des risques pour la santé</li>
    <li>4 - La hiérarchisation des risques</li>
    <li>5 - La détermination d’un plan d’action</li>
  </ol>

                  <li><i className="ri-check-double-line"></i> L’aménagement de postes de travail</li>
                  <p className="fst-italic">
                  Notre assistance vous permet d’initier une démarche de management de santé et la sécurité au travail conduisant à avoir un milieu de travail sûr et sécurisant. Dans certaines situations, il apparait nécessaire d’aménager un poste de travail pour l’adapter à l’état de santé d’un travailleur. Il peut s’agir d’un employé victime d’un handicap à la suite d’un accident du travail ou d’une maladie professionnelle. Un poste de travail peut être aménagé dans d’autres situations telles qu’une grossesse, une maladie ou un accident non lié au travail mais qui empêche l’employé d’exercer ses activités professionnelles dans les conditions habituelles. Quelques soit la situation, notre équipe vous accompagne à aider vos travailleurs à continuer à apporter leur expertise à votre entreprise et ne pas se sentir un poids pour les autres
                  </p>

                  <li><i className="ri-check-double-line"></i> La mise en place et le fonctionnement du comité de santé et sécurité au travail</li>
                  <p className="fst-italic">
                  L’adhésion des travailleurs aux actions mises en place pour la protection de leur santé et leur sécurité au travail est essentielle pour la réussite de tout programme de prévention. Notre assistance inclus la mise en place et l’accompagnement du comité de santé et sécurité au travail de votre entreprise qui est l’interlocuteur de l’ensemble de personnel pour les questions de santé et sécurité au travail
                  </p>

                  <li><i className="ri-check-double-line"></i> La gestion des prestations sociales</li>
                  <p className="fst-italic">
                  Vous ne disposez pas de ressources humaines pour gérer les aspects liés au départ à la retraite, aux allocations familiales, aux prestations à la grossesse, aux accidents du travail…nos assistantes sociales sont à votre disposition
                  </p>
                </ul>
              </div>
            </div>

            <br />
            <br />
            <div
              className="container about"
              id="about"
              style={{
                backgroundColor: '#fff',
                marginTop: '-2%',
                borderTopLeftRadius: '15px',
                borderTopRightRadius: '15px',
                borderBottomLeftRadius: '15px',
                borderBottomRightRadius: '15px',
              }}
            >
              <div className="row content">
                <div className="col-lg-6">
                  <div id="formations"></div>
                  <h1>LA FORMATION</h1>
                </div>
                <div className="col-lg-6 pt-4 pt-lg-0"></div>
                <p className="fst-italic">
                  <ul><li><i>Nos domaines d’habilitation</i></li> </ul>
                </p>
                  <p>
                    Notre cabinet bénéficie d’une habilitation du fonds de développement de la formation professionnelle dans les domaines suivants :
                  </p>
                  <ul>
  {[
    "Ergonomie et condition de travail",
    "Protection de l’environnement et écologie",
    "Spécialités plurivalentes de service aux personnes"
  ].map((item, index) => (
    <li key={index}>
      <i className="ri-check-double-line"></i> {item}
    </li>
  ))}
</ul>

                  <p className="fst-italic">
                    <ul><li><i>Nos séminaires de formation</i></li></ul></p>
                  <p>
                  Un programme annuel de séminaires de formations est établi et mis en ligne. Nous offrons par ailleurs la possibilité de choisir des dates de formations en fonction des disponibilités de l’entreprise et de réaliser ces formations dans leurs locaux.Consulter notre catalogue de formation et renseigner une fiche d’inscription pour vos équipes
                  </p>
                </div>
              </div>

              <br />
              <br />

              <div
                className="container about"
                id="about"
                style={{
                  backgroundColor: '#fff',
                  marginTop: '-2%',
                  borderTopLeftRadius: '15px',
                  borderTopRightRadius: '15px',
                  borderBottomLeftRadius: '15px',
                  borderBottomRightRadius: '15px',
                }}
              >
                <div className="row content">
                  <div className="col-lg-8">
                    <div id="externalisation"></div>
                    <h1>L’EXTERNALISATION DE LA FONCTION SST</h1>
                  </div>
                  <div className="col-lg-6 pt-4 pt-lg-0"></div>
                  <p className="fst-italic">
                    Pour animer la démarche de protection de la santé et la sécurité au travail de votre personnel, vous avez besoin d’une équipe de professionnels...
                  </p>

                  <ul>
  {[
    "Médecins du travail",
    "Infirmiers",
    "Spécialistes en prévention des risques professionnels",
    "Chargé d’hygiène, sécurité et environnement."
  ].map((item, index) => (
    <li key={index}>
      <i className="ri-check-double-line"></i> {item}
    </li>
  ))}
</ul>

                </div>
              </div>
            </div>
          </div>
      </section>
      {/* End Breadcrumbs */}
    </main>
   
  );
};

export default Offer;
