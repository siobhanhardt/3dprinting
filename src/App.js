import React, { useEffect, useState } from "react";
import ReactGA from "react-ga4";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import portfolioItems from "./portfolioData";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
import Services from "./Services";
import Contact from "./Contact";

import logo from "./images/logo.png";

const TRACKING_ID = "G-5DPLXGZ082"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const useAnalyticsEventTracker = (category = "Blog category") => {
  const eventTracker = (action = "test action", label = "test label") => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};

function App() {
  const gaEventTracker = useAnalyticsEventTracker("Contact us");

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route
            path="/"
            element={
              <>
                <Home scrollY={scrollY} />
                <nav>
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#portfolio">Portfolio</a>
                  <a href="#services">Services</a>
                  <a
                    href="#contact"
                    onClick={() => gaEventTracker("Contact Us")}
                  >
                    Contact Us
                  </a>
                </nav>
                <About />
                <Portfolio portfolioItems={portfolioItems} />
                <Services />
                <Contact gaEventTracker={gaEventTracker} />
                <footer>
                  <div>
                    <a href="/">
                      <img src={logo} alt="Logo" />
                    </a>
                  </div>
                  <div>
                    <a
                      href="/privacy-policy"
                      onClick={() => gaEventTracker("Privacy Policy")}
                    >
                      Privacy Policy &nbsp; &nbsp; &nbsp;
                    </a>
                    <a
                      href="/terms-of-service"
                      onClick={() => gaEventTracker("Terms of Service")}
                    >
                      Terms of Service
                    </a>
                    <p>© Copyright 2023. All rights reserved.</p>
                  </div>
                </footer>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
