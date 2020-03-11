import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">Earth Songs Recording</a>
            <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/gear'>Gear</Link></li>
              <li><Link to='/discography'>Discography</Link></li>
              <li><Link to='/clients'>Clients</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
          </div>
        </nav>

        <ul id="slide-out" className="sidenav">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/gear'>Gear</Link></li>
          <li><Link to='/discography'>Discography</Link></li>
          <li><Link to='/clients'>Clients</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
      </>
    )
  }
}

export default Navbar;
