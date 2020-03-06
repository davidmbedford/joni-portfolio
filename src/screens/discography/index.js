import React from 'react';
// import logo from '../../logo.svg';
import './style.css';

function Discography() {
    return (
    <div className="App" id="discognav">
    <header className="App-header">

      <div className="container">
        
      <div className="row">
        <div className="col s12 headingBorder">
          <h1>Selected Discography</h1>
        </div>
      </div>

      <iframe src="https://bandcamp.com/EmbeddedPlayer/album=2689439826/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/artwork=small/transparent=true/" seamless>
        <a href="http://aparamountalovesupreme.bandcamp.com/album/crisis-meditations">crisis meditations by a paramount, a love supreme</a>
        </iframe>

      <iframe src="https://bandcamp.com/EmbeddedPlayer/album=2795895275/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/artwork=small/transparent=true/" seamless>
        <a href="http://holygifts.bandcamp.com/album/old-joy">Old Joy by Holy Gifts</a>
        </iframe>

      <iframe src="https://bandcamp.com/EmbeddedPlayer/album=2216066439/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/artwork=small/transparent=true/" seamless>
        <a href="http://shanepalko.bandcamp.com/album/send-me-across-the-sea-ep">Send me across the sea, EP by Shane Palko</a>
        </iframe>
      

        {/* <div className="row">
          <div className="col s12 l6">
            <div className="container exampleBox">
              ...
            </div>
          </div>
          <div className="col s12 l6 left-align">
            <h3>(Band Name)</h3>
            <p>Genre: Xxxx Yyyyy</p>
            <p>Credit: Recorded this album live at Zzzzz Studios. Mixed every song except, track 4.</p>
            <p>Year: 2019</p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 l6">
            <div className="container exampleBox">
              ...
            </div>
          </div>
          <div className="col s12 l6 left-align">
            <h3>(Band Name)</h3>
            <p>Genre: Xxxx Yyyyy</p>
            <p>Credit: Recorded this album live at Zzzzz Studios. Mixed every song except, track 4.</p>
            <p>Year: 2019</p>
          </div>
        </div>

        <div className="row">
          <div className="col s12 l6">
            <div className="container exampleBox">
              ...
            </div>
          </div>
          <div className="col s12 l6 left-align">
            <h3>(Band Name)</h3>
            <p>Genre: Xxxx Yyyyy</p>
            <p>Credit: Recorded this album live at Zzzzz Studios. Mixed every song except, track 4.</p>
            <p>Year: 2019</p>
          </div>
        </div> */}

      </div>

    </header>
    
  </div>
    );
}

export default Discography;