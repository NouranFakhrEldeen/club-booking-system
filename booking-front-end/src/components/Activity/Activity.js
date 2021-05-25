import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next';
import "./Activity.scss";

const activity=(props)=>{
  const {image,title,description , t:translate}=props
  return(
    <div className="mainContainer">
      <img src={image}
        alt={title}
        className="activity-image"
      />
      <div className="inner-container" >
        <p className="title">{title} </p>
        <p className="description">{description}</p>
        <button className="button">
        View Activity
        </button>
      </div>
  
    </div>
  )
}
activity.proptypes={
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export  const Activity = (withTranslation()(activity))
