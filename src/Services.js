import React from "react";
import model from "./images/model.png";
import print from "./images/print.png";
import paint from "./images/paint.png";

const Services = () => {
  return (
    <section id="services">
      <h3 className="services-heading">Services</h3>
      <h1>We bring your ideas to life!</h1>
      <div className="services-1">
        <div className="col">
          <h3>Who we serve</h3>
          <ul>
            <li>Home and Hobbyists</li>
            <li>Engineers</li>
            <li>Students</li>
            <li>Local Businesses</li>
          </ul>
        </div>
        <div className="col">
          <h3>Ideal for</h3>
          <ul>
            <li>Prototyping</li>
            <li>Figurines and other artistic pieces</li>
            <li>Molds</li>
            <li>Personalised gifts</li>
          </ul>
        </div>
      </div>
      <div className="services-2">
        <div className="col2">
          <img src={model} alt="3D Modelling" />
          <h2>3D Modelling</h2>
          <p>
            With experience using both CAD software and 3D graphics software we
            can help build any type of model, from a spare part to fix things
            around your house, to a custom model of your DND character.
          </p>
        </div>
        <div className="col2">
          <img src={print} alt="3D Printing" />
          <h2>3D Printing</h2>
          <p>
            This is our bread and butter. We can take your models and bring them
            to life and we can help you decide which type of print to go for. We
            will make sure to get the best quality print possible.
          </p>
        </div>
        <div className="col3">
          <img src={paint} alt="Painting" />
          <h2>Painting</h2>
          <p>
            Sometimes prints need a bit of extra colour and detail and we can do
            that for you. We can add that extra bit of life to that gift by
            adding a splash of colour.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
