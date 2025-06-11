import React, { useState, useEffect } from 'react';
import './Chatbot.css';  // Assure-toi d'ajouter les styles supplémentaires

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { user: 'bot', text: "Bonjour! Comment puis-je vous aider aujourd'hui?" },
  ]);
  const [loading, setLoading] = useState(false); // Ajouter un état de chargement

  // Gérer l'envoi des messages
  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    // Afficher le message de l'utilisateur
    setMessages([...messages, { user: 'user', text: input }]);
    setInput('');
    setLoading(true); // Commence le chargement

    // Simuler une réponse dynamique du bot
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { user: 'bot', text: `Vous avez dit : "${input}"` }, // Exemple simple
      ]);
      setLoading(false); // Arrêter le chargement
    }, 1000); // Simuler un délai pour la réponse
  };

  return (
    <div>
      {/* Bouton d'activation du chatbot */}
      <button
        className="chatbot-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Fermer Chatbot' : 'En ligne'}
      </button>

      {/* Chatbot UI */}
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>Assistance Virtuel</span>
            <button
              className="chatbot-close-btn"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.user === 'user' ? 'user-msg' : 'bot-msg'}
              >
                {msg.text}
              </div>
            ))}
            {loading && <div className="loading">...</div>}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Tapez votre message..."
            />
            <button onClick={handleSendMessage}>Envoyer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
