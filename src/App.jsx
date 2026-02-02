import "./App.css";
import { useState } from "react";

import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import WhoWeSupportSection from "./components/WhoWeSupportSection.jsx";
import JourneySection from "./components/JourneySection.jsx";
import WhatWeOfferSection from "./components/WhatWeOfferSection.jsx";
import ProgramsSection from "./components/ProgramsSection.jsx";
import PartnersSection from "./components/PartnersSection.jsx";
import CTASection from "./components/CTASection.jsx";
import Footer from "./components/Footer.jsx";
import { ApplicationModal } from "./components/ApplicationModal.jsx";
import ChatbotButton from "./components/ChatbotButton.jsx";

// Import images
import intellirmLogo from "./assets/intellirmLogo.jpg";  

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <Header onApplyClick={() => setIsModalOpen(true)} logo={""} />

      {/* Sections (UNCHANGED) */}
      <HeroSection />
      <AboutSection />
      <WhoWeSupportSection />
      <JourneySection />
      <WhatWeOfferSection />
      <ProgramsSection />
      <PartnersSection  intellirmLogo={intellirmLogo} />
      <CTASection />
      <Footer />

      {/* Google Form Modal */}
      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Chatbot Button */}
      <ChatbotButton />
    </>
  );
}

export default App;
