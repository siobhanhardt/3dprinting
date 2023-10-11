import React from "react";
import lefthex from "./images/lefthex.png";
import righthex from "./images/righthex.png";
import logo from "./images/logo.png";

const Home = ({ scrollY }) => {
  return (
    <section id="home" className="full-page-header">
      <img className="lefthex" src={lefthex} alt="Left Hex" />
      <img className="righthex" src={righthex} alt="Right Hex" />
      <img
        className="lefthex2"
        src={lefthex}
        alt="Left Hex"
        style={{ left: `${-200 + scrollY * 0.2}px` }}
      />
      <img
        className="righthex2"
        src={righthex}
        alt="Right Hex"
        style={{ right: `${-200 + scrollY * 0.2}px` }}
      />
      <img className="toplogo" src={logo} alt="Logo" />
    </section>
  );
};

export default Home;
