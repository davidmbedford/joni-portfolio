import React from 'react';
import './style.css';

function Footer() {
  return (
    <>
      <footer className="page-footer" id="footertop">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="footer-logo">Earth Songs Recording</h5>
              <p className="text-lighten-4"><span className="bold">Email:</span> earthsongsrecording@gmail.com</p>
              <p className="text-lighten-4"><span className="bold">Phone:</span> (302)-252-7476</p>
            </div>
          </div>
        </div>
        <div className="footer-copyright" id="footerbottom">
          <div className="container">
            <div className="row">
              <div className="col s6" id="myAdvert">
                this site designed by <span><a href="https://davidmbedford.herokuapp.com/" id="mySite" target="_blank">davidmbedford</a></span>
              </div>
              <div className="col s6">
                <a className="grey-text text-lighten-4 right" href="https://www.instagram.com/earthsongsrecording/?hl=en" target="_blank"><i className="fab fa-instagram fa-lg"></i></a>
                <a className="grey-text text-lighten-4 right" href="https://www.facebook.com/dankelfers" target="_blank"><i className="fab fa-facebook fa-lg"></i></a>
                <a className="grey-text text-lighten-4 right" href="https://open.spotify.com/playlist/74bOEmKcqfo20ZZTS6dbXz" target="_blank"><i className="fab fa-spotify fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;