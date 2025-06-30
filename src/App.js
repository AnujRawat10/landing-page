import React from "react";
import PricingSection from "./components/PricingSection";
import FeaturesAndFAQ from './components/FeaturesAndFAQ';

import HeroSection from "./components/HeroSection";
import PricingBanner from "./components/PricingBanner";
import ClientLogos from "./components/ClientLogos";
import "./App.css";
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <PricingBanner />
      <ClientLogos />
      <PricingSection />
      <FeaturesAndFAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}




export default App;
