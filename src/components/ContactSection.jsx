import React from 'react';
import '../styles/contact.css';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-left">
        <h2>Ready to take your Shopify website to the next level?</h2>
        <p>Contact us today for a free consultation and quote!</p>
        <h3>Contact Details</h3>
        <ul>
          <li><strong>Phone:</strong> +91-9555-993-311</li>
          <li><strong>Email:</strong> webzplot@gmail.com</li>
          <li><strong>Address:</strong> Rohini, Sector 8, Delhi - 110085</li>
        </ul>
      </div>
      <div className="contact-right">
        <form className="contact-form">
          <input type="text" placeholder="Your Name*" required />
          <input type="email" placeholder="Your Email*" required />
          <input type="tel" placeholder="Your Phone Number*" required />
          <textarea placeholder="Tell us about your project*" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
