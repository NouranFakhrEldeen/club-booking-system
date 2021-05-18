/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

import './header.scss';
import i18n from '../../i18n';

import {Navbar, Nav} from 'react-bootstrap'
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';

function header({
 
}) {

 
  return (
    <div>
     
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">logo</Navbar.Brand>
        <Nav className="mr-auto">
         
        </Nav>
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#Activities">Activities</Nav.Link>
        <Nav.Link href="#Gallery">Gallery</Nav.Link>
        <Nav.Link href="#AboutUs">About As </Nav.Link>
      </Navbar>

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


