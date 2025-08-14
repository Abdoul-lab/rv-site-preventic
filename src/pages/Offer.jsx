import React from 'react';

const Offer = () => {
  const sectionContainerStyle = {
    backgroundColor: '#fff',
    marginTop: '-2%',
    borderRadius: '15px',
    padding: '20px'
  };

  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs" style={{ backgroundColor: '#fff' }}>
        <div style={{ width: '100%' }}>
          <div className="d-flex justify-content-between align-items-center flex-column" style={{ width: '100%' }}>
            <img
              src="/5.jpg"
              className="img-fluid"
              alt=""
              style={{ width: '20%'}}
            />
            <div className="container-fluid" style={{ backgroundColor: '#d94261', height: '15vh' }}>
              <div>
                <h2 style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold' }}>
                  NOS OFFRES DE SERVICE
                </h2>
              </div>
            </div>

            <div className="container about mx-auto" style={sectionContainerStyle}>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div id="visites-reglementaires"></div>
                  <h1>Visites médicales reglementaires</h1>
                  <p className="fst-italic">
                    La réalisation de visites médicales répond à l’article 43.2 du code du travail en rapport avec la surveillance médicale des travailleurs. Ainsi, nous organisons les visites médicales suivantes au profit de toute entreprise :
                  </p>
                  <ul className="fst-italic">
                    <li><strong>Visites d’embauche :</strong><br></br>Elles permettent de s’assurer que le travailleur a les aptitudes médicales requises pour le poste à occupe</li>
                    <li><strong>Visites médicales périodiques:</strong><br></br>Ces visites médicales dont la périodicité peut varier en fonction des risques auxquels le travailleur est exposé pendant son travail, servent à s’assurer du maintien de son aptitude à exercer ses activités professionnelles.</li>
                    <li><strong>Visites de reprise:</strong><br></br>Elles sont se font après une absence prolongée</li>
                    <li><strong>Visites occasionnelles:</strong> <br></br>Elles se font à la demande de l’employeur ou du salarié</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="container about mx-auto" style={sectionContainerStyle}>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div id="visites-journalieres"></div>
                  <h1>Visites médicales journalières</h1>
                  <p className="fst-italic">
                    Pour permettre aux travailleurs malades de bénéficier de soins sans interruption du travail, notre service assure des consultations médicales journalières dans nos locaux ou sur le site de l’entreprise.
                  </p>
                </div>
              </div>
            </div>

            <div className="container about mx-auto" style={sectionContainerStyle}>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div id="soins-infirmiers"></div>
                  <h1>Soins infirmiers</h1>
                  <p className="fst-italic">
                    Nous mettons à la disposition des entreprises un personnel infirmier qualifié pour assurer les premiers soins et suivre les pathologies bénignes ou chroniques des travailleurs.
                  </p>
                </div>
              </div>
            </div>

            <div className="container about mx-auto" style={sectionContainerStyle}>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div id="examens-biologiques"></div>
                  <h1>Examens biologiques</h1>
                  <p className="fst-italic">
                    Nous proposons un large éventail d’analyses médicales en partenariat avec des laboratoires agréés. Ces examens peuvent être réalisés sur site ou dans nos centres partenaires.
                  </p>
                </div>
              </div>
            </div>

            <div className="container about mx-auto" style={sectionContainerStyle}>
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div id="assistance-sociale"></div>
                  <h1>Assistance sociale</h1>
                  <p className="fst-italic">
                    Nos assistants sociaux accompagnent les entreprises dans la gestion des prestations sociales (maladie, maternité, accidents du travail, retraite, etc.) et le suivi social des travailleurs.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Offer;