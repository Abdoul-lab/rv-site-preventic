import React, { useState, useEffect } from "react";

const questions = [
  "J'ai des maux de tête, des migraines.",
  "J'ai mal au dos.",
  "Je me sens tendu.",
  "Mon sommeil est perturbé (réveils, insomnies, hypersomnies).",
  "Je suis souvent enrhumé ou grippé.",
  "J'ai l'impression de ne jamais avoir le temps de faire les choses.",
  "Je me sens fatigué.",
  "Les autres m'énervent.",
  "Il m'arrive d'oublier des rendez-vous.",
  "Je suis angoissé.",
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

function StressModal() {
  const [responses, setResponses] = useState(() =>
    questions.map(() => "0")
  );
  const [formData, setFormData] = useState({
    companyName: "",
    profession: "",
    email: "",
    fullName: ""
  });
  const [result, setResult] = useState(null);
  const [submitClicked, setSubmitClicked] = useState(false);

  // Fix focus quand la modale est fermée (évite aria-hidden avec un descendant focusé)
  useEffect(() => {
    const modalEl = document.getElementById("stressModal");
    if (!modalEl) return;

    const handleHidden = () => {
      if (document.activeElement) {
        document.activeElement.blur(); // enlève focus du bouton Fermer
      }
      // Si la modale a été ouverte par un bouton, on remet le focus dessus
      const triggerBtn = document.querySelector('[data-bs-target="#stressModal"]');
      if (triggerBtn) triggerBtn.focus();
    };

    modalEl.addEventListener("hidden.bs.modal", handleHidden);
    return () => {
      modalEl.removeEventListener("hidden.bs.modal", handleHidden);
    };
  }, []);

  // Met à jour la réponse d'une question
  const handleResponseChange = (index, value) => {
    const newResponses = [...responses];
    newResponses[index] = value;
    setResponses(newResponses);
  };

  // Met à jour les champs texte du formulaire
  const handleInputChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const score = responses.reduce((acc, cur) => acc + parseInt(cur, 10), 0);

    let message = "";
    let color = "";

    if (score < 20) {
      message = "Tout se passe pour le mieux, vous gérez bien votre stress.";
      color = "green";
    } else if (score < 50) {
      message = "Votre niveau de stress est acceptable. Restez vigilant.";
      color = "orange";
    } else if (score < 70) {
      message = "Attention, vous êtes tendu. Il est temps d'identifier les causes.";
      color = "yellow";
    } else if (score < 100) {
      message = "Votre niveau de stress est préoccupant. Prenez soin de vous.";
      color = "red";
    } else {
      message = "DANGER ! Votre santé est en jeu. Changez de mode de vie immédiatement.";
      color = "darkred";
    }

    setResult({ score, message, color });
    setSubmitClicked(true);

    // Envoi des données
    fetch("https://preventic-afric.com/api/save_response.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entreprise: formData.companyName,
        fonction: formData.profession,
        nom: formData.fullName,
        email: formData.email,
        score,
        responses: message
      }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message || "Réponse enregistrée"))
      .catch((err) => console.error("Erreur:", err));
  };

  // Fermer modal et reset formulaire
  const handleClose = () => {
    const modalEl = document.getElementById("stressModal");
    const modal = window.bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();

    setResponses(questions.map(() => "0"));
    setFormData({
      companyName: "",
      profession: "",
      email: "",
      fullName: ""
    });
    setResult(null);
    setSubmitClicked(false);
  };

  return (
    <>
      <div
        className="modal fade"
        id="stressModal"
        tabIndex="-1"
        aria-labelledby="stressModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-scrollable">
          <div
            className="modal-content"
            style={{ backgroundColor: "#f0f0f0" }}
          >
            <div className="modal-header">
              <h5 className="modal-title" id="stressModalLabel">
                Évaluez votre niveau de stress
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Fermer"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <h6 style={{ color: "#ff6347" }}>
                TROP DE CHOSES ÉCHAPPENT À VOTRE CONTRÔLE !
              </h6>
              <p>Faites l’autoévaluation de votre niveau de stress.</p>
              <p>
                <em>
                  Inspiré de "Utiliser le stress pour réussir sa vie" – Isabelle
                  Filliozat.
                </em>
              </p>

              <form id="stressForm" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="companyName" className="form-label">
                    <strong>Nom de l'entreprise</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="profession" className="form-label">
                    <strong>Profession</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="profession"
                    required
                    value={formData.profession}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <strong>Email</strong>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    <strong>Nom et prénom</strong>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />
                </div>

                <p>
                  <strong>Répondez selon votre ressenti :</strong>
                </p>
                <p style={{ color: "#32cd32" }}>
                  <em>jamais | parfois | assez souvent | très souvent | tout le temps</em>
                </p>

                {questions.map((question, index) => (
                  <div className="mb-3" key={index}>
                    <label className="form-label">
                      {index + 1}. {question}
                    </label>
                    <select
                      className="form-select select-dark"
                      required
                      value={responses[index]}
                      onChange={(e) =>
                        handleResponseChange(index, e.target.value)
                      }
                    >
                      <option value="0">Jamais</option>
                      <option value="1">Parfois</option>
                      <option value="2">Assez souvent</option>
                      <option value="3">Très souvent</option>
                      <option value="4">Tout le temps</option>
                    </select>
                  </div>
                ))}

                <button
                  type={submitClicked ? "button" : "submit"}
                  className={`btn mt-3 ${
                    submitClicked ? "btn-danger" : "btn-primary"
                  }`}
                  onClick={submitClicked ? handleClose : undefined}
                >
                  {submitClicked ? "Fermer" : "Soumettre"}
                </button>
              </form>

              {result && (
                <div
                  id="result"
                  className="mt-4"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    borderRadius: 5,
                    textAlign: "center",
                    color: result.color,
                    backgroundColor: "#fff",
                    padding: 10,
                    border: "1px solid #ddd",
                  }}
                >
                  <strong>Score : </strong> {result.score} <br />
                  <strong>Analyse : </strong> {result.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .select-dark { background-color: white; border: 1px solid #ccc; color: black; }
        .select-dark option { color: black; }
      `}</style>
    </>
  );
}

export default StressModal;
