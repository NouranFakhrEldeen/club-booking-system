import React from 'react';
import logo from '../../images/logo.png';
import './footer.scss';
function footer() {
  return (
    <footer class="footer-area footer--light">
      <div class="footer-big">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-12">
              <div class="footer-widget">
                <div class="widget-about">
                  <img src={logo}></img>
                  <ul class="contact-details">
                    <li>
                      <span class="icon-earphones"></span> © 2020 - All rights
                      reserved
                    </li>
                   
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-md-3 col-sm-4">
              <div class="footer-widget">
                <div class="footer-menu footer-menu--1">
                  <h3 class="footer-widget-title">CONTACT INFO</h3>
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

            <div class="col-md-3 col-sm-4">
              <div class="footer-widget">
                <div class="footer-menu">
                  <h3 class="footer-widget-title">About Center</h3>
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

            <div class="col-md-3 col-sm-4">
              <div class="footer-widget">
                <div class="footer-menu no-padding">
                  <h3 class="footer-widget-title">Useful Links</h3>
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
