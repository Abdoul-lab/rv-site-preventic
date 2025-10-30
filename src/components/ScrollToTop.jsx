import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const [showScroll, setShowScroll] = useState(false);

  // Afficher ou masquer le bouton de retour en haut
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setShowScroll(true);  // Montre le bouton si l'utilisateur a défilé de plus de 50px
    } else {
      setShowScroll(false);  // Cache le bouton si l'utilisateur est en haut de la page
    }
  };

  // Défiler la page en haut lorsque le bouton est cliqué
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Écouter les événements de défilement de la page
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Réinitialiser la position du scroll au changement de page
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <>
      {showScroll && (
        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center active"
          onClick={(e) => {
            e.preventDefault();
            scrollToTop();
          }}
          style={{
            position: 'fixed',
            bottom: '10px',
            right: '15px',
            padding: '10px 20px',
            backgroundColor: '#FF0000', // Couleur du fond (change ici)
            color: '#fff', // Couleur du texte (change ici)
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            fontSize: '20px',
          }}
        >
          <i className="bi bi-arrow-up-short"></i>
        </a>
      )}
    </>
  );
};

export default ScrollToTop;
