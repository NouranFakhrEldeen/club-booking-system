/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

import './header.scss';
import i18n from '../../i18n';

import {Navbar, Nav, Carousel, Image} from 'react-bootstrap'
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

import  logo  from "../../images/logo.png";


function header({
 
}) {


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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#Activities">Activities</Nav.Link>
          <Nav.Link href="#Gallery">Gallery</Nav.Link>
          <Nav.Link href="#AboutUs">About As </Nav.Link>
        </Navbar>
      </div>
     

    
    </div>
  );
}

const addToProps = () => {
  return {
   
  };
};

export const Header = connect(
  addToProps
)(withTranslation()(header));


