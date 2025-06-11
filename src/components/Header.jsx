import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/img/Logo.jpg";
import StressModal from "./StressModal";
import Chatbot from "./Chatbot";


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (index) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById("navbar");
      if (menu && !menu.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

    // Affiche automatiquement le modal de stress au premier chargement
const autoShowModal = () => {
  const modalEl = document.getElementById("stressModal");
  if (modalEl && !sessionStorage.getItem("stressModalShown")) {
    const modal = new window.bootstrap.Modal(modalEl);
    modal.show();
    sessionStorage.setItem("stressModalShown", "true");
  }
};

autoShowModal();

  return (<>
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        <Link to="/" className="logo me-auto">
          <img src={logo} alt="Preventic-Afric" className="img-fluid" />
        </Link>

        <nav id="navbar" className={`navbar ${isMenuOpen ? "navbar-mobile" : ""}`}>
          <ul>
            <li><a href="#" onClick={(e) => { e.preventDefault();
              const modal = new window.bootstrap.Modal(document.getElementById("stressModal"));
              modal.show(); }} >
              Auto-évaluation du stress
            </a>
            </li>
            <li><Link to="/" className="active" onClick={closeMenu}>Accueil</Link></li>
            <li><Link to="/values" onClick={closeMenu}>A Propos</Link></li>

            <li className="dropdown" onClick={() => toggleDropdown(1)}>
              <a href="#" className={`${isDropdownOpen[1] ? 'active' : ''}`}>
                <span>Services</span><i className="bi bi-chevron-down"></i>
              </a>
              <ul style={{ display: isDropdownOpen[1] ? 'block' : 'none' }}>
                <li><Link to="/offer#medicale" onClick={closeMenu}>Espace</Link></li>
                <li><Link to="/SalariedVisit" onClick={closeMenu}>Consultations</Link></li>
                <li><Link to="/outilsRessources" onClick={closeMenu}>Outils & ressources</Link></li>
              </ul>
            </li>

            <li className="dropdown" onClick={() => toggleDropdown(3)}>
              <a href="#" className={`${isDropdownOpen[3] ? 'active' : ''}`}>
                <span>Ressources</span><i className="bi bi-chevron-down"></i>
              </a>
              <ul style={{ display: isDropdownOpen[3] ? 'block' : 'none' }}>
                <li><HashLink smooth to="#" onClick={closeMenu}>Articles</HashLink></li>
                <li><HashLink smooth to="#" onClick={closeMenu}>Etudes de cas</HashLink></li>
                <li><HashLink smooth to="#" onClick={closeMenu}>Webinaires</HashLink></li>
              </ul>
            </li>

            <li className="dropdown" onClick={() => toggleDropdown(4)}>
              <a href="#" className={`${isDropdownOpen[4] ? 'active' : ''}`}>
                <span>Outils interactif</span><i className="bi bi-chevron-down"></i>
              </a>
              <ul style={{ display: isDropdownOpen[4] ? 'block' : 'none' }}>
                <li><HashLink smooth to="#" onClick={closeMenu}>Évaluation des risques</HashLink></li>
                <li><HashLink smooth to="#" onClick={closeMenu}>Quiz de Connaissances</HashLink></li>
              </ul>
            </li>

            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="#" className="active" onClick={closeMenu}><Chatbot /></Link></li>
          </ul>

          <i
            className={`bi bi-list mobile-nav-toggle ${isMenuOpen ? "bi-x" : ""}`}
            onClick={toggleMenu}
          ></i>
        </nav>
      </div>
    </header>
    <StressModal/>
    </>
  );
}

export default Header;
