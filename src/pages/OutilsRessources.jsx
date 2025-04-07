import React from "react";

const OutilsRessources = () => {
    return (
      <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
          <h2>Outils & Ressources</h2>
            <ol>
              <li><a href="/">Home</a></li>
              <li>Outils Ressources</li>
            </ol>
          </div>
        </div>
      </section>
      <div>
      <h3>Outils disponibles</h3>
      <ul>
        <li>Tableaux de bord</li>
        <li>Logiciels de gestion des incidents</li>
      </ul>
      <h3>Ressources téléchargeables</h3>
      <ul>
        <li><a href="/docs/checklist.pdf" download>Check-list de sécurité</a></li>
        <li><a href="/docs/guide-pratique.pdf" download>Guide pratique</a></li>
      </ul>
      </div>
      </main>
    );
};

export default OutilsRessources;