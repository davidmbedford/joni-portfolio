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
                <ul className="collapsible">
                  <li>
                    <div className="collapsible-header bold">Dynamics</div>
                    <div className="collapsible-body">
                      <p>Sennheiser MD421 x 2</p>
                      <p>Sennheiser e609</p>
                      <p>Shure SM 57</p>
                      <p>Shure SM 58 X 3</p>
                      <p>Audio Technica Pro 25 x 2</p>
                      <p>Beyerdynamic M88</p>
                      <p>AKG D112</p>
                      <p>EV 635a</p>
                      <p>Various oddball dynamics</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header bold">Ribbon</div>
                    <div className="collapsible-body">
                      <p>Stellar RSM 3 x 2</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header bold">Condensors</div>
                    <div className="collapsible-body">
                      <p>Oktava MK 012 x2</p>
                      <p>OktavaMod MK 219</p>
                      <p>Milab 96b x 2</p>
                      <p>GrooveTubes st69 tube mic</p>
                      <p>CAD E200</p>
                      <p>Audio technica 4033a</p>
                      <p>Audio Technica boundary mic x 2</p>
                    </div>
                  </li>
                </ul>
              </div>

            <div className="row left-align">
              <h3>Instruments</h3>

              <div className="col s12">
                <ul className="collapsible">
                  <li>
                    <div className="collapsible-header bold">Drums</div>
                    <div className="collapsible-body">
                      <p>1970 Slingerland 5 piece</p>
                      <p>Various snares and cymbals</p>
                      <p>1967~ Ludwig 22 x 14</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header bold">Amps</div>
                    <div className="collapsible-body">
                      <p>1967 Fender Bandmaster Reverb</p>
                      <p>Sunn Concert Lead red knob</p>
                      <p>Hammond ao 35 conversion (Dr Z carmin Ghia)</p>
                      <p>Ampeg Gemini 2</p>
                      <p>Peavey Classic VT</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header bold">Cabs</div>
                    <div className="collapsible-body">
                      <p>2 x 15 sunn cab jbl k140</p>
                      <p>Peavey 2 x 12 cab</p>
                      <p>1x 10 weber cab</p>
                      <p>2x10 bass cab</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header bold">Guitars</div>
                    <div className="collapsible-body">
                      <p>Peavey T60</p>
                      <p>Peavey Patriot</p>
                      <p>Hamer Double Cut</p>
                      <p>Vantage Bass</p>
                    </div>
                  </li>

                </ul>
              </div>
            </div>


            <div className="row left-align">
              <h3>Miscellaneous</h3>

              <div className="col s12">
                <ul className="collapsible">
                  <li>
                    <div className="collapsible-header bold">Outboard</div>
                    <div className="collapsible-body">
                      <p>Carvin MX1688</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header bold">Converters</div>
                    <div className="collapsible-body">
                      <p>Motu 8 pre es</p>
                      <p>Focusrite Clarett octopre</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header bold">Programs</div>
                    <div className="collapsible-body">
                      <p>REAPER</p>
                      <p>Pro-tools</p>
                      <p>LOGIC</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header bold">Tape Machine</div>
                    <div className="collapsible-body">
                      <p>Otari MX 5050 b3 8 track 1/2</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header bold">Dynamics</div>
                    <div className="collapsible-body">
                      <p>Ashly CL 50</p>
                      <p>Ashly CL 52</p>
                      <p>DBX 163 xt x2</p>
                      <p>DBX 263 xt</p>
                      <p>Symtrix 525</p>
                      <p>Orban 414</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header bold">EQ</div>
                    <div className="collapsible-body">
                      <p>Orban 626a EQ</p>
                      <p>Peavey EQ</p>
                      <p>Rane EQ</p>
                    </div>
                  </li>
                  <li>
                    <div className="collapsible-header bold">FX</div>
                    <div className="collapsible-body">
                      <p>Fisher Stereo Expander</p>
                      <p>Alesis microverb</p>
                    </div>
                  </li>
                </ul>
              </div>
              </div>
            </div>


  <Collapsible accordion>
  <CollapsibleItem
    expanded={false}
    header="Better safe than sorry. That's my motto."
    node="div"
  >
    Better safe than sorry. That's my motto.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Yeah, you do seem to have a little 'shit creek' action going."
    node="div"
  >
    Yeah, you do seem to have a little 'shit creek' action going.
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="You know, FYI, you can buy a paddle. Did you not plan for this contingency?"
    node="div"
  >
    <p>You know, FYI, you can buy a paddle. Did you not plan for this contingency?</p>
    <p>Yeah, you do seem to have a little 'shit creek' action going.</p>
  </CollapsibleItem>
</Collapsible>


          </div>
        </div>
      </div>
    </>
    );
  }
}

export default Gear;