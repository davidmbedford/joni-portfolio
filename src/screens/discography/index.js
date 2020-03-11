import React from 'react';
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

          <div className="row">
            <div className="col s12 left-align">
              <h5>Engineered, Recorded and Mixed at Earth Sounds in West Philadelphia || Genre: Black Metal, Screamo </h5>
              <iframe className="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=2689439826/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/artwork=small/transparent=true/" seamless>
                <a href="http://aparamountalovesupreme.bandcamp.com/album/crisis-meditations">crisis meditations by a paramount, a love supreme</a>
              </iframe>
            </div>
          </div>

          <div className="row">
            <div className="col s12 left-align">
              <h5>Recorded and Mixed at Headroom Studios in North Philadelphia || Genre: Experimental Indie Rock</h5>
              <iframe className="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/album=2795895275/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/artwork=small/transparent=true/" seamless>
                <a href="http://holygifts.bandcamp.com/album/old-joy">Old Joy by Holy Gifts</a>
              </iframe>
            </div>
          </div>

          <div className="row">
            <div className="col s12 left-align">
              <h5>Recorded and Mixed at Supermagic Studios in Landenburg PA || Genre: Alternative Folk </h5>
              <iframe id="youtube" src="https://www.youtube.com/embed/jsJlCgeZLuQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Discography;