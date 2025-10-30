import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/Logo.jpg";
import StressModal from "./StressModal";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({});
  const [activeLink, setActiveLink] = useState(""); 
  const location = useLocation();

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

  // Met à jour l’onglet actif quand la route change
  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

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

  // Style bouton actif (dégradé)
  const activeStyle = {
    background: "linear-gradient(to right, #2563eb, #1e40af, #f97316)",
    color: "#fff",
    padding: "8px 15px",
    borderRadius: "25px",
    fontWeight: "bold",
    textDecoration: "none",
    display: "inline-block",
    margin: "0 5px",
  };

  // Style par défaut
  const defaultStyle = {
    color: "#000",
    padding: "8px 15px",
    borderRadius: "25px",
    textDecoration: "none",
    display: "inline-block",
    margin: "0 5px",
    transition: "background 0.3s, color 0.3s",
  };

  return (
    <>
      <header id="header" className="fixed-top d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <Link to="/" className="logo me-auto">
            <img src={logo} alt="Preventic-Afric" className="img-fluid" />
          </Link>

          <nav
            id="navbar"
            className={`navbar ${isMenuOpen ? "navbar-mobile" : ""}`}
          >
            <ul>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    const modal = new window.bootstrap.Modal(
                      document.getElementById("stressModal")
                    );
                    modal.show();
                  }}
                  style={activeLink === "/stress" ? activeStyle : defaultStyle}
                >
                  Auto-évaluation du stress
                </a>
              </li>

              <li>
                <Link
                  to="/"
                  onClick={closeMenu}
                  style={activeLink === "/" ? activeStyle : defaultStyle}
                >
                  Accueil
                </Link>
              </li>

              <li>
                <Link
                  to="/values"
                  onClick={closeMenu}
                  style={activeLink === "/values" ? activeStyle : defaultStyle}
                >
                  A Propos
                </Link>
              </li>

              <li className="dropdown" onClick={() => toggleDropdown(1)}>
                <a
                  href="#"
                  style={activeLink.startsWith("/offer") ? activeStyle : defaultStyle}
                >
                  <span>Services</span>
                  <i className="bi bi-chevron-down"></i>
                </a>
                <ul style={{ display: isDropdownOpen[1] ? "block" : "none" }}>
                  <li>
                    <Link
                      to="/offer#medicale"
                      onClick={closeMenu}
                      style={
                        activeLink === "/offer#medicale"
                          ? activeStyle
                          : defaultStyle
                      }
                    >
                      Que faisons-nous ?
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/SalariedVisit"
                      onClick={closeMenu}
                      style={
                        activeLink === "/SalariedVisit"
                          ? activeStyle
                          : defaultStyle
                      }
                    >
                      Consultations
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/outilsRessources"
                      onClick={closeMenu}
                      style={
                        activeLink === "/outilsRessources"
                          ? activeStyle
                          : defaultStyle
                      }
                    >
                      Outils & ressources
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  style={activeLink === "/contact" ? activeStyle : defaultStyle}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <i
              className={`bi bi-list mobile-nav-toggle ${
                isMenuOpen ? "bi-x" : ""
              }`}
              onClick={toggleMenu}
            ></i>
          </nav>
        </div>
      </header>
      <StressModal />
    </>
  );
}

export default Header;
