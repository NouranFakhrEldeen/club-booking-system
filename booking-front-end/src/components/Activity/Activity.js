import React from 'react'
import PropTypes from 'prop-types'

import "./Activity.scss";

const Activity=(props)=>{
  const {image,title,description}=props
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
Activity.proptypes={
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
export default Activity
