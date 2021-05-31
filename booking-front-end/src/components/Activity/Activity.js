import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-web-vector-icons';

import "./Activity.scss";
import i18n from '../../i18n';

const Activity=(props)=>{
  const {image,title,description,isActivityScreen,cost,time}=props

  const renderButton=()=>{
    if(!isActivityScreen){
      return (
        <div className="activityBottomDetails">
          <p className="details">{cost} EGP</p>
          <div className="seperator"/>
          <div className="hourDetails">
            <Icon
              name='time-outline'
              font='ionicons'
              color='green'
              size={20}
              // style={{}}
            />
            <p className="details">{time}</p>

          </div>

        </div>
      )
    }
    return (
      <button className="button">
        {i18n.t('activity.viewActivity')}
      </button>
    )
  }
  return(
    <div className="mainContainer">
      <img src={image}
        alt={title}
        className="activity-image"
      />
      <div className="inner-container" >
        <p className="title">{title} </p>
        <p className="description">{description}</p>
      </div>
      {renderButton()}

    </div>
  )
}

Activity.defaultProps={
  isActivityScreen:true,
  cost:0,
  time:null
}

Activity.proptypes={
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isActivityScreen: PropTypes.bool,
  cost: PropTypes.number,
  time: PropTypes.string
}
export default Activity
