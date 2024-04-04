/* import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Education } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        
        <About />
        <Experience />
        <Tech />
        <Works />
        <Education />
        <Feedbacks />

        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App; */


import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import Routes and Route

// Import your components
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Education, ProjectDetail } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          {/* Wrap components that don't need specific routing in a Route without a path to act as default content */}
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Experience />
                <Tech />

                <Works />
                <Education />
                
                
                <Feedbacks />
                <Contact />
              </>
            }/>
            {/* Route for project details. Assuming ProjectDetail expects a projectId param */}
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Routes>
        </div>
        
        {/* StarsCanvas might need to be outside the Routes if you want it displayed regardless of the route */}
        <div className='relative z-0'>
{/*           <StarsCanvas /> */}
        </div>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
