import React, {Component} from 'react';
// import logo from '../../logo.svg';

class Gear extends Component {
  componentDidMount() {
    const M = window.M;
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.collapsible');
      var instances = M.Collapsible.init(elems, {});
    });
  }

  render() {
  return (
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
            <div className="col">
              <p>Dynamics:</p>
                <li>Sennheiser MD421 x 2</li>
                <li>Sennheiser e609</li>
                <li>Shure SM 57</li>
                <li>Shure SM 58 X 3</li>
                <li>Audio Technica Pro 25 x 2</li>
                <li>Beyerdynamic M88</li>
                <li>AKG D112</li>
                <li>EV 635a</li>
                <li>Various oddball dynamics</li>
            </div>
            <div className="col">
              <p>Ribbon:</p>
                <li>Stellar RSM 3 x 2</li>
            </div>
            <div className="col">
              <p>Condensors:</p>
                <li>Oktava MK 012 x2</li>
                <li>OktavaMod MK 219</li>
                <li>Milab 96b x 2</li>
                <li>GrooveTubes st69 tube mic</li>
                <li>CAD E200</li>
                <li>Audio technica 4033a</li>
                <li>Audio Technica boundary mic x 2</li>
            </div>
          </div>

      <div className="row left-align">
        <h3>Instruments</h3>
          <div className="col">
            <p>Drums:</p>
              <li>1970 Slingerland 5 piece</li>
              <li>Various snares and cymbals</li>
              <li>1967~ Ludwig 22 x 14</li>
          </div>
          <div className="col">
            <p>Amps:</p>
              <li>1967 Fender Bandmaster Reverb</li>
              <li>Sunn Concert Lead red knob</li>
              <li>Hammond ao 35 conversion (Dr Z carmin Ghia)</li>
              <li>Ampeg Gemini 2</li>
              <li>Peavey Classic VT</li>
          </div>
          <div className="col">
            <p>Cabs:</p>
              <li>2 x 15 sunn cab jbl k140</li>
              <li>Peavey 2 x 12 cab</li>
              <li>1x 10 weber cab</li>
              <li>2x10 bass cab</li>
          </div>
          <div className="col">
            <p>Guitars:</p>
              <li>Peavey T60</li>
              <li>Peavey Patriot</li>
              <li>Hamer Double Cut</li>
              <li>Vantage Bass</li>
          </div>  
      </div>

      <div className="row left-align">
        <h3>Misc.</h3>
          <div className="col">
            <p>Outboard:</p>
              <li>Carvin MX1688</li>
          </div>
          <div className="col">
            <p>Converters:</p>
              <li>Motu 8 pre es</li>
              <li>Focusrite Clarett octopre</li>
          </div>
          <div className="col">
            <p>Programs:</p>
              <li>REAPER</li>
              <li>Pro-tools</li>
              <li>LOGIC</li>
          </div>
          <div className="col">
            <p>Tape Machine:</p>
              <li>Otari MX 5050 b3 8 track 1/2</li>
          </div>
          <div className="col">
            <p>Dynamics:</p>
              <li>Ashly CL 50</li>
              <li>Ashly CL 52</li>
              <li>DBX 163 xt x2</li>
              <li>DBX 263 xt</li>
              <li>Symtrix 525</li>
              <li>Orban 414</li>
          </div>
          <div className="col">
            <p>EQ:</p>
              <li>Orban 626a EQ</li>
              <li>Peavey EQ</li>
              <li>Rane EQ</li>
          </div>
          <div className="col">
            <p>FX:</p>
              <li>Fisher Stereo Expander</li>
              <li>Alesis microverb</li>
          </div>
        </div>

      </div>
    </div>
  </div>
    );
  }
}

export default Gear;