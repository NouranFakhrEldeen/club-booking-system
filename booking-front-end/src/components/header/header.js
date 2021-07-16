/* eslint-disable no-unused-vars */
import React, { useEffect , useState , useRef } from 'react';
import { capitalizeFirstWord } from '../../helpers';
import './header.scss';
import i18n from '../../i18n';

import {Navbar, Nav} from 'react-bootstrap'

import { withTranslation } from 'react-i18next';

import  logo  from "../../images/logo.png";
import headerImage from "../../images/bg.png"

export function NavBar({t:translate , homePage }) {

  useEffect(() => {
    if (i18n.language !== 'en') {
      i18n.changeLanguage('ar');
    }
  }, []);
  const changeLanguage = (lng) => {
    window.location.reload();
    i18n.changeLanguage(lng);
  };
                                              
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div>
      <div className={"header" }  style={{paddingBottom:  homePage ? "": "15%"}}>
        <Navbar collapseOnSelect expand="sm" fixed="top" style={{ transition: '1s ease',
          backgroundColor: navBackground ? '#222529' : 'transparent',
          backgroundImage: homePage ?'': ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${headerImage})`,
          backgroundRepeat:homePage ?'':  "no-repeat",
          backgroundSize:homePage ?'': "cover",
          backgroundPosition: 'center',
       
          
        }}>
          <Navbar.Brand href="#home">
            <img
              className="d-block w-100"
              src={logo}
           
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
         
            </Nav>
            <Nav.Link className={"link-text"} href="#home">{translate("header.home")}</Nav.Link>
            <Nav.Link className={"link-text"}href="#Activities">{capitalizeFirstWord(translate("header.activities"))}</Nav.Link>
            <Nav.Link className={"link-text"} href="#Gallery">{capitalizeFirstWord(translate("header.gallery"))}</Nav.Link>
            <Nav.Link className={"link-text"}href="#AboutUs">{capitalizeFirstWord(translate("header.aboutAs"))} </Nav.Link>
            <Nav.Link > {i18n.language === 'ar' &&
          <button className= "transparent-button" onClick={() => changeLanguage('en')}>
          

            <span className='d-inline-block margin-left-10'>{capitalizeFirstWord("English")}</span>
          </button>}

            {i18n.language === 'en' &&
          <button className= "transparent-button"  onClick={() => changeLanguage('ar')}>
          
            <span className='d-inline-block margin-left-10'>{capitalizeFirstWord("arabic")}</span>
          </button>}</Nav.Link>
          </Navbar.Collapse>
        
      
          <div className='language-switcher'>
           
          </div>
        
          
        </Navbar>
    
      </div>
    </div>
     
  );
}

export const Header = (withTranslation()(NavBar));



