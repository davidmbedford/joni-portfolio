import React from 'react';
import logo from '../../logo.svg';
import './style.css';

function Discography() {
    return (
    <div className="App" id="discognav">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <a
        className="App-link"
        href="https://www.bandcamp.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bandcamp
      </a> */}

      <div className="container">
        <div className="row">
          <div className="col s6">
            <div className="container exampleBox">
              ...
            </div>
          </div>
          <div className="col s6 left-align">
            <h3>(Band Name)</h3>
            <p>Genre: Xxxx Yyyyy</p>
            <p>Credit: Recorded this album live at Zzzzz Studios. Mixed every song except, track 4.</p>
            <p>Year: 2019</p>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <div className="container exampleBox">
              ...
            </div>
          </div>
          <div className="col s6 left-align">
            <h3>(Band Name)</h3>
            <p>Genre: Xxxx Yyyyy</p>
            <p>Credit: Recorded this album live at Zzzzz Studios. Mixed every song except, track 4.</p>
            <p>Year: 2019</p>
          </div>
        </div>

        <div className="row">
          <div className="col s6">
            <div className="container exampleBox">
              ...
            </div>
          </div>
          <div className="col s6 left-align">
            <h3>(Band Name)</h3>
            <p>Genre: Xxxx Yyyyy</p>
            <p>Credit: Recorded this album live at Zzzzz Studios. Mixed every song except, track 4.</p>
            <p>Year: 2019</p>
          </div>
        </div>

      </div>

    </header>
    
  </div>
    );
}

export default Discography;