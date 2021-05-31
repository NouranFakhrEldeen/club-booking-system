/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

import './slider.scss';
import i18n from '../../i18n';

import { Carousel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withTranslation } from 'react-i18next';
import slide1 from '../../images/CrossFit.jpg';
import slide2 from '../../images/3e.jpg';
import slide3 from '../../images/bg.png';
function slider({}) {
  return (
    <div className='homePage-carousel'>
      <Carousel slide fade>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to</h3>
            <h1>Saint George Center</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Welcome to</h3>
            <h1>Saint George Center</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Welcome to</h3>
            <h1>Saint George Center</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export const Slider = withTranslation()(slider);
