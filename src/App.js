import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/index.js';
import Footer from './components/footer/index.js';
import Home from './screens/home/index.js';
import Gear from './screens/gear/index.js';
import Discography from './screens/discography/index.js';
import Contact from './screens/contact/index.js';

function App() {
  return (
    <Router>
    <>
      <Navbar />
      <Route exact path="/" conmponents={Home} />
      <Route exact path="/gear" conmponents={Gear}/>
      <Route exact path="/discography" conmponents={Discography}/>
      <Route exact path="/contact" conmponents={Contact}/>
      <Footer />
    </>
    </Router>
  );
}

export default App;