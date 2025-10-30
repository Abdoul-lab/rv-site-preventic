import React, { useState, useEffect, useRef } from "react";

const styles = {
  chatButton: {
    position: "fixed",
    bottom: 50,
    right: 5,
    zIndex: 1100,
    backgroundColor: "linear-gradient(to right, #2563eb, #1e40af, #f97316)", // dégradé de couleur
    border: "none",
    borderRadius: "50%",
    width: 56,
    height: 56,
    color: "#fff",
    fontSize: 28,
    cursor: "pointer",
    boxShadow: "0 4px 6px rgba(0,0,0,0.2)", // bleu
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease",
    animation: "pulse 2s infinite ease-in-out",
  },
  container: {
    position: "fixed",
    bottom: 90,
    right: 20,
    width: "90%",
    maxWidth: 380,
    maxHeight: "80vh",
    minHeight: 350,
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(49, 16, 236, 0.4)", //bleu
    backgroundColor: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
    zIndex: 1050,
    border: "1px solid #ffe0b2", // orange très clair
  },
  header: {
    margin: 0,
    padding: "12px",
    background: "linear-gradient(to right, #2563eb, #1e40af, #f97316)", // couleur dégradée
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "bold",
    textAlign: "center",
  },
  chatBox: {
    flex: 1,
    padding: "16px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    backgroundColor: "#f9fafb",
    minHeight: 120,
    maxHeight: "none", // <-- retire la limite pour laisser le chat s'étendre
  },
  message: {
    padding: "12px 16px",
    maxWidth: "85%",
    wordBreak: "break-word",
    fontSize: "0.95rem",
    lineHeight: 1.5,
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
    animation: "slideIn 0.3s ease-out",
    borderRadius: 12,
    whiteSpace: "pre-line", // <-- ajoute ceci
  },
  form: {
    display: "flex",
    padding: "16px",
    gap: "12px",
    borderTop: "1px solid #e5e7eb",
    alignItems: "center",
    backgroundColor: "white",
  },
  input: {
    flex: 1,
    padding: "12px 16px",
    borderRadius: 12,
    border: "2px solid #e5e7eb",
    fontSize: "1rem",
    outline: "none",
  },
  select: {
    flex: 1,
    padding: "12px 16px",
    borderRadius: 12,
    border: "2px solid #e5e7eb",
    fontSize: "1rem",
    backgroundColor: "white",
    outline: "none",
    appearance: "none",
    cursor: "pointer",
  },
  button: {
    padding: "12px 24px",
    backgroundColor: "linear-gradient(to right, #93c5fd, #60a5fa, #fdba74)", // dégradé plus doux au survol
    color: "white",
    border: "none",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 4px rgba(255,167,38,0.3)", // orange clair
  },
  formLink: {
    display: "inline-block",
    backgroundColor: "#FFA726", // orange clair
    color: "white",
    padding: "12px 20px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 8px rgba(255,167,38,0.3)", // orange clair
  },
  tabBar: {
    display: "flex",
    borderTop: "1px solid #ddd", // orange très clair
    background: "#fff3e0", // orange très très clair
    justifyContent: "space-around",
    alignItems: "center",
  },
  tabButton: {
    flex: 1,
    background: "none",
    border: "none",
    padding: "8px",
    margin: "0 4px",
    fontSize: "1rem",
    fontWeight: 500,
    color: "#000", // orange foncé
    cursor: "pointer",
    transition: "background 0.3s, transform 0.2s",
  },
  tabButtonActive: {
    background: "linear-gradient(to right, #2563eb, #1e40af, #f97316)", // dégradée 
    color: "#fff",
    fontWeight: "bold",
    transform: "scale(1.05)",
  },
  accueilBox: {
    padding: "24px 16px",
    color: "#1976d2", // bleu
    fontSize: "1.05rem",
    lineHeight: 1.7,
  },
  contactBox: {
    background: "#e0f2fe",
    borderRadius: 10,
    padding: "12px 16px",
    marginTop: 16,
    color: "#0369a1",
    fontWeight: 500,
    fontSize: "1rem",
    boxShadow: "0 1px 4px rgba(3,105,161,0.07)",
  },
  rdvBox: {
    padding: 0,
    color: "#1976d2", // bleu
    fontSize: "1.05rem",
    lineHeight: 1.7,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    minHeight: 200,
    background: "none",
  },
  stressShortcut: {
    display: "inline-block",
    margin: "18px 0 0 0",
    padding: "10px 18px",
    background: "#267dffff",
    color: "#fff",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: "1rem",
    textDecoration: "none",
    cursor: "pointer",
    border: "none",
    boxShadow: "0 2px 8px rgba(255,167,38,0.18)",
    transition: "background 0.2s",
  },
};

