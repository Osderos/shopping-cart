import React from "react";
import '../styles/contact.css'

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact">
        <div className="contactAdress">
          <i className="fa-solid fa-map-location"></i> Adress: Nowere nr.1
        </div>
        <div className="contactPhone">
          <i className="fa-solid fa-phone"></i> Phone: +123456789
        </div>
        <div className="contactMail">
          <i className="fa-solid fa-envelope"></i> E-mail: arts@arts.coom
        </div>
      </div>
    </div>
  );
}

export default Contact;
