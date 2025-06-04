import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import img1 from "../assets/img/slide/IvoirePics6.jpg";
import img2 from "../assets/img/slide/IvoirePics3.jpg";
import img3 from "../assets/img/slide/IvoirePics4.jpg";
import img4 from "../assets/img/slide/IvoirePics5.jpg";
import img5 from "../assets/img/slide/IvoirePics7.jpg";
import LogoMarquee from "../components/marque";

function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container-fluid" style={{ backgroundColor: "#f1ebeb", marginTop: "10%" }}>
      {/* Marquee */}
      <marquee behavior="scroll" direction="left">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfq4yaTSCTlKvHcMLkHFynfpOQCRuOILlboK2I4fDe0P1zbQg/viewform?usp=pp_url"
          style={{ color: "blue", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
          <h2>Inscription ici ←</h2>
        </a>
      </marquee>

      {/* Hero Section */}
      <div className="container">
        <div className="row">
          {/* Carousel */}
          <div className="col-md-6">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {[...Array(6).keys()].map((i) => (
                  <button key={i} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={i}
                    className={i === 0 ? "active" : ""} aria-current={i === 0} aria-label={`Slide ${i + 1}`} />
                ))}
              </div>
              <div className="carousel-inner" style={{ borderRadius: "20px" }}>
                <div className="carousel-item active" data-bs-interval="10000">
                  <video width="100%" controls autoPlay muted>
                    <source src="/rv-site-preventic/assets/prenventic_afric.mp4" type="video/mp4" />
                  </video>
                </div>
                {[img1, img2, img3, img4, img5].map((image, index) => (
                  <div className="carousel-item" key={index} data-bs-interval="3000">
                    <img src={image} className="d-block w-100" alt={`Slide ${index + 2}`} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" />
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="col-md-6">
            <div className="card mt-4">
              <div className="card-body">
                <h5 className="card-title">Protéger les hommes, sécuriser les entreprises</h5>
                <p className="card-text">
                  Créé depuis janvier 2018, Preventic Afric est un cabinet spécialisé en médecine du travail.
                  Son objectif ultime est d’accompagner les entreprises dans la protection de la santé et sécurité
                  de leurs travailleurs. Ces actions aident les entreprises à se conformer aux dispositions de
                  l’article 43.1 du code du travail ivoirien.
                </p>
                {showMore && (
                  <>
                    <p>
                      Contact : Abidjan Treichville, zone 3 Immeuble AIBEF<br />
                      22 BP 1026 Abidjan 22<br />
                      Tél : 2521006322 | Email : info@preventic-afric.com<br />
                      Site web : www.preventic-afiric.com<br />
                      Référent : nbrou4@gmail.com
                    </p>
                    <h6>Nos services principaux :</h6>
                    <ul>
                      <li>Médecine du travail</li>
                      <li>Médecine générale</li>
                      <li>Spécialités médicales</li>
                      <li>Examens complémentaires</li>
                      <li>Formation professionnelle continue</li>
                    </ul>
                  </>
                )}
                <button onClick={() => setShowMore(!showMore)} className="btn btn-primary">
                  {showMore ? "Lire moins" : "Lire la suite"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Témoignages Entreprises */}
      <section className="container">
        <h4 className="text-center mb-3">Ils nous font confiance</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>Entreprise</th>
                <th>Domaine d'activité</th>
                <th>Année</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["OLAM COCOA PROCESSING", "Agro-industrie", "2018"],
                ["OUSTPAN IVOIRE", "Agro-industrie", "2018"],
                ["OLAM IVOIRE", "Agro-industrie", "2019"],
                ["IVOIRE SOFT SERVICES", "Sous-traitance MOT", "2019"],
                ["LIMAK AFRIKA", "Cimenterie", "2021"],
                ["SOLID", "Géomatique", "2022"],
                ["KENDA AFRIQUE", "Transport", "2023"],
                ["SUCDEN CI", "Négoce", "2018"],
                ["CLEMESSY SERVICE", "Entretien indust.", "2019"],
                ["EPSYLYS", "Entretien indust.", "2021"],
                ["MATRA IVOIRE", "Transport logistique", "2019"],
                ["CWT COMMODITIES", "Contrôle qualité", "2021"],
                ["MILLENIUM CHALLENGE", "Service", "2022"],
                ["MATCA", "Assurance", "2021"],
                ["UNIVERSAL PHYTO", "Peste control", "2022"],
                ["PRESTIMEX", "Sous-traitance MOT", "2022"],
                ["LYDIA LUDIC", "Divertissement", "2024"],
                ["SIDIMPRIM", "Imprimerie", "2025"],
              ].map(([ent, domaine, date], i) => (
                <tr key={i}>
                  <td>{ent}</td>
                  <td>{domaine}</td>
                  <td>{date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <LogoMarquee/>
      </section>

      {/* Services Cards */}
      <section id="services" className="services" style={{ backgroundColor: "#f1ebeb" }}>
        <div className="container" style={{ backgroundColor: "#fff", padding: "10px", boxShadow: "0px 5px #888888" }}>
          <div className="row">
            <div className="col-md-3">
              <div className="icon-box">
                <i className="bi bi-briefcase"></i>
                <h4><HashLink smooth to="/adhesion#adherer" style={{ color: "#ee7f00" }}>Adhérer</HashLink></h4>
                <p>Quel que soit votre domaine d’activité, rejoignez-nous.</p>
              </div>
            </div>
            <div className="col-md-3 mt-1 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-card-checklist"></i>
                <h4><Link to="/about" style={{ color: "#ee7f00" }}>Nous trouver</Link></h4>
                <p>Découvrez où nous sommes situés.</p>
              </div>
            </div>
            <div className="col-md-3 mt-1 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-bar-chart"></i>
                <h4><Link to="/agenda" style={{ color: "#ee7f00" }}>Votre agenda</Link></h4>
                <p>Consultez notre agenda trimestriel.</p>
              </div>
            </div>
            <div className="col-md-3 mt-1 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-binoculars"></i>
                <h4><Link to="/team" style={{ color: "#ee7f00" }}>Le mag</Link></h4>
                <p>Découvrez notre magazine et nos actualités.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Newsletter */}
      <section className="text-center">
        <h5>Recevez nos actualités et conseils santé en vous abonnant à notre newsletter</h5>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfq4yaTSCTlKvHcMLkHFynfpOQCRuOILlboK2I4fDe0P1zbQg/viewform?usp=pp_url"
          className="btn btn-warning mt-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          S'inscrire à la newsletter
        </a>
      </section>
    </div>
  );
}

export default Home;