const styleSheet = document.createElement("style");
styleSheet.textContent += `
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }

  .dot:nth-child(1) { animation-delay: -0.32s; }
  .dot:nth-child(2) { animation-delay: -0.16s; }
  .dot:nth-child(3) { animation-delay: 0s; }

  .chatbox-background::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/logost1.png');
    background-repeat: repeat;
    background-position: top left;
    background-size: 120px auto;
    opacity: 0.05;
    pointer-events: none;
    z-index: 0;
  }
`;
document.head.appendChild(styleSheet);

// Ajout d'une base de scénarios pour l'onglet IA
const iaScenarios = {
  menu: {
    text: `Bonjour 👋 ! 
Comment puis-je vous aider aujourd’hui ?
1️⃣ Formations
2️⃣ Accompagnement entreprises & indépendants
3️⃣ Conseils personnalisés
4️⃣ Prise de rendez-vous
5️⃣ Autres questions

(Tapez le numéro ou le mot-clé correspondant, ou "Menu" à tout moment pour revenir ici.)`,
    options: [
      { keywords: ["1", "formation", "formations"], next: "formations" },
      { keywords: ["2", "accompagnement"], next: "accompagnement" },
      { keywords: ["3", "conseil", "conseils"], next: "conseils" },
      { keywords: ["4", "rdv", "rendez-vous", "prendre rendez-vous"], next: "rdv" },
      { keywords: ["5", "autre", "autres"], next: "faq" },
    ],
  },
  formations: {
    text: `Nous proposons les formations suivantes :

• SST (Sauveteur Secouriste du Travail)
• Sécurité et prévention des risques professionnels
• Secourisme pour particuliers et entreprises

Voulez-vous savoir si elles sont certifiantes ?
1️⃣ Oui 
2️⃣ Non, revenir au menu principal`,
    options: [
      { keywords: ["1", "oui"], next: "formations_certif" },
      { keywords: ["2", "non", "menu", "revenir"], next: "menu" },
    ],
  },
  formations_certif: {
    text: `Oui ✅ ! Toutes nos formations SST et secourisme sont certifiantes et reconnues selon la réglementation en vigueur.

Tapez "Menu" pour revenir au menu principal.`,
    options: [
      { keywords: ["menu"], next: "menu" },
    ],
  },
  accompagnement: {
    text: `Nous proposons un accompagnement personnalisé :

• Analyse des risques sur le lieu de travail
• Mise en place de protocoles de sécurité
• Formation des employés et plan de prévention

Souhaitez-vous savoir si nous intervenons sur site ?
1️⃣ Oui
2️⃣ Non, revenir au menu principal`,
    options: [
      { keywords: ["1", "oui"], next: "accompagnement_site" },
      { keywords: ["2", "non", "menu", "revenir"], next: "menu" },
    ],
  },
  accompagnement_site: {
    text: `Oui, nos experts peuvent se déplacer dans vos locaux pour former vos équipes et évaluer vos installations.

Tapez "Menu" pour revenir au menu principal.`,
    options: [
      { keywords: ["menu"], next: "menu" },
    ],
  },
  conseils: {
    text: `Nous offrons des conseils personnalisés pour :

• Particuliers
• Indépendants
• Associations

Souhaitez-vous prendre rendez-vous pour un conseil personnalisé ?
1️⃣ Oui
2️⃣ Non, revenir au menu principal`,
    options: [
      { keywords: ["1", "oui"], next: "rdv" },
      { keywords: ["2", "non", "menu", "revenir"], next: "menu" },
    ],
  },
  rdv: {
    text: `Vous pouvez prendre rendez-vous via :
1️⃣ Formulaire en ligne
2️⃣ Appel téléphonique
3️⃣ E-mail

Nos horaires : Lundi à Vendredi, 8h – 18h.
Besoin d’une intervention urgente ou spécifique ? Nous pouvons nous adapter.

Tapez "Menu" pour revenir au menu principal.`,
    options: [
      { keywords: ["menu"], next: "menu" },
    ],
  },
  faq: {
    text: `Voici les questions fréquentes :
1️⃣ Quels types d’entreprises accompagnez-vous ?
2️⃣ Vos services sont-ils disponibles partout en Afrique ?
3️⃣ Combien coûtent vos formations ?
4️⃣ Revenir au menu principal

(Tapez le numéro ou le mot-clé correspondant)`,
    options: [
      { keywords: ["1", "type", "entreprise"], next: "faq_entreprises" },
      { keywords: ["2", "afrique", "disponible"], next: "faq_afrique" },
      { keywords: ["3", "prix", "tarif", "coût", "cout"], next: "faq_tarifs" },
      { keywords: ["4", "menu", "revenir"], next: "menu" },
    ],
  },
  faq_entreprises: {
    text: `Nous accompagnons toutes tailles d’entreprises : PME, grandes entreprises, secteurs industrie, BTP, services, commerces.

Tapez "Menu" pour revenir au menu principal.`,
    options: [
      { keywords: ["menu"], next: "menu" },
    ],
  },
  faq_afrique: {
    text: `Nos services sont disponibles sur toute la Côte d'Ivoire et nous pouvons intervenir dans certains pays voisins selon les besoins.

Tapez "Menu" pour revenir au menu principal.`,
    options: [
      { keywords: ["menu"], next: "menu" },
    ],
  },
  faq_tarifs: {
    text: `Nos tarifs dépendent de la formation, de sa durée et du nombre de participants. Nous réalisons des devis gratuits personnalisés.

Tapez "Menu" pour revenir au menu principal.`,
    options: [
      { keywords: ["menu"], next: "menu" },
    ],
  },
};

