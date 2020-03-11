import React from 'react';
import './style.css';

function Discography() {
  return (
    <>
      <div className="App" id="discognav">
        <div className="App-header">
          <div className="container">

            <div className="row">
              <div className="col s12 headingBorder">
                <h1>Selected Discography</h1>
              </div>
            </div>

            <div className="row">
              <div className="col s12 left-align">
                <h5>Engineered, Recorded and Mixed at Earth Sounds in West Philadelphia || Genre: Black Metal, Screamo </h5>
                <iframe className="bandcamp" 
                  src="https://bandcamp.com/EmbeddedPlayer/album=2689439826/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/artwork=small/transparent=true/" 
                  samesite="None Secure" 
                  title="A Paramount A Love Supreme Bandcamp Page" seamless>
                  <a href="http://aparamountalovesupreme.bandcamp.com/album/crisis-meditations" samesite="None Secure">crisis meditations by a paramount, a love supreme</a>
                </iframe>
              </div>
            </div>

            <div className="row">
              <div className="col s12 left-align">
                <h5>Recorded and Mixed at Headroom Studios in North Philadelphia || Genre: Experimental Indie Rock</h5>
                <iframe className="bandcamp" 
                  src="https://bandcamp.com/EmbeddedPlayer/album=2795895275/size=large/bgcol=ffffff/linkcol=63b2cc/tracklist=false/artwork=small/transparent=true/" 
                  samesite="None Secure" 
                  title="Holy Gifts Bandcamp Page" seamless>
                  <a href="http://holygifts.bandcamp.com/album/old-joy" samesite="None Secure">Old Joy by Holy Gifts</a>
                </iframe>
              </div>
            </div>

            <div className="row">
              <div className="col s12 left-align">
                <h5>Recorded and Mixed at Supermagic Studios in Landenburg PA || Genre: Alternative Folk </h5>
                <iframe id="youtube" 
                  src="https://www.youtube.com/embed/jsJlCgeZLuQ" 
                  samesite="None Secure" 
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                  title="Shane Palko Youtube Page"></iframe>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Discography;