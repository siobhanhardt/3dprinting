import React from 'react';
import contact from './images/contact.jpg';
import email from './images/email.png';
import phone from './images/phone.png';
import location from './images/location.png';
import fiverr from './images/fiverr.png';

const Contact = ({ gaEventTracker }) => {
  return (
    <section id="contact">
      <div className='contact-header'>
        <h3>Start a project with 3D Printing Kildare</h3>
        <h1>Have an idea? Let's discuss it!</h1>
      </div>
      <div className='contact-body'>
        <div className='col'>
          <div className="contact-image"> 
            <img src={contact} alt="Contact Us" /> 
          </div>
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
            <a href="https://www.fiverr.com/printing3d_ie" onClick={()=>gaEventTracker('Fiverr')}>
              <img src={fiverr} alt="Fiverr" />
            </a>
            <h2>FIVERR</h2>
            <p>Find us on fiverr</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