function findIaScenario(userInput, currentScenarioKey = "menu") {
  const input = userInput.trim().toLowerCase();
  // Navigation rapide
  if (input === "menu") return "menu";
  // Recherche dans les options du scénario courant
  const scenario = iaScenarios[currentScenarioKey];
  if (scenario && scenario.options) {
    for (const opt of scenario.options) {
      if (opt.keywords.some((kw) => input.includes(kw))) {
        return opt.next;
      }
    }
  }
  // Recherche globale sur tous les scénarios (fallback)
  for (const key in iaScenarios) {
    if (
      iaScenarios[key].options &&
      iaScenarios[key].options.some((opt) =>
        opt.keywords.some((kw) => input.includes(kw))
      )
    ) {
      return key;
    }
  }
  // Si rien trouvé, rester sur le scénario courant
  return currentScenarioKey;
}

const notificationSoundUrl = "./assets/sounds/chatbot-notification.mp3";

const Chatbot = ({ autoOpen = true }) => { 
  const [open, setOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  useEffect(() => {
    if (autoOpen && !hasAutoOpened) {
      setOpen(true);
      setHasAutoOpened(true);
      const audio = new Audio(notificationSoundUrl);
      audio.play().catch(() => {});
    }
  }, [autoOpen, hasAutoOpened]);

  const handleToggle = () => {
    setOpen(!open);
  };
  const [tab, setTab] = useState("accueil");
  const [rdvMessages, setRdvMessages] = useState([
    {
      sender: "bot",
      text:
        "👋 Pour prendre rendez-vous, merci de répondre aux questions suivantes.",
    },
  ]);
  const [form, setForm] = useState({});
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentKey, setCurrentKey] = useState("company_type");
  const chatRef = useRef();
  const inputRef = useRef();

  const questionFlow = {
    company_type: {
      key: "company_type",
      text: "Merci. Vous êtes :",
      type: "select",
      options: [
        "Personne morale (Entreprise/Association)",
        "Employé d'entreprise",
        "Travailleur indépendant/auto-entrepreneur",
        "Étudiant/stagiaire",
        "Association/collectivité",
        "Demandeur d'emploi",
        "Patient",
        "Autres",
      ],
      next: (form) => {
        switch (form.company_type) {
          case "Personne morale (Entreprise)":
            return "company_activity";
          case "Employé d'entreprise":
            return "employee_company";
          case "Travailleur indépendant/auto-entrepreneur":
            return "independant_name";
          case "Étudiant/stagiaire":
            return "student_name";
          case "Association/collectivité":
            return "collectivity_your_name";
          case "Demandeur d'emploi":
            return "jobseeker_name";
          default:
            return null;
        }
      },
    },

    // Personne morale (Entreprise)
    company_activity: {
      key: "company_activity",
      text: "💼 Domaine d'activités *",
      type: "text",
      next: "company_staff",
    },
    company_staff: {
      key: "company_staff",
      text: "🔢 Effectif du personnel *",
      type: "text",
      next: "company_location",
    },
    company_location: {
      key: "company_location",
      text: "📍Situation géographique *",
      type: "text",
      next: "company_referent", // saute les questions à supprimer
    },
    company_referent: {
      key: "company_referent",
      text: "👔 Nom du référent sécurité / RH : *",
      type: "text",
      next: "company_phone",
    },
    company_phone: {
      key: "company_phone",
      text: "☎️Téléphone *",
      type: "text",
      next: "company_email",
    },
    company_email: {
      key: "company_email",
      text: "📩 E-mail *",
      type: "text",
      next: null,
    },

    // Employé d'entreprise
    employee_company: {
      key: "employee_company",
      text: "Nom de votre entreprise : *",
      type: "text",
      next: "employee_job",
    },
    employee_job: {
      key: "employee_job",
      text: "Poste occupé : *",
      type: "text",
      next: "employee_address",
    },
    employee_address: {
      key: "employee_address",
      text: "Adresse de votre lieu de Travail *",
      type: "text",
      next: "employee_training",
    },
    employee_training: {
      key: "employee_training",
      text: "Quelle formation sécurité souhaitez-vous faire ? *",
      type: "text",
      next: "employee_name",
    },
    employee_name: {
      key: "employee_name",
      text: "Nom et prénoms : *",
      type: "text",
      next: "employee_email",
    },
    employee_email: {
      key: "employee_email",
      text: "Email *",
      type: "text",
      next: "employee_contact",
    },
    employee_contact: {
      key: "employee_contact",
      text: "Contact *",
      type: "text",
      next: null,
    },

    // Travailleur indépendant/auto-entrepreneur
    independant_name: {
      key: "independant_name",
      text: "Nom et prénoms *",
      type: "text",
      next: "independant_activity",
    },
    independant_activity: {
      key: "independant_activity",
      text: "💼 Domaine d'activités *",
      type: "text",
      next: "independant_function",
    },
    independant_function: {
      key: "independant_function",
      text: "Fonction d'exercice *",
      type: "text",
      next: "independant_email",
    },
    independant_email: {
      key: "independant_email",
      text: "Email *",
      type: "text",
      next: "independant_contact",
    },
    independant_contact: {
      key: "independant_contact",
      text: "Contact *",
      type: "text",
      next: "independant_certif",
    },
    independant_certif: {
      key: "independant_certif",
      text: "Formation(s) certifiante(s) ou service(s) souhaité(s) (optionnelle)",
      type: "text",
      next: null,
    },

    // Étudiant/stagiaire
    student_name: {
      key: "student_name",
      text: "Nom et prénoms : *",
      type: "text",
      next: "student_school",
    },
    student_school: {
      key: "student_school",
      text: "Etablissement de formation : *",
      type: "text",
      next: "student_field",
    },
    student_field: {
      key: "student_field",
      text: "Filière / diplôme préparé : *",
      type: "text",
      next: "student_certif",
    },
    student_certif: {
      key: "student_certif",
      text: "Formation certifiante souhaitée : *",
      type: "text",
      next: "student_email",
    },
    student_email: {
      key: "student_email",
      text: "Email *",
      type: "text",
      next: "student_phone",
    },
    student_phone: {
      key: "student_phone",
      text: "Téléphone *",
      type: "text",
      next: null,
    },

    // Association/collectivité
    collectivity_your_name: {
      key: "collectivity_your_name",
      text: "Votre Nom: *",
      type: "text",
      next: "collectivity_status",
    },
    collectivity_status: {
      key: "collectivity_status",
      text: "Quelle est votre statut ? (Collectivités, Association, Autre) *",
      type: "text",
      next: "collectivity_activity",
    },
    collectivity_activity: {
      key: "collectivity_activity",
      text: "Type d'activité *",
      type: "text",
      next: "collectivity_responsible",
    },
    collectivity_responsible: {
      key: "collectivity_responsible",
      text: "Nom du responsable *",
      type: "text",
      next: "collectivity_email",
    },
    collectivity_email: {
      key: "collectivity_email",
      text: "Email *",
      type: "text",
      next: "collectivity_phone",
    },
    collectivity_phone: {
      key: "collectivity_phone",
      text: "Téléphone *",
      type: "text",
      next: null,
    },

    // Demandeur d'emploi
    jobseeker_name: {
      key: "jobseeker_name",
      text: "Nom et prénoms *",
      type: "text",
      next: "jobseeker_address",
    },
    jobseeker_address: {
      key: "jobseeker_address",
      text: "Adresse: *",
      type: "text",
      next: "jobseeker_registered",
    },
    jobseeker_registered: {
      key: "jobseeker_registered",
      text: "Etes vous inscrit à EMPLOI JEUNE (OUI/NON) *",
      type: "text",
      next: "jobseeker_certif",
    },
    jobseeker_certif: {
      key: "jobseeker_certif",
      text: "Quelle formation certifiante souhaitez-vous ?",
      type: "text",
      next: "jobseeker_phone",
    },
    jobseeker_phone: {
      key: "jobseeker_phone",
      text: "Téléphone : *",
      type: "text",
      next: null,
    },
  };

  const getNextKey = (key, form) => {
    const next = questionFlow[key]?.next;
    if (typeof next === "function") return next(form);
    return next;
  };

  const nextKey = getNextKey(currentKey, form);

  // Fonction utilitaire pour récupérer la bonne valeur selon le parcours
  const getFormValue = (keys, form) => {
    for (const key of keys) {
      if (form[key]) return form[key];
    }
    return "";
  };

  const googleFormURL =
    "https://docs.google.com/forms/d/e/1FAIpQLSd9zN7FIho6zAO1M4xItpdIsWfZAk1xVEFC-GdltGkzUC1rUw/viewform?usp=pp_url" +
    // 1. Type de personne
    `&entry.181157747=${encodeURIComponent(form.company_type || "")}` +
    // 2. Nom de la structure OU nom de l'entreprise OU nom/prénoms selon le cas
    `&entry.641769345=${encodeURIComponent(
      getFormValue(
        [
          "company_name", // Personne morale
          "company_name_employee", // Employé d'entreprise
          "independant_name", // Indépendant
          "student_name", // Étudiant
          "collectivity_name", // Association/Collectivité
          "jobseeker_name" // Demandeur d'emploi
        ],
        form
      )
    )}` +
    // 3. Domaine d'activités (Personne morale, Indépendant)
    `&entry.1755862499=${encodeURIComponent(
      getFormValue(
        [
          "activity_sector", // Personne morale, Indépendant
          "activity_sector_collectivity" // Collectivité
        ],
        form
      )
    )}` +
    // 4. Fonction/Poste occupé (Employé, Indépendant, Personne morale)
    `&entry.270584642=${encodeURIComponent(
      getFormValue(
        [
          "job_title", // Employé
          "job_title_independant", // Indépendant
          "job_title_company" // Personne morale
        ],
        form
      )
    )}` +
    // 5. Email principal
    `&entry.1545390454=${encodeURIComponent(form.email || "")}` +
    // 6. Téléphone principal
    `&entry.1424481645=${encodeURIComponent(form.phone || "")}` +
    // 7. Formation(s) sécurité souhaitée(s) (Employé, Indépendant, Étudiant)
    `&entry.1482113409=${encodeURIComponent(
      getFormValue(
        [
          "security_training", // Employé
          "certified_training", // Indépendant
          "student_certified_training" // Étudiant
        ],
        form
      )
    )}` +
    // 8. Domaine d'activité (Personne morale, Indépendant)
    `&entry.1269560995=${encodeURIComponent(
      getFormValue(
        [
          "activity_sector", // Personne morale, Indépendant
          "activity_sector_collectivity" // Collectivité
        ],
        form
      )
    )}` +
    // 9. Effectif du personnel (Personne morale)
    `&entry.714306128=${encodeURIComponent(form.employee_count || "")}` +
    // 10. Situation géographique (Personne morale)
    `&entry.194442737=${encodeURIComponent(form.location || "")}` +
    // 11. Nom du référent sécurité/RH (Personne morale)
    `&entry.417358079=${encodeURIComponent(form.security_manager || "")}` +
    // 12. Téléphone du référent (Personne morale)
    `&entry.1166246265=${encodeURIComponent(form.security_manager_phone || "")}` +
    // 13. Email du référent (Personne morale)
    `&entry.1760094184=${encodeURIComponent(form.security_manager_email || "")}` +
    // 14. Vos attentes (tous profils)
    `&entry.1920548947=${encodeURIComponent(form.expectations || "")}` +
    // 15. Poste occupé bis (Employé)
    `&entry.1411701645=${encodeURIComponent(form.job_title || "")}` +
    // 16. Adresse du lieu de travail (Employé)
    `&entry.1627892006=${encodeURIComponent(form.work_address || "")}` +
    // 17. Formation(s) sécurité bis (Employé)
    `&entry.261073137=${encodeURIComponent(form.security_training || "")}` +
    // 18. Nom et prénoms (Employé)
    `&entry.1816104853=${encodeURIComponent(form.employee_name || "")}` +
    // 19. Email bis (Employé)
    `&entry.1837218615=${encodeURIComponent(form.email || "")}` +
    // 20. Téléphone bis (Employé)
    `&entry.1847729909=${encodeURIComponent(form.phone || "")}` +
    // 21. Nom du demandeur d'emploi
    `&entry.2048237219=${encodeURIComponent(form.jobseeker_name || "")}` +
    // 22. Adresse du demandeur d'emploi
    `&entry.1921828812=${encodeURIComponent(form.jobseeker_address || "")}` +
    // 23. Inscrit à Emploi Jeune (Demandeur d'emploi)
    `&entry.542749698=${encodeURIComponent(form.jobseeker_registered || "")}` +
    // 24. Statut (Collectivité/Association)
    `&entry.320284862=${encodeURIComponent(form.collectivity_status || "")}` +
    // 25. Téléphone Collectivité/Association
    `&entry.1712825493=${encodeURIComponent(form.collectivity_phone || "")}` +
    // 26. Nom Collectivité/Association
    `&entry.2122088468=${encodeURIComponent(form.collectivity_name || "")}` +
    // 27. Nom établissement étudiant
    `&entry.1222652367=${encodeURIComponent(form.school_name || "")}` +
    // 28. Filière étudiant
    `&entry.865151035=${encodeURIComponent(form.student_field || "")}` +
    // 29. Rôle Collectivité/Association
    `&entry.165963106=${encodeURIComponent(form.collectivity_role || "")}` +
    // 30. Email Collectivité/Association
    `&entry.880038320=${encodeURIComponent(form.collectivity_email || "")}` +
    // 31. Téléphone Collectivité/Association bis
    `&entry.1261605611=${encodeURIComponent(form.collectivity_phone2 || "")}` +
    // 32. Nom Collectivité/Association bis
    `&entry.1320041847=${encodeURIComponent(form.collectivity_name2 || "")}` +
    // 33. Type d'activité Collectivité/Association
    `&entry.362573173=${encodeURIComponent(form.collectivity_activity_type || "")}` +
    // 34. Collecte des taxes (Collectivité)
    `&entry.1386546609=${encodeURIComponent(form.tax_collection || "")}` +
    // 35. Nom du responsable Collectivité/Association
    `&entry.1692880648=${encodeURIComponent(form.collectivity_manager || "")}` +
    // 36. Email du responsable Collectivité/Association
    `&entry.1203091785=${encodeURIComponent(form.collectivity_manager_email || "")}` +
    // 37. Téléphone du responsable Collectivité/Association
    `&entry.1123126847=${encodeURIComponent(form.collectivity_manager_phone || "")}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = questionFlow[currentKey];
    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    setForm((prev) => ({ ...prev, [q.key]: input }));
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (nextKey) {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: questionFlow[nextKey].text },
        ]);
        setCurrentKey(nextKey);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Merci pour vos réponses ! 🎉" },
          {
            sender: "bot",
            text: (
              <a
                href={googleFormURL}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.formLink}
              >
                📋 Veuillez confirmer vos informations
              </a>
            ),
          },
        ]);
      }
    }, 800);
  };

  // Fonction pour gérer la soumission du formulaire RDV
  function handleRdvSubmit(e) {
    e.preventDefault();
    const q = questionFlow[currentKey];
    setRdvMessages((prev) => [...prev, { sender: "user", text: input }]);
    setForm((prev) => ({ ...prev, [q.key]: input }));
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      const nextKey = getNextKey(currentKey, { ...form, [q.key]: input });
      if (nextKey) {
        setRdvMessages((prev) => [
          ...prev,
          { sender: "bot", text: questionFlow[nextKey].text },
        ]);
        setCurrentKey(nextKey);
      } else {
        setRdvMessages((prev) => [
          ...prev,
          { sender: "bot", text: "Merci pour vos réponses ! 🎉" },
          {
            sender: "bot",
            text: (
              <a
                href={googleFormURL}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.formLink}
              >
                📋 Veuillez confirmer vos infos
              </a>
            ),
          },
        ]);
      }
    }, 800);
  }

  // Nouvelle logique pour l'onglet IA (simulateur IA simple)
  const [iaScenario, setIaScenario] = useState("menu");
  const [iaMessages, setIaMessages] = useState([
    { sender: "bot", text: iaScenarios.menu.text },
  ]);
  const [iaInput, setIaInput] = useState("");
  const [iaLoading, setIaLoading] = useState(false);
  const iaChatRef = useRef();
  const iaInputRef = useRef();

  // IA conversationnelle enrichie
  const handleIaSubmit = (e) => {
    e.preventDefault();
    const userMsg = iaInput;
    setIaMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setIaInput("");
    setIaLoading(true);
    setTimeout(() => {
      // Trouver le scénario suivant
      const nextScenario = findIaScenario(userMsg, iaScenario);
      setIaScenario(nextScenario);
      setIaLoading(false);
      setIaMessages((prev) => [
        ...prev,
        { sender: "bot", text: iaScenarios[nextScenario].text },
      ]);
    }, 700);
  };

  useEffect(() => {
    if (tab === "ia") {
      setIaScenario("menu");
      setIaMessages([{ sender: "bot", text: iaScenarios.menu.text }]);
      setIaInput("");
    }
  }, [tab]);

  useEffect(() => {
    if (tab === "ia" && iaChatRef.current) {
      iaChatRef.current.scrollTop = iaChatRef.current.scrollHeight;
    }
    if (tab === "ia" && iaInputRef.current) {
      iaInputRef.current.focus();
    }
  }, [iaMessages, iaLoading, tab]);

  useEffect(() => {
    if (tab === "rdv" && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [rdvMessages, loading, tab]);

  // --- Effet de saisie pour l'accueil ---
  const accueilLines = [
    "",
    "Bonjour et Bienvenue sur Preventic-Afric! Nous sommes spécialisés dans la prévention santé & sécurité au travail.",
    "",
    "Nos services :",
    "• Visites médicales (visites d'embauche, périodiques, de reprise...)",
    "• Surveillance des conditions de travail",
    "• Formations",
    "• Assistance et conseils",
    "",
    "Contact :",
    "📞 +225 07 07 20 48 45",
    "✉️ info@preventic-afric.com",
    "🌐 preventic-afric.com",
    "",
    "Cliquez sur le bouton ci-dessous 👇 pour auto-évaluer votre stress😰",
  ];
  const [accueilDisplayedLines, setAccueilDisplayedLines] = useState([]);
  const accueilScrollRef = useRef();

  // Effet de saisie pour l'accueil
  useEffect(() => {
    if (tab === "accueil") {
      setAccueilDisplayedLines([]);
      let i = 0;
      const interval = setInterval(() => {
        setAccueilDisplayedLines((prev) => [
          ...prev,
          accueilLines[i],
        ]);
        i++;
        if (i >= accueilLines.length) clearInterval(interval);
      }, 350);
      return () => clearInterval(interval);
    }
  }, [tab]);

  // Scroll automatique sur l'accueil
  useEffect(() => {
    if (tab === "accueil" && accueilScrollRef.current) {
      accueilScrollRef.current.scrollTop = accueilScrollRef.current.scrollHeight;
    }
  }, [accueilDisplayedLines, tab]);

  // Contenu Accueil
  const openStressModal = () => {
    const modalEl = document.getElementById("stressModal");
    if (modalEl && window.bootstrap) {
      const modal = window.bootstrap.Modal.getOrCreateInstance(modalEl);
      modal.show();
    }
  };

  // Affichage progressif dans accueilContent
  const accueilContent = (
    <div style={{ ...styles.accueilBox, height: "100%", overflowY: "auto" }}>
      {accueilDisplayedLines.map((line, idx) =>
        line === "" ? (
          <br key={idx} />
        ) : (
          <div key={idx}>{line}</div>
        )
      )}
      {accueilDisplayedLines.length === accueilLines.length && (
        <button
  onClick={openStressModal}
  type="button"
  style={{
    padding: "12px 25px",
    fontWeight: "bold",
    color: "#fff",
    background: "linear-gradient(to right, #2563eb, #1e40af, #f97316)", // dégradé
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    transition: "transform 0.2s, opacity 0.3s",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
>
  📝 Auto-évaluer mon stress 😰
</button>

      )}
    </div>
  );

  // Contenu Prendre RDV (Google Forms) = ancienne logique conversationnelle
  const rdvContent = (
    <div style={styles.rdvBox}>
      <div
        style={{
          ...styles.chatBox,
          marginBottom: 0,
        }}
      >
        {rdvMessages.map((m, i) => (
          <div
            key={i}
            style={{
              ...styles.message,
              backgroundColor: m.sender === "bot" ? "#ecfdf5" : "#d1fae5",
              alignSelf: m.sender === "bot" ? "flex-start" : "flex-end",
            }}
          >
            {m.text}
          </div>
        ))}
        {loading && <div style={styles.message}>✍️...</div>}
      </div>
      {!loading && currentKey && (
        <form onSubmit={handleRdvSubmit} style={styles.form}>
          {questionFlow[currentKey].type === "select" ? (
            <select
              style={styles.select}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              required
              ref={inputRef}
            >
              <option value="">-- Choisissez --</option>
              {questionFlow[currentKey].options.map((opt, i) => (
                <option key={i} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              style={styles.input}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Votre réponse..."
              required
              ref={inputRef}
            />
          )}
          <button style={styles.button} type="submit">
            Envoyer
          </button>
        </form>
      )}
    </div>
  );

  // Onglet IA enrichi
  const iaContent = (
    <div style={styles.chatBox} ref={iaChatRef}>
      {iaMessages.map((m, i) => (
        <div
          key={i}
          style={{
            ...styles.message,
            backgroundColor: m.sender === "bot" ? "#ecfdf5" : "#d1fae5",
            alignSelf: m.sender === "bot" ? "flex-start" : "flex-end",
          }}
        >
          {m.text}
        </div>
      ))}
      {iaLoading && <div style={styles.message}>✍️...</div>}
      {!iaLoading && (
        <form onSubmit={handleIaSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="text"
            value={iaInput}
            onChange={(e) => setIaInput(e.target.value)}
            placeholder="Tapez un numéro, un mot-clé ou votre question..."
            required
            ref={iaInputRef}
          />
          <button style={styles.button} type="submit">
            Envoyer
          </button>
        </form>
      )}
    </div>
  );

  // Modifiez la structure du return pour que la zone d'affichage (accueilContent, iaContent, rdvContent) prenne toute la hauteur disponible
  // et que la barre d'onglets reste bien collée en bas du chat, jamais au-dessus du contenu.

  return (
    <>
      <button onClick={handleToggle} style={styles.chatButton}>
        {open ? "×" : "💬"}
      </button>
      {open && (
        <div style={styles.container}>
          <div style={styles.header}>🦺 Préventic Afric 🩺</div>
          <div style={{ flex: 1, minHeight: 200, background: "#f9fafb", display: "flex", flexDirection: "column" }}>
            <div
              style={{ flex: 1, overflow: "auto" }}
              ref={tab === "accueil" ? accueilScrollRef : tab === "rdv" ? chatRef : null}
            >
              {tab === "accueil" && accueilContent}
              {tab === "ia" && iaContent}
              {tab === "rdv" && rdvContent}
            </div>
            <div style={styles.tabBar}>
              <button
                style={{
                  ...styles.tabButton,
                  ...(tab === "accueil" ? styles.tabButtonActive : {}),
                }}
                onClick={() => setTab("accueil")}
              >
                Accueil
              </button>
              <button
                style={{
                  ...styles.tabButton,
                  ...(tab === "ia" ? styles.tabButtonActive : {}),
                }}
                onClick={() => setTab("ia")}
              >
                Conversation
              </button>
              <button
                style={{
                  ...styles.tabButton,
                  ...(tab === "rdv" ? styles.tabButtonActive : {}),
                }}
                onClick={() => setTab("rdv")}
              >
                Prendre RDV
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
