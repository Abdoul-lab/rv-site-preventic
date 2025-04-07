import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.jpg"; // Vérifie le chemin du logo

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            
            {/* Section Informations */}
            <div className="col-lg-3 col-md-6">
              <div className="footer-info">
                <Link to="/" className="logo me-auto">
                  <img src={logo} alt="Preventic-Afric" className="img-fluid" />
                </Link>
                <p>
                  Bd Valery Giscard d'Estaing<br />
                  Treichville, Abidjan, Côte d'Ivoire<br /><br />
                </p>
              </div>
            </div>

            {/* Section Contact */}
            <div className="col-lg-3 col-md-6 footer-links">
              <p>
                <strong>Phone:</strong> +225 25 21 00 63 22<br />
                <strong>Cell:</strong> +225 07 07 20 48 45<br />
                <strong>Email:</strong> info@preventic-afric.com<br />
              </p>
              <div className="social-links mt-4">
                <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                <a href="https://www.facebook.com/prevention.santeautravail" className="facebook">
                  <i className="bx bxl-facebook"></i>
                </a>
                <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>

            {/* Section Vide (Ajout de futurs liens) */}
            <div className="col-lg-2 col-md-5 footer-links"></div>

            {/* Section Newsletter */}
            <div className="col-lg-3 col-md-6 footer-newsletter">
              <h4>Newsletter</h4>
              <p>Inscrivez-vous au Bulletin d'information</p>
              <form action="" method="post">
                <input type="email" name="email" placeholder="Votre email" /> 
                <input type="submit" value="Souscrire" />
              </form>
            </div>

          </div>
        </div>
      </div>
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
