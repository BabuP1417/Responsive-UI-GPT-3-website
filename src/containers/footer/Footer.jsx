import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>OpenAI<br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>ChatGPT</h4>
        <p>For Everyone</p>
        <p>For Teams</p>
        <p>For Enterprises</p>
        <p>ChatGPT Login</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>About Us </p>
        <p>News</p>
        <p>Security</p>
        <p>Our Charter</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Terms & policies</h4>
        <p>Terms of use</p>
        <p>Privacy Policy</p>
        <p>Brand guidelines</p>
        <p>Other policies</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>OpenAI &copy;2024</p>
    </div>
  </div>
);

export default Footer;
