import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { AboutUs, Gallery, Header, Slider } from '../../components';
import { connect } from 'react-redux';

import './styles/style.scss';
import { Footer } from '../../components/Footer/Footer';

// import i18n from '../../i18n';



const home = ({
  t: translate,
 
}) => {
  // let history = useHistory();

  return (
    <div className='home-page'>
      <Header homePage/>
      <Slider></Slider>
     
      <AboutUs></AboutUs>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
  
  };
};
export const Home = connect(

  mapDispatchToProps
)(withTranslation()(home));
