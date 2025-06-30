import React, { useState } from 'react';
import '../styles/features-faq.css';

const faqs = [
  {
    question: "How long will it take to create my Shopify website?",
    answer: "Typically, it takes 2–4 weeks depending on your project’s complexity and requirements.",
  },
  {
    question: "Can I use my own domain name with a Shopify website?",
    answer: "Yes, you can use your own domain or buy one directly through Shopify.",
  },
  {
    question: "Do I need any technical skills to manage my Shopify website?",
    answer: "No, Shopify is user-friendly. We’ll also provide guidance after the launch.",
  },
  {
    question: "Can you help me set up shipping and taxes on my Shopify store?",
    answer: "Absolutely! We assist with end-to-end setup including shipping, taxes, and payment gateways.",
  },
  {
    question: "How do I know if Shopify is the right platform for my business?",
    answer: "If you're looking for scalability, ease of use, and robust features, Shopify is a strong fit.",
  },
];

const FeaturesAndFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="features-faq">
      <div className="features-left">
        <h2>
          Get Your Shopify Site in Shape with WebzPlot: Our Expertise, Your Success.
          <br />
          Let&apos;s Flex our E-Commerce Muscles!
        </h2>
        <p>
          WebzPlot is your go-to partner for creating a successful Shopify site. We specialize in providing expert solutions for businesses of all sizes, ensuring that your e-commerce store is designed, developed, and launched with the utmost care and attention.
        </p>
        <p>
          Our team of experienced professionals works closely with you to understand your needs and goals, delivering a Shopify store that’s tailored to your specific business needs.
        </p>
      </div>

      <div className="faq-right">
        {faqs.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span>{openIndex === index ? '▲' : '▼'}</span>
            </div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesAndFAQ;
