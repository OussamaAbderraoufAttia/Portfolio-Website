import { BrowserRouter } from "react-router-dom";
import React from "react";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech, // Import Tech component
  Works,
  StarsCanvas,
  Services, // Import Services component
} from "./components";

const App = () => {
  // Function to conditionally render Tech and Services components
  const renderMobileFallback = (component) => {
    // Replace with actual mobile placeholder content for each component
    return (
      <div className="mobile-placeholder">
        This section is not optimized for mobile yet. Visit on desktop for the full experience.
      </div>
    );
  };

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/* Conditional rendering for Tech */}
        {isMobile() ? (
          renderMobileFallback(Tech) // Replace Tech with mobile placeholder
        ) : (
          <Tech />
        )}
        {/* Conditional rendering for Services */}
        {isMobile() ? (
          renderMobileFallback(Services) // Replace Services with mobile placeholder
        ) : (
          <Services />
        )}
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
