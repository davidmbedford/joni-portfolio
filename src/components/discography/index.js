import React from 'react';
import logo from '../../logo.svg';

function Discography() {
    return (
    <div className="App" id="discognav">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://www.bandcamp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bandcamp
      </a>
    </header>
  </div>
    );
}

export default Discography;