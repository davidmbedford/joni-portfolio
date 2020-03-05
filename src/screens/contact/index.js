import React from 'react';
// import logo from '../../logo.svg';

function Contact() {
  return (
    <div className="App" id="contactnav">
      <header className="App-header">
        <div className="container">

          <div className="row">
            <div className="col s12 headingBorder">
              <h1>Contact</h1>
            </div>
          </div>

          <div className="container contactFont">
            <div className="row">
              <div className="col m10 offset-m1 s12">
                <div className="row">
                  <form className="col s12" action="mailto:david.m.bedford1@gmail.com">
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="name" type="text" />
                        <label className="contactFont" for="name">Name</label>
                      </div>
                      <div className="input-field col s12">
                        <input id="email" type="email" className="form-input validate" />
                        <label className="contactFont" for="email">Your Email</label>
                      </div>
                      {/* <div className="input-field col s12">
                        <textarea id="message" className="materialize-textarea"></textarea>
                        <label for="message">Message</label>
                      </div> */}
                    </div>
                    <div className="divider"></div>
                    <div className="row">
                      <div className="col m12">
                        <p className="right-align">
                          <button className="btn waves-effect waves-light blue-grey lighten-3 contactFont" type="submit" name="action">
                            Send Message
                          </button>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
}

export default Contact;