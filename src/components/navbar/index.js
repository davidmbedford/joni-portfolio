import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Navbar extends Component {
  render() {
    return (
      <>
        <nav>
        <div className="nav-wrapper">
          <a className="brand-logo">Earth Songs Recordings</a>
          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/gear'>Gear</Link></li>
            <li><Link to='/discography'>Discography</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
      <li><a className="nav-link" href="#home-sec">Home</a></li>
      <li><a className="nav-link" href="#portfolio-sec">Portfolio</a></li>
      <li><a className="nav-link" href="#bio-sec">Bio</a></li>
      <li><a className="nav-link" href="#skills-sec">Skills</a></li>
      <li><a className="nav-link" href="#contact-sec">Contact</a></li>
      </ul>
      </>
    )
  }
}

export default Navbar;
