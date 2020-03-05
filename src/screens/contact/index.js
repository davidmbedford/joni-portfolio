import React from 'react';
// import logo from '../../logo.svg';

function Contact() {
  return (
    <div className="App" id="contactnav">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="container">

          <div className="row">
            <div className="col s12 headingBorder">
              <h1>Contact</h1>
            </div>
          </div>

          <div className="container">
            <div className="row">
              <div className="col m10 offset-m1 s12">
                <div className="row">
                  <form className="col s12">
                    <div className="row">
                      <div className="input-field col s12">
                        <input id="name" type="text" />
                        <label for="name">Name</label>
                      </div>
                      <div className="input-field col s12">
                        <input id="email" type="email" className="form-input" />
                        <label for="email">Email</label>
                      </div>
                      <div className="input-field col s12">
                        <textarea id="message" className="materialize-textarea"></textarea>
                        <label for="message">Message</label>
                      </div>
                    </div>
                    <div className="divider"></div>
                    <div className="row">
                      <div className="col m12">
                        <p className="right-align"><button className="btn btn-large waves-effect waves-light" type="button" name="action">Send Message</button></p>
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