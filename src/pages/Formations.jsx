import React from "react";

const Formations = () => {
    return (
      <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>ESPACE Formations</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li>Formations</li>
            </ol>
          </div>
        </div>
      </section>
      <div>
        <h3>Modules disponibles</h3>
        <ul>
          <li>Sécurité incendie</li>
          <li>Premiers secours</li>
          <li>Gestion des risques</li>
        </ul>
        <h3>Formats</h3>
        <p>En ligne, en présentiel, sur site</p>
        <h3>Tarifs & Inscriptions</h3>
        <p>Contactez-nous pour un devis personnalisé ou consultez notre formulaire d'inscription.</p>
      </div>
      </main>
    );
};

export default Formations;