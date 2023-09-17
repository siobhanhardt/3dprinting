import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import PrivacyPolicy from './PrivacyPolicy'; 
import TermsOfService from './TermsOfService'; 

import aboutImage from './images/about3.jpg';
import logo from './images/logo.png';
import contact from './images/contact.jpg';
import bulbasaur from './images/bulbasaur.jpg';
import frog from './images/frog.jpg';
import handlebars from './images/handlebars.jpg';
import house from './images/house.jpg';
import melania from './images/melania.jpg';
import phoneholder from './images/phone.jpg';
import toothbrush from './images/toothbrush.jpg';
import paint from './images/paint.png';
import print from './images/print.png';
import model from './images/model.png';
import phone from './images/phone.png';
import email from './images/email.png';
import location from './images/location.png';
import fiverr from './images/fiverr.png';
import lefthex from './images/lefthex.png';
import righthex from './images/righthex.png';

function navigateToFiverr() {
  window.open('https://www.fiverr.com/printing3d_ie', '_blank');
}

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/3dprinting" element={
            <>
      <section id="home" className="full-page-header">
        <img className="lefthex" src={lefthex} alt="Left Hex" />
        <img className="righthex" src={righthex} alt="Right Hex"/>
        <img className="lefthex2" src={lefthex} alt="Left Hex"  style={{ left: `${-200 + scrollY * 0.2}px` }} />
        <img className="righthex2" src={righthex} alt="Right Hex" style={{ right: `${-200 + scrollY * 0.2}px` }}/>
        <img className="toplogo" src={logo} alt="Logo" />
      </section>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact Us</a>
      </nav>
      <section id="about">
        <div className="about-header">
            <h3>WHO WE ARE</h3>
            <h1>The merging of creativity and engineering. Bringing ideas and dreams to life</h1>
        </div>
        <div className="about-content">
            <p>Welcome to 3D Printing Kildare. We are a small independent design & 3D printing studio based in County Kildare. Our passionate 3D Artist and Engineer strive to bring your ideas to life, no matter how big or small.
                <br/><br/>
                With a combined 15 years of graphic design and 3D printing experience, our talented team can turn any idea from a mere concept or a ready-to-print model into a high-quality 3D printed item.
                <br/><br/>
                We pride ourselves in delivering an unbeatable and highly personalised customer service.</p>
            <img src={aboutImage} alt="About Us" />
        </div>
      </section>
      <section id="portfolio">
        <div className='portfolio-header'>
          <h3>WHAT WE DO</h3>
          <h1>Our portfolio speaks better louder words!</h1>
        </div>
        <div className="portfolio-content">
          <div className="portfolio-item">
            <img src={toothbrush} alt="Toothbrush Holder" />
            <h1>Toothbrush Holder</h1>
            <h3>PLA</h3>
            <p>A modified model from Thingiverse, great for holding electric toothbrushes, the model comes apart for easy cleaning and has a hole at the bottom to allow water to drain.</p>
          </div>
          <div className="portfolio-item">
            <img src={bulbasaur} alt="Bulbasaur" />
            <h1>Bulbasaur</h1>
            <h3>PLA</h3>
            <p>Description for Bulbasaur...</p>
          </div>
          <div className="portfolio-item">
            <img src={melania} alt="Melania Bust" />
            <h1>Melania Bust</h1>
            <h3>Resin</h3>
            <p>This was printed with our Elegoo Mars 2 printer. It has great amounts of detail and makes for a perfect gift for an Elden Ring fan.</p>
          </div>
          <div className="portfolio-item">
            <img src={phoneholder} alt="Phone Holder" />
            <h1>Bulbasaur</h1>
            <h3>PLA</h3>
            <p>A customer order, this is a multi part print from Thingiverse that uses springs and cogs to allow the phone holder to adjust to your phone size.</p>
          </div>
          <div className="portfolio-item">
            <img src={frog} alt="Frog" />
            <h1>Frog Plant Holder</h1>
            <h3>PLA</h3>
            <p>A cute sturdy PLA print that has space for a little plant at the back. 3D modelled, printed and painted by us.</p>
          </div>
          <div className="portfolio-item">
            <img src={house} alt="Minature House" />
            <h1>Minature House</h1>
            <h3>PLA</h3>
            <p>A customer order of a small version of their house to be put into a snow globe! Printed with our Ender 5 and painted with acrylics</p>
          </div>
          <div className="portfolio-item">
            <img src={handlebars} alt="Handlebars Mold" />
            <h1>Bike handle Mold</h1>
            <h3>PLA</h3>
            <p>A customer order, we printed this model on our Ender 5 using PLA.</p>
          </div>
        </div>
      </section>
      <section id="services">
        <h3 className='services-heading'>Services</h3>
        <h1>We bring your ideas to life!</h1>
        <div className = "services-1">
          <div className='col'>
            <h3>Who we serve</h3>
            <ul>
              <li>Home and Hobbyists</li>
              <li>Engineers</li>
              <li>Students</li>
              <li>Local Businesses</li>
            </ul>
          </div>
          <div className='col' >
            <h3>Ideal for</h3>
              <ul>
                  <li>Prototyping</li>
                  <li>Figurines and other artistic pieces</li>
                  <li>Moulds</li>
                  <li>Personalised gifts</li>
              </ul>
          </div>
        </div>
        <div className = "services-2">
          <div className='col2'>
            <img src={model} alt="3D Modelling" />
            <h2>3D Modelling</h2>
            <p>With experience using both CAD software and and 3D graphics software we can help build any type of model, from a spare part to fix things around your house, to a custom model of your DND character.</p>
          </div>
          <div className='col2'>
            <img src={print} alt="3D Printing" />
            <h2>3D Printing</h2>
            <p>This is our bread and butter. We can take your models and bring them to life and we can help you decide which type of print to go for. We will make sure to get the best quality print possible.</p>
          </div>
          <div className='col3'>
            <img src={paint} alt="Painting" />
            <h2>Painting</h2>
            <p>Sometimes prints need a bit of extra colour and detail and we can do that for you. We can add that extra bit of life to that gift by adding a splash of colour.</p>
          </div>
        </div>
      </section>
      <section id="contact">
          <div className='contact-header'>
              <h3>Start a project with 3D Printing Kildare</h3>
              <h1>Have an idea? Let's discuss it!</h1>
          </div>
          <div className='contact-body'>
            <div className='col'>
              <div className="contact-image"> <img src={contact} alt="Contact Us" /> </div>
            </div>
            <div className='col'>
                <div className="contact-details">
                    <img src={email} alt="Email" />
                    <h2>INFO@3DPRINTINGKILDARE.COM</h2>
                    <p>For all enquires</p>
                    <img src={phone} alt="Phone" />
                    <h2>TEL: +353 83 333 0364</h2>
                    <p>9 AM - 7 PM</p>
                    <img src={location} alt="Location" />
                    <h2>MAYNOOTH, KILDARE</h2>
                    <p>9 AM - 7 PM</p>
                    <img src={fiverr} alt="Fiverr" />
                    <h2>FIVERR</h2>
                    <p>Find us on fiverr</p>
                    <button onClick={navigateToFiverr}>Click Here</button>

                </div>
            </div>
          </div>
    </section>

      <footer>
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div> 
          <a href="/privacy-policy">Privacy Policy &nbsp; &nbsp; &nbsp;</a>
          <a href="/terms-of-service">Terms of Service</a>
          <p>© Copyright 2023.  All rights reserved.</p>
        </div>
       
      </footer>
          </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;