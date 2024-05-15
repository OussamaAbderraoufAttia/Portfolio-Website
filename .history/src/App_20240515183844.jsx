import { BrowserRouter } from "react-router-dom";
import React from "react";
import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas, Services, Tech } from "./components";
import { isMobile } from "react-device-detect";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {!isMobile && <Tech />} {/* Conditionally render Tech only if not mobile */}
        {!isMobile && <Services />} {/* Conditionally render Services only if not mobile */}
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
