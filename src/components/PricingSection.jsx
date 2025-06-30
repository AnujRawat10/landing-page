import React from 'react';
import '../styles/pricing-cards.css';

const PricingSection = () => {
  const plans = [
    {
      title: 'Shopify Website (only) Package',
      subtitle: 'E-Commerce Website',
      price: '₹149,000',
      features: [
        'Shopify Website Creation and Setup',
        'Upto 200 Products Upload By Our Team',
        'SEO Ready Website',
        'SSL Certificate',
        'Responsive Website',
        'Content 2000 Words',
        'Social Media Integration',
        'Google Analytics Integration',
      ],
    },
    {
      title: 'Shopify Website + Android App Package',
      subtitle: 'Advanced E-Commerce Website + Android App',
      price: '₹249,000',
      features: [
        'Shopify Website Creation and Setup',
        'Android Hybrid App',
        'Google Play Publishing',
        'Referral Integration',
        'Abandoned Checkout',
        'Upto 200 Products Upload By Our Team',
        'SEO Ready Website',
        'SSL Certificate',
      ],
    },
    {
      title: 'Shopify Website + Android & iOS App Package',
      subtitle: 'Advanced E-Commerce Website + Android App + iOS Hybrid App',
      price: '₹299,000',
      features: [
        'Shopify Website Creation and Setup',
        'Android Hybrid App',
        'Google Play Publishing',
        'iOS Web App',
        'Referral Integration',
        'Abandoned Checkout',
        'Upto 200 Products Upload By Our Team',
        'SEO Ready Website',
      ],
    },
  ];

  return (
    <div className="pricing-section">
      <h2>Choose Your Perfect Plan: Shopify Web Development by WebzPlot</h2>
      <div className="pricing-cards">
        {plans.map((plan, index) => (
          <div key={index} className="card">
            <h3>{plan.title}</h3>
            <p className="subtitle">{plan.subtitle}</p>
            <h1>{plan.price}</h1>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <p className="more">▼ View More Inclusions</p>
            <div className="contact-info">
              <strong>TALK TO US</strong>
              <p>+91-9555-993-311</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
