import React, { useState } from "react";

const questions = [
  "J'ai des maux de tête, des migraines",
  "J'ai mal au dos",
  "Je me sens tendu",
  "Mon sommeil est perturbé (réveils, insomnies, hypersomnies)",
  "Je suis souvent enrhumé ou grippé",
  "J'ai l'impression de ne jamais avoir le temps de faire les choses",
  "Je me sens fatigué",
  "Les autres m'énervent",
  "Il m'arrive d'oublier des rendez-vous",
  "Je suis angoissé",
  "J'ai du mal à prendre des décisions",
  "Je me sens utilisé par les autres",
  "J'ai l'impression d'avoir trop de choses à gérer en même temps",
  "Je suis irritable",
  "Je ne me sens pas épaulé, pas soutenu",
  "Je suis mal dans ma peau",
  "Je n'ai plus goût à rien",
  "J'ai de l'acné, des problèmes de peau, des petits boutons",
  "Ma tension artérielle est trop élevée ou trop faible",
  "Mon taux de cholestérol est supérieur à la normale",
  "J'ai des palpitations cardiaques",
  "J'ai des troubles digestifs",
  "Je suis impatient",
  "Je suis susceptible",
  "Je suis très exigeant, envers moi-même et les autres",
  "Des doutes m'assaillent",
  "Je ne pense pas que les autres m'aiment vraiment",
  "Je remets au lendemain ce que j'ai à faire",
  "J'égare mes clefs, mes papiers...",
  "J'éprouve de la difficulté à me concentrer",
  "Je laisse brûler mes casseroles",
  "Je suis souvent dans la lune",
  "Je me sens seul",
  "Je fais des erreurs",
  "Je pleure",
  "Je me sens différent des autres",
  "Je panique",
  "Je pense que ma vie n'a pas de sens",
  "Je ne crois plus en rien",
  "Je mange et je grossis",
  "Je ne mange plus, je maigris"
];

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showStressTest, setShowStressTest] = useState(false);
  const [responses, setResponses] = useState(Array(questions.length).fill(0));
  const [candidateInfo, setCandidateInfo] = useState({
    entreprise: "",
    fonction: "",
    nom: "",
    email: ""
  });

  const handleClickForm = () => {
    setShowForm(true);
    setShowStressTest(false);
  };

  const handleClickStressTest = () => {
    setShowStressTest(true);
    setShowForm(false);
  };

  const handleChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = parseInt(value, 10);
    setResponses(newResponses);
  };

  const handleInfoChange = (e) => {
    setCandidateInfo({ ...candidateInfo, [e.target.name]: e.target.value });
  };

  const getScore = () => responses.reduce((acc, val) => acc + val, 0);

  const getResultMessage = () => {
    const score = getScore();
    if (score < 20) return "Tout se passe bien, vous gérez bien votre stress.";
    if (score < 50) return "Votre niveau de stress est acceptable, restez vigilant.";
    if (score < 70) return "Attention, vous êtes excessivement tendu.";
    if (score < 100) return "Votre score est alarmant, prenez soin de vous !";
    return "DANGER : Prenez une pause et consultez un professionnel !";
  };

  return (
    <div>
      {/* ======= Breadcrumbs ======= */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Evaluer gratuitement votre entreprise</h2>
            <ol>
              <li><a href="/">Accueil</a></li>
              <li>EVALUER VOTRE ENTREPRISE</li>
            </ol>
          </div>
        </div>
      </section>
      {/* End Breadcrumbs */}

      {/* ======= Landing Page Introduction ======= */}
      <div className="landing-intro">
        <h1>Protégez la santé de vos employés</h1>
        <p>Notre cabinet vous aide à évaluer et prévenir les risques professionnels dans votre entreprise.</p>
        <p className="fst-italic">
          L’évaluation des risques professionnels constitue l’outil ultime pour la maîtrise des risques...
        </p>
        <button className="btn-primary" onClick={handleClickForm}>Demandez une consultation gratuite</button>
        <button className="btn-secondary" onClick={handleClickStressTest}>Faites le test de stress</button>
      </div>

      {/* ======= Formulaire de contact ======= */}
      {showForm && (
        <div className="form-container">
          <h2>Demandez une consultation gratuite</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="entreprise">Nom de l'entreprise</label>
              <input type="text" id="entreprise" name="entreprise" required onChange={handleInfoChange} />
            </div>

            <div className="form-group">
              <label htmlFor="fonction">Fonction</label>
              <input type="text" id="fonction" name="fonction" required onChange={handleInfoChange} />
            </div>

            <div className="form-group">
              <label htmlFor="nom">Nom</label>
              <input type="text" id="nom" name="nom" required onChange={handleInfoChange} />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required onChange={handleInfoChange} />
            </div>

            <button type="submit" className="btn-primary">Envoyer</button>
          </form>
        </div>
      )}

      {/* ======= Test de stress ======= */}
      {showStressTest && (
        <div className="stress-test-container">
          <h2>Testez votre niveau de stress</h2>
          <div className="info-section">
            <input type="text" name="entreprise" placeholder="Nom de l'entreprise" onChange={handleInfoChange} />
            <input type="text" name="fonction" placeholder="Fonction" onChange={handleInfoChange} />
            <input type="text" name="nom" placeholder="Nom" onChange={handleInfoChange} />
            <input type="email" name="email" placeholder="Email" onChange={handleInfoChange} />
          </div>

          {questions.map((question, index) => (
            <div key={index} className="question">
              <label>{question}</label>
              <select value={responses[index]} onChange={(e) => handleChange(index, e.target.value)}>
                <option value="0">Jamais</option>
                <option value="1">Parfois</option>
                <option value="2">Assez souvent</option>
                <option value="3">Très souvent</option>
                <option value="4">Tout le temps</option>
              </select>
            </div>
          ))}

          <div className="result-section">
            <h3>Score total : {getScore()}</h3>
            <p>{getResultMessage()}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;