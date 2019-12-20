import React from 'react';
import logo from '../../logo.svg';

function Contact() {
    return (
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Email address
      </p>
      <p>
        Phone Number
      </p>
      <p>
        Mailing Address
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
    );
}

export default Contact;