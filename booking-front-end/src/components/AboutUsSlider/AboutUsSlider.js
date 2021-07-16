/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import PropTypes from 'prop-types';


const aboutUsSlider = (props)=>{

  const {images}=props

  const [index,setIndex]=useState(0)
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (

    <Carousel activeIndex={index} onSelect={handleSelect}>
      {images.map((item,selectedIndex)=>(
        <Carousel.Item>
          <img
            src={item}
            alt={`Slide ${selectedIndex+1}`}
          />
        </Carousel.Item>  
      ))}
    
    </Carousel>
  );
    
}
aboutUsSlider.propTypes={
  images:PropTypes.arrayOf().isRequired
}
export const AboutUsSlider=aboutUsSlider