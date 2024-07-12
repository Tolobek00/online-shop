import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import appstore from "../../Assets/Svg/download-appstore.svg";
import copyright from "../../Assets/Svg/icon-copyright.svg";
import facebook from "../../Assets/Svg/Icon-Facebook.svg";
import GooglePlay from "../../Assets/Svg/GooglePlay.svg";
import instagram from "../../Assets/Svg/icon-instagram.svg";
import linkedin from "../../Assets/Svg/Icon-Linkedin.svg";
import qr from "../../Assets/Svg/Qr Code.svg";
import send from "../../Assets/Svg/icon-send.svg";
import twitter from "../../Assets/Svg/Icon-Twitter.svg";

import "./footer.scss";

function Footer() {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);

  function goToPages(Link) {
    navigate(Link);
  }

  function openMenu() {
    setActive(!active);
  }
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="exclusive">
          <h1 className="exclus">Exclusive</h1>
          <h1 className="sub">Subscribe</h1>
          <h1 className="get">Get 10% off your first order</h1>
          <section>
            <input type="email" placeholder="Enter your email" />
            <img src={send} alt="" />
          </section>
        </div>
        <div className="support">
          <h1>Support</h1>
          <h2>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</h2>
          <h2>exclusive@gmail.com</h2>
          <h2>+88015-88888-9999</h2>
        </div>
        <div className="account">
          <h1>Account</h1>
          <h2>My Account</h2>
          <h2>Login / Register</h2>
          <h2>Cart</h2>
          <h2>Wishlist</h2>
          <h2>Shop</h2>
        </div>
        <div className="quick">
          <h1>Quick Link</h1>
          <h2>Privacy Policy</h2>
          <h2>Terms Of Use</h2>
          <h2>FAQ</h2>
          <h2>Contact</h2>
        </div>
        <div className="download">
          <h1>Download App</h1>
          <p>Save $3 with App New User Only</p>
          <div className="download-container">
            <section className="qrCode">
              <section>
                <img src={qr} alt="" />
              </section>
              <section className="apps">
                <img src={GooglePlay} alt="" />
                <img src={appstore} alt="" />
              </section>
            </section>
            <div className="icons">
              <a href="https://www.facebook.com/?locale=ru_RU">
                <img src={facebook} alt="" />
              </a>
              <img src={twitter} alt="" onClick={() => goToPages("/jfbsb")} />
              <img src={instagram} alt="" />
              <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-underline">
        <h3>
          <img className="copy" src={copyright} alt="" />
          Copyright Rimel 2022. All right reserved
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
