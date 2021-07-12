/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Shimmer from "react-shimmer-effect";
import injectSheet from "react-jss";

import { AboutUs, Activity, Gallery, Header, Slider } from '../../components';

import { Footer } from '../../components/Footer/Footer';

import ActivityItems from "../Activities/ActivityItems";

import './styles/style.scss';


// import i18n from '../../i18n';



const StyleSheet = {
  container: {
    border: "0px solid rgba(255, 255, 255, 1)",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, .1)",
    borderRadius: "4px",
    backgroundColor: "white",
    display: "flex",
    padding: "16px",
    width: "200px"
  },
  circle: {
    height: "56px",
    width: "56px",
    borderRadius: "50%"
  },
  line: {
    width: "96px",
    height: "8px",
    alignSelf: "center",
    marginLeft: "16px",
    borderRadius: "8px"
  }
};

const home = ({
  t: translate,
  classes
 
}) => {
  // let history = useHistory();

  const [loading,setLoading]= useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  },[])

  const renderSubscriptionPrices=()=>{
    return ActivityItems.slice(0,3).map((item,index)=>(
      <Activity
        key={index}
        title={item.title}
        image={item.img}
        description={item.description}
        isActivityScreen={false}
        cost={item.cost}
        time={item.time}
        isLoading={loading}
      />

    ))
  }

  return (
    <div className='home-page'>
      <Header homePage/>
      <Slider></Slider>
      <div className='subscriptionContainer'>
        <p className='subscriptionTitle'>{translate('home.subscriptionPrices')}</p>
        <div className='subscriptionPriceContainer'>
          {renderSubscriptionPrices()}
        </div>

      </div> 
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
)(withTranslation()(injectSheet(StyleSheet)(home)));
