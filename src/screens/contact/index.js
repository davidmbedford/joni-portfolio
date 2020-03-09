import React from 'react';
import './style.css';

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

            <div className="contactFont">
              <div className="row">
                <div className="col s12">
                  <p>For booking inquiries, rates, or any questions about my process,
                    please email me at: 
                  </p>
                  <p className="contactinfo">earthsongsrecording@gmail.com</p>
                  <p>I can also be reached via phone at <span className="contactinfo">(302)-252-7476</span></p>
                  <p>Find me on social media at:                        
                    <a className="black-text text-lighten-4" href="https://www.facebook.com/dankelfers" target="_blank"><i className="fab fa-facebook fa-lg"></i></a>
                    <a className="black-text text-lighten-4" href="https://www.instagram.com/earthsongsrecording/?hl=en" target="_blank"><i className="fab fa-instagram fa-lg"></i></a>
                  </p>
                </div>
              </div>
            </div>

          </div>
        </header>
      </div>
    );
  }

export default Contact;