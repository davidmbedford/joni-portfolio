import React from 'react';
import './App.css';
import Navbar from './components/navbar/index.js';
import Footer from './components/footer/index.js';
import Home from './components/home/index.js';
import Gear from './components/gear/index.js';
import Discography from './components/discography/index.js';
import Contact from './components/contact/index.js';


function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Gear />
    <Discography />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
