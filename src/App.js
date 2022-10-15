import './App.css';
import React from 'react';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Qualification from './components/Qualification/Qualification';
import Services from './components/Services/Services';
import Skills from './components/Skills/Skills';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';
import Scroll from './components/ScrollUp/Scroll';

function App() {
  return (
    <>
      <Header />

      <main className='home'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
        
      </main>
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
