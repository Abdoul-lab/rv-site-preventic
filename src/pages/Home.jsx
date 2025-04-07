import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import videoSrc from "../assets/img/slide/prenventic_afric.mp4";
import img1 from "../assets/img/slide/IvoirePics6.jpg";
import img2 from "../assets/img/slide/IvoirePics3.jpg";
import img3 from "../assets/img/slide/IvoirePics4.jpg";
import img4 from "../assets/img/slide/IvoirePics5.jpg";
import img5 from "../assets/img/slide/IvoirePics7.jpg";
import { HashLink } from "react-router-hash-link";

function Home() {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container-fluid" style={{ backgroundColor: "#f1ebeb", marginTop: "10%" }}>
      
      {/* Marquee - Inscription */}
      <marquee behavior="scroll" direction="left">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfq4yaTSCTlKvHcMLkHFynfpOQCRuOILlboK2I4fDe0P1zbQg/viewform?usp=pp_url"
          style={{ color: "blue", textDecoration: "none" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>Inscription ici ←</h2>
        </a>
      </marquee>

      <div className="container">
        <div className="row">
          
          {/* Carousel */}
          <div className="col">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
              
              {/* Indicators */}
              <div className="carousel-indicators">
                {[...Array(6).keys()].map((index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleDark"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>

              {/* Carousel Items */}
              <div className="carousel-inner" style={{ borderRadius: "20px" }}>
                
                <div className="carousel-item active" data-bs-interval="10000">
                  <video width="490" height="340" controls autoPlay>
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {[img1, img2, img3, img4, img5].map((image, index) => (
                  <div className="carousel-item" key={index} data-bs-interval="2000">
                    <img src={image} className="d-block w-100" alt={`Slide ${index + 2}`} />
                  </div>
                ))}

              </div>

              {/* Controls */}
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          {/* Description Section */}
          <div className="col">
            <div className="container mt-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Protéger les hommes, sécuriser les entreprises</h5>
                  <p className="card-text">
                  PREVENTIC AFRIC est un cabinet spécialisé dans le domaine de la santé et la sécurité au travail. Sa création répond au souci d’accompagner toute entreprise vers une culture de santé et sécurité au travail à travers la mise en place d’actions de prévention des risques professionnels, d’amélioration des conditions de travail. Dans un contexte réglementaire, technique et concurrentiel de plus en plus complexe, PREVENTIC AFRIC apporte à toutes les entreprises l'accompagnement, l'expertise et l'aide dont elles ont besoin dans les domaines de la prévention des risques professionnels, de l’amélioration de l’environnement et des conditions de travail.
                  </p>

                  {showMore && (
                    <p className="card-text">
                      Nous offrons à tous nos clients des réponses personnalisées et adaptées à leurs obligations réglementaires, leurs besoins et objectifs en matière de santé et sécurité au travail. Nous les accompagnons à toutes les étapes : de la mise en place d'une démarche jusqu'à son amélioration permanente. Ainsi, nos clients de toutes tailles et de tous secteurs peuvent se concentrer prioritairement sur leurs activités et leurs compétences qui sont leur véritable valeur ajoutée. Vous êtes conscients qu’il est nécessaire d'identifier et d'analyser les risques et menaces qui pèsent sur vos hommes, sur vos biens matériels et immatériels.  Nous vous aidons à mettre en place des process de santé et sécurité éprouvés, des méthodologies, des organisations et des bonnes pratiques adaptées..
                    </p>
                  )}

                  <button onClick={() => setShowMore(!showMore)} className="btn btn-primary">
                    {showMore ? "Lire moins" : "Lire la suite"}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="services" style={{ backgroundColor: "#f1ebeb" }}>
        <div className="container" style={{ backgroundColor: "#fff", padding: "10px", boxShadow: "0px 5px #888888" }}>
          <div className="row">
            
            <div className="col-md-3">
              <div className="icon-box">
                <i className="bi bi-briefcase"></i>
                <h4>
                  <HashLink smooth to="/adhesion#adherer" style={{ color: "#ee7f00" }}>Adhérer</HashLink>
                </h4>
                <p>Quel que soit votre domaine d’activité, rejoignez-nous.</p>
              </div>
            </div>

            <div className="col-md-3 mt-1 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-card-checklist"></i>
                <h4>
                  <Link to="/about" style={{ color: "#ee7f00" }}>Nous trouver</Link>
                </h4>
                <p>Découvrez où nous sommes situés.</p>
              </div>
            </div>

            <div className="col-md-3 mt-1 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-bar-chart"></i>
                <h4>
                  <Link to="/agenda" style={{ color: "#ee7f00" }}>Votre agenda</Link>
                </h4>
                <p>Consultez notre agenda trimestriel.</p>
              </div>
            </div>

            <div className="col-md-3 mt-1 mt-md-0">
              <div className="icon-box">
                <i className="bi bi-binoculars"></i>
                <h4>
                  <Link to="/team" style={{ color: "#ee7f00" }}>Le mag</Link>
                </h4>
                <p>Découvrez notre magazine et nos actualités.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
