import React from 'react';
import logo from '../../logo.svg';

function Contact() {
    return (
    <div className="App" id="contactnav">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="container">

      <div className="row">
        <div className="col s12 headingBorder">
          <h1>Contact</h1>
        </div>
      </div>

      <p>Email: earthsongsrecording@gmail.com</p>
      <p>Phone Number: 666-420-4321</p>
      <p>Mailing Address: maybe you dont want this one idk</p>
      </div>
      {/* <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a> */}
      
    </header>
  </div>
    );
}

export default Contact;