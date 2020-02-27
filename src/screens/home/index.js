import React, {Component} from 'react';
// import logo from '../../logo.svg';
import interface_ultra from '../../assets/interface_ultra.svg';

class Home extends Component {
  render () {
  return (
    <div className="App" id="homenav">
    <header className="App-header">
      <img src={interface_ultra} className="App-logo" alt="logo" />
      <div className="container">
        <p> Joni Elfers is a sonic facilitator and audio engineer. She is experienced with tracking, mixing, and mastering. She puts her emphasis on 
          connecting with the artist and what they want. Recording is a sacred process and music connects people in a deep and intangible way, 
          and Joni want to respect and honor that in the creative process.
          </p>
        <p> She is well versed in both digital and traditional analog techniques. She also works with field sounds and found sounds.
        Joni has been recording bands since high school, and got into the music industry though the DIY music, she has since developed a deep love 
        and appreciation for a large variety of music.  Her output reflects this, having done everything from doom metal to orchestrated folk records, 
        and even into ambient and found sounds songs.
          </p>
        <p>
          She currently does not have a studio set up but is able to run sessions from any available studio in your area. She also does mobile 
          recording and can do it in almost any location, even those without power.
        </p>
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
}

export default Home;

