import React from 'react'
import { Header, Activity} from '../../components'

import ActivityItems from "./ActivityItems";
import { withTranslation } from 'react-i18next';

import './styles/styles.scss'

const activities=(props)=>{
  const {}=props
  const renderActivities=()=>{
    return ActivityItems.map((item,index)=>(
      <Activity
        key={index}
        title={item.title}
        image={item.img}
        description={item.description}
      />  
    ))
  }
  return (
    <div>
      <Header/>

      <div className="activities-Container">
        {renderActivities()}
      </div>
     
     
    </div>

  )
}

export  const Activities = (withTranslation()(activities))