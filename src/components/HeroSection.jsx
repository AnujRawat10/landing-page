import React from 'react';
import '../styles/hero.css';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="left-col">
        <img src="/logo.svg" alt="WebzPlot Logo" className="logo" />
        <div className="badges">
          <img src="/shopify-partner.png" alt="Shopify Partner" />
          <img src="/shopify-expert.png" alt="Shopify Expert" />
        </div>
        <h1>
          Launch your online business with a <br />
          <strong>stunning Shopify website</strong>
        </h1>
        <a href="https://wa.me/919555993311" className="whatsapp-btn">
          💬 Send a WhatsApp Message
        </a>
      </div>
      <div className="right-col">
        <h2>Submit details below to get a call back</h2>
        <form className="callback-form">
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <input type="tel" placeholder="Phone Number*" required />
          <textarea placeholder="Give us a small brief about your project*" required></textarea>
          <button type="submit">Get a Call Back</button>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
