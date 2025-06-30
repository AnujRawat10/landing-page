import React from 'react';
import '../styles/logos.css';

const ClientLogos = () => {
  return (
    <div className="client-logos">
      <h2>Our Shopify Clients</h2>
      <p>Driving technology for leading brands</p>
      <div className="logo-slider">
        {['snitch', 'scentira', 'kaapus', 'muktai', 'sugandhim'].map((name) => (
          <img key={name} src={`/clients/${name}.png`} alt={name} />
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
