import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/img/Logo.jpg"; // Assure-toi que le chemin est correct
import Chatbot from "./Chatbot";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({}); // Gérer l'état des sous-menus

  // Toggle pour ouvrir/fermer le menu burger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle pour ouvrir/fermer un sous-menu
  const toggleDropdown = (index) => {
    setIsDropdownOpen((prev) => ({
      ...prev,
      [index]: !prev[index], // Inverse l'état du sous-menu
    }));
  };

  // Fonction pour fermer le menu burger lorsque l'on clique sur un élément
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fermer le menu lorsque l'utilisateur clique à l'extérieur du menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById('navbar');
      if (menu && !menu.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Nettoyage du listener lors du démontage du composant
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center">
        {/* Logo */}
        <Link to="/" className="logo me-auto">
          <img src={logo} alt="Preventic-Afric" className="img-fluid" />
        </Link>

        {/* Navbar */}
        <nav id="navbar" className={`navbar ${isMenuOpen ? "navbar-mobile" : ""}`}>
          <ul>
            <li><Link to="/" className="active" onClick={closeMenu}>Accueil</Link></li>
            <li><Link to="/values" onClick={closeMenu}>A Propos</Link></li>

            {/* Vous êtes EMPLOYEUR */}
            <li className="dropdown" onClick={() => toggleDropdown(1)}>
              <a href="#" className={`${isDropdownOpen[1] ? 'active' : ''}`}>
                <span>Services</span>
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul style={{ display: isDropdownOpen[1] ? 'block' : 'none' }}>
                <li><Link to="/Formations" onClick={closeMenu}>ESPACE Formations</Link></li>
                <li><Link to="/consultations" onClick={closeMenu}>ESPACE Consultations</Link></li>
                <li><Link to="/outilsRessources" onClick={closeMenu}>ESPACE Outils & ressources</Link></li>

                {/* <li className="dropdown" onClick={() => toggleDropdown(2)}>
                  <a href="/adhesion">
                    <span>Surveiller la santé de vos travailleurs</span>
                    <i className="bi bi-chevron-right"></i>
                  </a>
                  <ul style={{ display: isDropdownOpen[2] ? 'block' : 'none' }}>
                    <li><HashLink smooth to="/adhesion#embauche" onClick={closeMenu}>Visite médicale d’embauche</HashLink></li>
                    <li><HashLink smooth to="/adhesion#embauche" onClick={closeMenu}>Visite médicale périodique</HashLink></li>
                    <li><HashLink smooth to="/adhesion#embauche" onClick={closeMenu}>Visite médicale de reprise</HashLink></li>
                    <li><HashLink smooth to="/adhesion#embauche" onClick={closeMenu}>Visites médicales à la demande</HashLink></li>
                  </ul>
                </li>

                <li><Link to="/salarymonitoring" onClick={closeMenu}>Former vos travailleurs</Link></li>
                <li><Link to="/document" onClick={closeMenu}>Documents utiles</Link></li>
                <li><Link to="/questionsAnswers" onClick={closeMenu}>Vos questions, nos réponses</Link></li>
                <li><Link to="/infoAdhesion" onClick={closeMenu}>Espace adhérents</Link></li> */}
              </ul>
            </li> 

            {/* Vous êtes SALARIÉ */}
            <li className="dropdown" onClick={() => toggleDropdown(3)}>
              <a href="#" className={`${isDropdownOpen[3] ? 'active' : ''}`}>
                <span>Ressources</span>
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul style={{ display: isDropdownOpen[3] ? 'block' : 'none' }}>
                <li><HashLink smooth to="/salariedVisit#medicale" onClick={closeMenu}>ESPACE Articles</HashLink></li>
                <li><HashLink smooth to="/salariedVisit/#formations" onClick={closeMenu}>ESPACE Etudes de cas</HashLink></li>
                <li><HashLink smooth to="/salariedVisit#besoins" onClick={closeMenu}>ESPACE Webinaires</HashLink></li>
              </ul>
            </li>

            {/* Nos offres de services */}
            <li className="dropdown" onClick={() => toggleDropdown(4)}>
              <a href="#" className={`${isDropdownOpen[4] ? 'active' : ''}`}>
                <span>Outils interactif</span>
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul style={{ display: isDropdownOpen[4] ? 'block' : 'none' }}>
                <li><HashLink smooth to="/offer#medicale" onClick={closeMenu}>ESPACE Evaluation des risques</HashLink></li>
                <li><HashLink smooth to="/offer#soins" onClick={closeMenu}>ESPACE Quiz de Connaissances</HashLink></li>
                {/* <li><HashLink smooth to="/offer#assistance" onClick={closeMenu}>L'assistance et le conseil</HashLink></li>
                <li><HashLink smooth to="/offer#formations" onClick={closeMenu}>La formation</HashLink></li>
                <li><HashLink smooth to="/offer#externalisation" onClick={closeMenu}>L’externalisation de la fonction SST</HashLink></li> */}
              </ul>
            </li>

            {/* Contact et map */}
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="" className="active" onClick={closeMenu}><Chatbot/></Link></li>
          </ul>

          {/* Menu Burger */}
          <i
            className={`bi bi-list mobile-nav-toggle ${isMenuOpen ? "bi-x" : ""}`}
            onClick={toggleMenu}
          ></i>
        </nav>
        
      </div>
    </header>
  );
}

export default Header;
