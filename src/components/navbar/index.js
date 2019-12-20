import React from 'react';

function Navbar() {
    return(
        <nav>
        <div class="nav-wrapper">
          <a href="google.com" class="brand-logo">Earth Songs Recordings</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#homenav">Home</a></li>
            <li><a href="#gearnav">Gear</a></li>
            <li><a href="#discognav">Discography</a></li>
            <li><a href="#contactnav">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;