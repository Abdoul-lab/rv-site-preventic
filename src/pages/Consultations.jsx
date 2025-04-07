import React from "react";

const Consultations = () => {
    return (
      <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>ESPACE Consultations</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li>Consultations</li>
            </ol>
          </div>
        </div>
      </section>
      <div>
      <h3>Nos services</h3>
      <ul>
        <li>Évaluation des risques</li>
        <li>Audits de sécurité</li>
      </ul>
      <h3>Processus</h3>
      <p>Analyse initiale, visite sur site, rapport et recommandations</p>
      <h3>Demande de consultation</h3>
      <form>
        <input type="text" placeholder="Votre nom" required />
        <input type="email" placeholder="Votre email" required />
        <textarea placeholder="Décrivez votre besoin" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
      </main>
    );
};

export default Consultations;