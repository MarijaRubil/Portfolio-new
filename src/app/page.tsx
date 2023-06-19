
import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';



const App = () => {
  return (
    <div className="bg-cover bg-center w-full h-full" style={{ backgroundImage: "url('/background.jpg')" }}> 
      <Navbar />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
