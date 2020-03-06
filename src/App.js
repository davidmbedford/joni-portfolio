import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/index.js';
import Footer from './components/footer/index.js';
import Home from './screens/home/index.js';
import Gear from './screens/gear/index.js';
import Discography from './screens/discography/index.js';
import Clients from './screens/clients/index.js'
import Contact from './screens/contact/index.js';

class App extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      const M = window.M;
      M.AutoInit();
    });
  }

  render() {
  return (
    <>
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gear" component={Gear} />
          <Route exact path="/discography" component={Discography} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      <Footer />
    </Router>
    </>
  );
  }
}

export default App;
