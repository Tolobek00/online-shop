import React from "react";

import contact from "../../Assets/Svg/icons-phone_for-contact.svg";
import mail from "../../Assets/Svg/icons-mail_for-contact.svg";

import "./contact.scss";

function Contact() {
  return (
    <div className="contact container">
      <div className="contact-title">
        <h1>Home /</h1>
        <h2>Cantact</h2>
      </div>
      <div className="contacts">
        <div className="calling">
          <span>
            <img src={contact} alt="" />
            <h1>Call To Us</h1>
          </span>
          <h2>We are available 24/7, 7 days a week.</h2>
          <h2>Phone: +8801611112222</h2>
          <hr />
          <span>
            <img src={mail} alt="" />
            <h1>Write To US</h1>
          </span>
          <h2>Fill out our form and we will contact you within 24 hours.</h2>
          <h2>Emails: customer@exclusive.com</h2>
          <h2>Emails: support@exclusive.com</h2>
        </div>
        <div className="inputsContact">
          <div className="input-typeText">
            <input type="text" placeholder="Your Name *" />
            <input type="email" placeholder="Your Email *" />
            <input type="number" placeholder="Your Phone *" />
          </div>
          <div className="messageInput">
            <textarea placeholder="Your Massage" />
            <button>Send Massage</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
