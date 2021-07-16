import React from 'react';
import logo from '../../images/logo.png';
import './footer.scss';
function footer() {
  return (
    <footer className="footer-area footer--light">
      <div className="footer-big">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="footer-widget">
                <div className="widget-about">
                  <img src={logo}></img>
                  <ul className="contact-details">
                    <li>
                      <span className="icon-earphones"></span> © 2020 - All rights
                      reserved
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu footer-menu--1">
                  <h3 className="footer-widget-title">CONTACT INFO</h3>
                  <ul>
                    <li>
                      <h6>PHONE</h6>
                    </li>
                    <li>
                      <p>
                      010-1787-1000
                      </p>
                    </li>
                    <li>
                     
                    </li>
                    <li>
                      <h6>ADDRESS</h6>
                    </li>
                    <li>
                      <p>
                      177 El Hegaz St, Helioplis
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu">
                  <h3 className="footer-widget-title">About Center</h3>
                  <ul>
                    <li>
                      <h6>WORKING DAYS/HOURS</h6>
                    </li>
                    <li>
                      <p>
                      working hours ( 9 AM - 6 PM ) 
                      from Sunday to Thursday
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-3 col-sm-4">
              <div className="footer-widget">
                <div className="footer-menu no-padding">
                  <h3 className="footer-widget-title">Useful Links</h3>
                  <ul>
                    <li>
                      <a href="#Activities">Activities</a>
                    </li>
                    <li>
                      <a href="#Prices">Prices</a>
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export const Footer = footer;
