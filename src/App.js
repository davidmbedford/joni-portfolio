import React, {useState} from 'react';
import './App.css';
import Navbar from './components/navbar/index.js';
import Footer from './components/footer/index.js';
import Home from './screens/home/index.js';
import Gear from './screens/gear/index.js';
import Discography from './screens/discography/index.js';
import Contact from './screens/contact/index.js';



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
