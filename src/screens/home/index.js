import React, { Component } from 'react';
import Tape from '../../assets/Tape.jpg';
import SilverDrum from '../../assets/SilverDrum.jpg';
import GoldDrum from '../../assets/GoldDrum.jpg';
import './style.css';

function Home() {
  return (
    <div className="App" id="homenav">
      <div className="App-header">
        <div className="container">
          <p className="homeParagraph"> <img src={Tape} className="picRight" alt="analog tape machine" />
            Joni Elfers is a sonic facilitator and audio engineer. She is experienced with tracking, mixing, and mastering. She puts her emphasis on
            connecting with the artist and what they want. Recording is a sacred process. Music connects people in a deep and intangible way,
            and Joni wants to respect and honor that in the creative process.
          </p>
          <p className="homeParagraph"> <img src={SilverDrum} className="picLeft" alt="silver drumset" />
            She is well-versed in both digital and traditional analog techniques. She also works with field sounds and found sounds.
            Joni has been recording bands since high school, and got into the music industry though the DIY music scene. Over time, she has since developed a deep love
            and appreciation for a large variety of music.  Her output reflects this, having done everything from doom metal to orchestrated folk records,
            and even ambient and found sounds songs.
          </p>
          <p className="homeParagraph"> <img src={GoldDrum} className="picRight" alt="gold drumset" />
            She currently does not have a studio set-up, but is able to run sessions from any available studio in your area. She also does mobile
            recording and can do it in almost any location, even those without power.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

