import React from 'react';
import logo from '../../logo.svg';

function Home() {
    return (
    <div className="App" id="homenav">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="container">
        <p> Joni Elfhers (she/her) is a freelance audio engineer. She works on both digital and analog systems, in both mobile and studio settings.
          Over the past decade Joni, has record hundreds of albums covering a variety of styles. From live session to multi track sessions, she has a proven track record.
        </p>
        <p>
          She puts the clients vision first, whether is is low-fi rock or orchestrated folk, and everything in between.
        </p>
        <p>
          Joni can travel and book sessions at local studios in your area, or do mobile projects(currently digital only).
        </p>
        <p>
          She currently has a studio space in west Philly that is available for small sessions and tape sessions.
        </p>
      </div>
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

export default Home;