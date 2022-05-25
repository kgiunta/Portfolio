import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import ContactForm from "./components/pages/Contact";
import Portfolio from "./components/pages/Portfolio";
import Resume from "./components/pages/Resume";
import NavTabs from "./components/NavTabs";
import Footer from "./components/pages/Footer";

const App = () => {
  return (
    <Router>
      <NavTabs />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/portfolio/contact" element={<ContactForm />} />
        <Route path="/portfolio/myPortfolio" element={<Portfolio />} />
        <Route path="/portfolio/resume" element={<Resume />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
