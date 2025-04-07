import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/css/style.css';
import './pages/LandingPage.css';
import "./assets/vendor/animate.css/animate.min.css";
// import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import "./assets/vendor/boxicons/css/boxicons.min.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/remixicon/remixicon.css"
import "./assets/vendor/swiper/swiper-bundle.min.css"
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <App />
  </StrictMode>
);
