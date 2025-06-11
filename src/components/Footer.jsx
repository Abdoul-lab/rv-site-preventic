import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.jpg";

function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white">
      <div className="footer-top">
        <div className="container">
          <div className="row">

            {/* 1. Logo & Adresse */}
            <div className="col-lg-3 col-md-6 footer-info">
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
            <div className="col-lg-3 col-md-6 footer-contact">
              <h4>Contact</h4>
              <p>
                <strong>Tél:</strong> +225 25 21 00 63 22<br />
                <strong>Mobile:</strong> +225 07 07 20 48 45<br />
                <strong>Email:</strong> info@preventic-afric.com<br />
              </p>
              <div className="social-links mt-3">
                <a href="#" className="twitter" aria-label="Twitter">
                  <i className="bx bxl-twitter"></i>
                </a>
                <a href="https://www.facebook.com/prevention.santeautravail" target="_blank" rel="noopener noreferrer" className="facebook" aria-label="Facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="linkedin" aria-label="LinkedIn">
                  <i className="bx bxl-linkedin"></i>
                </a>
              </div>
            </div>

            {/* 3. Liens utiles */}
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Liens utiles</h4>
              <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/values">À propos</Link></li>
                <li><Link to="/offer">Nos Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/mentions-legales">Mentions légales</Link></li>
              </ul>
            </div>

            {/* 4. Newsletter */}
            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Newsletter</h4>
              <p>Inscrivez-vous au Bulletin d'information</p>
              <form onSubmit={(e) => e.preventDefault()}>
                <input type="email" name="email" placeholder="Votre email" required />
                <input type="submit" value="Souscrire" />
              </form>
            </div>

          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom text-center">
        <div className="container">
          <p>© {new Date().getFullYear()} Preventic-Afric. Tous droits réservés.</p>
          <p><Link to="/#" className="text-white">Mentions légales</Link></p>
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
