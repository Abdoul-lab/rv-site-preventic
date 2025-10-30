import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.jpg";

function Footer() {
  return (
    <footer
      id="footer"
      className="text-white"
      style={{
        background: "linear-gradient(to right, #2563eb, #1e40af, #f97316)", // bleu → bleu foncé → orange
      }}
    >
      <div className="footer py-5">
        <div className="container">
          <div className="row">

            {/* 1. Logo & Adresse */}
            <div className="col-lg-3 col-md-6 footer-info mb-4">
              <Link to="/" className="logo mb-3 d-inline-block">
                <img src={logo} alt="Preventic-Afric" className="img-fluid" />
              </Link>
              <div itemScope itemType="https://schema.org/Organization">
                <p>
                  <span itemProp="name">Preventic-Afric</span><br />
                  <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                    <span itemProp="streetAddress">Bd Valery Giscard d'Estaing</span><br />
                    <span itemProp="addressLocality">Treichville, Abidjan</span>,<br />
                    <span itemProp="addressCountry">Côte d'Ivoire</span><br />
                  </span>
                </p>
              </div>
            </div>

            {/* 2. Coordonnées */}
            <div className="col-lg-3 col-md-6 footer-contact mb-4">
              <h4>Contact</h4>
              <p>
                <strong>Tél:</strong> +225 25 21 00 63 22<br />
                <strong>Mobile:</strong> +225 07 07 20 48 45<br />
                <strong>Email:</strong> info@preventic-afric.com<br />
              </p>
              <div className="social-links mt-3">
                <a
                  href="https://www.facebook.com/prevention.santeautravail"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook me-2"
                  aria-label="Facebook"
                >
                  <i className="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/dr-n-dri-brou-21134890/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin"
                  aria-label="LinkedIn"
                >
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>

            {/* 3. Liens utiles */}
            <div className="col-lg-3 col-md-6 footer-links mb-4">
              <h4>Liens utiles</h4>
              <ul className="list-unstyled">
                <li><Link to="/" className="text-white">Accueil</Link></li>
                <li><Link to="/values" className="text-white">À propos</Link></li>
                <li><Link to="/offer" className="text-white">Nos Services</Link></li>
                <li><Link to="/contact" className="text-white">Contact</Link></li>
                <li><Link to="/mentions-legales" className="text-white">Mentions légales</Link></li>
              </ul>
            </div>

            {/* 4. Newsletter */}
            <div className="col-lg-3 col-md-6 footer-newsletter mb-4">
              <h4>Newsletter</h4>
              <p>Inscrivez-vous au Bulletin d'information</p>
              <form onSubmit={(e) => e.preventDefault()} className="d-flex">
                <input
                  type="email"
                  name="email"
                  placeholder="Votre email"
                  required
                  className="form-control me-2"
                />
                <input
                  type="submit"
                  value="Souscrire"
                  className="btn btn-warning"
                />
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom text-center py-3" style={{ background: "rgba(0,0,0,0.2)" }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Preventic-Afric. Tous droits réservés.</p>
          <p><Link to="/mentions-legales" className="text-white">Mentions légales</Link></p>
        </div>
      </div>

      {/* Bouton retour en haut */}
      <a
        href="#"
        className="back-to-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </footer>
  );
}

export default Footer;
