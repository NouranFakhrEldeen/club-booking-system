/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

import './header.scss';
import i18n from '../../i18n';

import {Navbar, Nav} from 'react-bootstrap'
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import  logo  from "../../images/logo.png";


export function NavBar({t:translate}) {

  useEffect(() => {
    if (i18n.language !== 'en') {
      i18n.changeLanguage('fi');
    }
  }, []);
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
                                              

  return (
    <div>
      <div 
      >
        <Navbar scrolling dark expand="md" fixed="top">
          <Navbar.Brand href="#home">
            <img
              className="d-block w-100"
              src={logo}
            
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
         
          </Nav>
          <Nav.Link href="#home">{translate("header.home")}</Nav.Link>
          <Nav.Link href="#Activities">{translate("header.activities")}</Nav.Link>
          <Nav.Link href="#Gallery">{translate("header.gallery")}</Nav.Link>
          <Nav.Link href="#AboutUs">{translate("header.aboutAs")} </Nav.Link>
        
      
          <div className='language-switcher'>
            {i18n.language === 'ar' &&
          <button className='select-en' onClick={() => changeLanguage('en')}>
          

            <span className='d-inline-block margin-left-10'>English</span>
          </button>}

            {i18n.language === 'en' &&
          <button className='select-fi' onClick={() => changeLanguage('ar')}>
          
            <span className='d-inline-block margin-left-10'>Arabic</span>
          </button>}
          </div>
        
          
        </Navbar>
    
      </div>
     

    
    </div>
  );
}

export const Header = (withTranslation()(NavBar));



