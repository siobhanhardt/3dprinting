import React from 'react';
import aboutImage from './images/about3.jpg';

const About = () => {
  return (
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
  );
};

export default About;
