import React from 'react';

function Navbar() {
    return(
        <nav>
        <div class="nav-wrapper">
          <a href="google.com" class="brand-logo">Logo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="">Home</a></li>
            <li><a href="badges.html">Gear</a></li>
            <li><a href="collapsible.html">Discography</a></li>
            <li><a href="collapsible.html">Contact</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;