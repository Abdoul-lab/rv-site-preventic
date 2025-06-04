import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Adhesion from "./pages/Adhesion";
import MedicalVisit from "./pages/MedicalVisit";
import SalariedVisit from './pages/SalariedVisit';
import SalaryMonitoring from './pages/SalaryMonitoring';
import Document from './pages/Document';
import Formations from "./pages/Formations";
import Consultations from './pages/Consultations';
import OutilsRessources from './pages/OutilsRessources';
import QuestionsAnswers from './pages/QuestionsAnswers';
import InfoAdhesion from './pages/InfoAdhesion';
import Offer from './pages/Offer';
import Contact from "./pages/Contact";
import Values from './pages/Values';
import Statistics from './pages/Statistics';
import LandingPage from './pages/LandingPage';
import Team from './pages/Team';
import About from './pages/About';
import Agenda from './pages/Agenda';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from './components/ScrollToTop';
import './assets/css/style.css';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <>
    <Router basename="/rv-site-preventic">
      <ScrollToTop/>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/landingPage' element={<LandingPage/>} />
        <Route path='/formations' element={<Formations/>} />
        <Route path='/consultations' element={<Consultations/>} />
        <Route path='/outilsRessources' element={<OutilsRessources/>} />
        <Route path='/adhesion' element={<Adhesion/>} />
        <Route path='/salariedVisit' element={<SalariedVisit/>} />
        <Route path='/medicalVisit' element={<MedicalVisit/>} />
        <Route path='/salaryMonitoring' element={<SalaryMonitoring/>} />
        <Route path='/document' element ={<Document/>} />
        <Route path='/questionsAnswers' element ={<QuestionsAnswers/>} />
        <Route path='/infoAdhesion' element ={<InfoAdhesion/>} />
        <Route path='/offer' element={<Offer/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/values' element={<Values/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/statistics' element={<Statistics/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Agenda' element={<Agenda/>} />
      </Routes>

      <Chatbot/>
      <Footer/>
    </Router>
    </>
  )
}

export default App;
