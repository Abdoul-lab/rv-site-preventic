import { useState, useRef, useEffect } from "react";

const styles = {
  chatButton: {
    position: "fixed",
    bottom: 40,
    right: 5,
    zIndex: 1100,
    backgroundColor: "#10B981",
    border: "none",
    borderRadius: "50%",
    width: 56,
    height: 56,
    color: "white",
    fontSize: 28,
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(16,185,129,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.3s ease",
    animation: "pulse 2s infinite ease-in-out",
  },
  container: {
    position: "fixed",
    bottom: 90,
    right: 20,
    width: "90%",
    maxWidth: 380,
    maxHeight: 600,
    borderRadius: 16,
    overflow: "hidden",
    boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
    backgroundColor: "#fff",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    display: "flex",
    flexDirection: "column",
    zIndex: 1050,
    border: "1px solid #e5e7eb",
  },
  header: {
    margin: 0,
    padding: "16px 20px",
    background: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    color: "white",
    fontSize: "1.1rem",
    fontWeight: "600",
    textAlign: "center",
  },
  chatBox: {
    flex: 1,
    padding: "16px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxHeight: "300px",
    backgroundColor: "#f9fafb",
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
    backgroundColor: "#10B981",
    color: "white",
    border: "none",
    borderRadius: 12,
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 4px rgba(16,185,129,0.3)",
  },
  formLink: {
    display: "inline-block",
    backgroundColor: "#10B981",
    color: "white",
    padding: "12px 20px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "all 0.2s ease",
    boxShadow: "0 2px 8px rgba(16,185,129,0.3)",
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

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text:
        "👋 Bonjour et bienvenue sur Preventic‑Afric ! Je suis **Docta** 🩺, votre assistante virtuelle santé & sécurité au travail 👷‍♂️👩‍⚕️. Pour commencer, êtes-vous :\n• Personne morale (Entreprise/Association)\n• Personne physique (Employeur/Salarié)",
    },
  ]);
  const [form, setForm] = useState({});
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatRef = useRef();

  const questionFlow = {
  company_type: {
    key: "company_type",
    text: "Merci. Vous êtes :",
    type: "select",
    options: [
      "Personne morale (Entreprise/Association)",
      "Personne physique (Employeur/Salarié)",
    ],
    next: (form) =>
      form.company_type === "Personne morale (Entreprise/Association)"
        ? "company_name"
        : "contact_name_physique",
  },

  // Branche A – Personne morale
  company_name: {
    key: "company_name",
    text: "🏢 Quel est le nom de votre structure ?",
    type: "text",
    next: "contact_name",
  },
  contact_name: {
    key: "contact_name",
    text: "👤 Nom de la personne contact SST ?",
    type: "text",
    next: "email",
  },

  // Branche B – Personne physique
  contact_name_physique: {
    key: "contact_name_physique",
    text: "👤 Votre nom complet ?",
    type: "text",
    next: "email",
  },

  // Partie commune
  email: {
    key: "email",
    text: "📧 Adresse email professionnelle ?",
    type: "text",
    next: "phone",
  },
  phone: {
    key: "phone",
    text: "📞 Numéro de téléphone ?",
    type: "text",
    next: "activity_description",
  },
  activity_description: {
    key: "activity_description",
    text: "🔧 Décrivez l’activité principale.",
    type: "text",
    next: "risk_description",
  },
  risk_description: {
    key: "risk_description",
    text: "⚠️ Quels risques professionnels ?",
    type: "text",
    next: "expectations",
  },
  expectations: {
    key: "expectations",
    text: "🎯 Vos attentes concernant notre accompagnement ?",
    type: "text",
    next: null,
  },
};

  const currentKey = Object.keys(form).length === 0 ? "company_type" : Object.keys(form).slice(-1)[0];
  const nextKey = questionFlow[currentKey]?.next?.(form);

  const googleFormURL =
    `https://docs.google.com/forms/d/e/1FAIpQLSd9zN7FIho6zAO1M4xItpdIsWfZAk1xVEFC-GdltGkzUC1rUw/viewform?usp=pp_url` +
    `&entry.181157747=${encodeURIComponent(form.company_type || "")}` +
    `&entry.641769345=${encodeURIComponent(form.company_name || "")}` +
    `&entry.1755862499=${encodeURIComponent(form.contact_name || "")}` +
    `&entry.1545390454=${encodeURIComponent(form.email || "")}` +
    `&entry.1424481645=${encodeURIComponent(form.phone || "")}` +
    `&entry.194442737=${encodeURIComponent(form.activity_description || "")}` +
    `&entry.417358079=${encodeURIComponent(form.risk_description || "")}` +
    `&entry.1920548947=${encodeURIComponent(form.expectations || "")}`;

  const handleSubmit = (e) => {
    e.preventDefault();
    const q = questionFlow[currentKey];
    setMessages(prev => [...prev, { sender: "user", text: input }]);
    setForm(prev => ({ ...prev, [q.key]: input }));
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (nextKey) {
        setMessages(prev => [...prev, { sender: "bot", text: questionFlow[nextKey].text }]);
      } else {
        setMessages(prev => [
          ...prev,
          { sender: "bot", text: "Merci pour vos réponses ! 🎉" },
          {
            sender: "bot",
            text: (
              <a href={googleFormURL} target="_blank" rel="noopener noreferrer" style={styles.formLink}>
                📋 Voir mon formulaire Google pré-rempli
              </a>
            ),
          },
        ]);
      }
    }, 800);
  };

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <>
      <button onClick={() => setOpen(!open)} style={styles.chatButton}>
        {open ? "×" : "💬"}
      </button>
      {open && (
        <div style={styles.container}>
          <div style={styles.header}>👩‍💼Docta – Préventic Afric 🩺</div>
          <div style={styles.chatBox} ref={chatRef}>
            {messages.map((m, i) => (
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
            {loading && <div style={styles.message}>✍️ Docta écrit...</div>}
          </div>
          {!loading && nextKey && (
            <form onSubmit={handleSubmit} style={styles.form}>
              {questionFlow[nextKey].type === "select" ? (
                <select
                  style={styles.select}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  required
                >
                  <option value="">-- Choisissez --</option>
                  {questionFlow[nextKey].options.map((opt, i) => (
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
                />
              )}
              <button style={styles.button} type="submit">
                Envoyer
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;
