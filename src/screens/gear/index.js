import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import './style.css';

class Gear extends Component {
  render() {
    return (
      <>
      <div className="App" id="gearnav">
        <div className="App-header">
          <div className="container">

            <div className="row">
              <div className="col s12 headingBorder">
                <h1>Gear</h1>
              </div>
            </div>

            <div className="row left-align">
              <h3>Mics</h3>

              <div className="col s12">
                <Collapsible accordion>
                  <CollapsibleItem expanded={false} header="Dynamics" node="div">
                    <p>Sennheiser MD421 x 2</p>
                    <p>Sennheiser e609</p>
                    <p>Shure SM 57</p>
                    <p>Shure SM 58 X 3</p>
                    <p>Audio Technica Pro 25 x 2</p>
                    <p>Beyerdynamic M88</p>
                    <p>AKG D112</p>
                    <p>EV 635a</p>
                    <p>Various oddball dynamics</p>
                  </CollapsibleItem>
                  <CollapsibleItem expanded={false} header="Ribbon" node="div">
                    <p>Stellar RSM 3 x 2</p>
                  </CollapsibleItem>
                  <CollapsibleItem expanded={false} header="Condensors" node="div">
                    <p>Oktava MK 012 x2</p>
                    <p>OktavaMod MK 219</p>
                    <p>Milab 96b x 2</p>
                    <p>GrooveTubes st69 tube mic</p>
                    <p>CAD E200</p>
                    <p>Audio technica 4033a</p>
                    <p>Audio Technica boundary mic x 2</p>
                  </CollapsibleItem>
                </Collapsible>
              </div>

            <div className="row left-align">
              <h3>Instruments</h3>
              <div className="col s12">
                <Collapsible accordion>
                  <CollapsibleItem expanded={false} header="Drums" node="div">
                    <p>1970 Slingerland 5 piece</p>
                    <p>Various snares and cymbals</p>
                    <p>1967~ Ludwig 22 x 14</p>
                  </CollapsibleItem>
                  <CollapsibleItem expanded={false} header="Amps" node="div">
                    <p>1967 Fender Bandmaster Reverb</p>
                    <p>Sunn Concert Lead red knob</p>
                    <p>Hammond ao 35 conversion (Dr Z carmin Ghia)</p>
                    <p>Ampeg Gemini 2</p>
                    <p>Peavey Classic VT</p>
                  </CollapsibleItem>
                  <CollapsibleItem expanded={false} header="Cabs" node="div">
                    <p>2 x 15 sunn cab jbl k140</p>
                    <p>Peavey 2 x 12 cab</p>
                    <p>1x 10 weber cab</p>
                    <p>2x10 bass cab</p>
                  </CollapsibleItem>
                  <CollapsibleItem expanded={false} header="Guitars" node="div">
                    <p>Peavey T60</p>
                    <p>Peavey Patriot</p>
                    <p>Hamer Double Cut</p>
                    <p>Vantage Bass</p>
                  </CollapsibleItem>
                </Collapsible>
              </div>
            </div>

            <div className="row left-align">
              <h3>Miscellaneous</h3>
              <div className="col s12">
                <Collapsible accordion>
                  <CollapsibleItem expanded={false} header="Outboard" node="div">
                    <p>Carvin MX1688</p>
                  </CollapsibleItem>
                  <CollapsibleItem expanded={false} header="Converters" node="div">
                    <p>Motu 8 pre es</p>
                    <p>Focusrite Clarett octopre</p>
                  </CollapsibleItem>
                  <CollapsibleItem expanded={false} header="Programs" node="div">
                    <p>REAPER</p>
                    <p>Pro-tools</p>
                    <p>LOGIC</p>
                  </CollapsibleItem>
                  <CollapsibleItem expanded={false} header="Tape Machine" node="div">
                    <p>Otari MX 5050 b3 8 track 1/2</p>
                  </CollapsibleItem>
                  <CollapsibleItem expanded={false} header="Dynamics" node="div">
                    <p>Ashly CL 50</p>
                    <p>Ashly CL 52</p>
                    <p>DBX 163 xt x2</p>
                    <p>DBX 263 xt</p>
                    <p>Symtrix 525</p>
                    <p>Orban 414</p>
                  </CollapsibleItem>
                  <CollapsibleItem expanded={false} header="EQ" node="div">
                    <p>Orban 626a EQ</p>
                    <p>Peavey EQ</p>
                    <p>Rane EQ</p>
                  </CollapsibleItem>
                  <CollapsibleItem expanded={false} header="FX" node="div">
                    <p>Fisher Stereo Expander</p>
                    <p>Alesis microverb</p>
                  </CollapsibleItem>
                </Collapsible>
              </div>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }
}

export default Gear;