import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next';
import Icon from 'react-web-vector-icons';
import Shimmer from "react-shimmer-effect";
import injectSheet from "react-jss";
import i18n from '../../i18n';
import { useHistory , Link } from 'react-router-dom';
import "./Activity.scss";

import clock from '../../images/clock.png';

import StyleSheet from "./ActivityLoadingStyles";

const ActivityItem=(props)=>{
  const {image,title,description,isActivityScreen,cost,time,t:translate,isLoading,classes,activityId}=props
  let history = useHistory();
  const handleClick=()=>{
    history.push(`activityDetails/${activityId}`)
  }
  const renderButton=()=>{
    if(!isActivityScreen){
      return (
        <div className="activityBottomDetails">
          <p className="details">{cost} {translate('common.egp')} </p>
          <div className="seperator"/>
          <div className="hourDetails">
            <img src={clock}  alt="" className="clock"/>
            <p className="details">{time}</p>
          </div>

        </div>
      )
    }
    return ( 
      <Link to={{
        pathname: `activityDetails/${activityId}`,
      
      }}
      >
        <button className="button">
          {i18n.t('activity.viewActivity')}
        </button>
      </Link>
    )
  }
  const renderContent=()=>{
    if(isLoading){
      return(
        <>
          <Shimmer>
            <div className={classes.line} />
          </Shimmer>
          <Shimmer>
            <div className={classes.container}>
              <div className={classes.title} />
            </div>
          </Shimmer>
         
          <div className={classes.descriptionContainer}>
            {Array(3).fill(0).map((item,value)=>(
              <Shimmer>
                <div className={classes.description} />
              </Shimmer>
            ))}
          </div>
          <div className={classes.bottomContainer}>
            {Array(2).fill(0).map((_,index)=>(
              <Shimmer>
                <div className={classes.bottomShimmer} />
              </Shimmer>
            ))}
          </div>
        </>
      )
    }
    return (
      <>
        <img src={image}
          alt={title}
          className="activity-image"
        />
        <div className="inner-container" >
          <p className="title">{title} </p>
          <p className="description">{description}</p>
        </div>
        {renderButton()}  
      </>

    )
  }
  return(
    <div className="mainContainer">
      {renderContent()}
    </div>
  )
}

ActivityItem.defaultProps={
  isActivityScreen:true,
  cost:0,
  time:null,
  isLoading:false
}

ActivityItem.proptypes={
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isActivityScreen: PropTypes.bool,
  cost: PropTypes.number,
  time: PropTypes.string,
  isLoading: PropTypes.bool
}

export const Activity = (withTranslation()(injectSheet(StyleSheet)(ActivityItem)))
