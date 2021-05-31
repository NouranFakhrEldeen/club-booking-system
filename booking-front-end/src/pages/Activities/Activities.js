import React from 'react'
import { Header} from '../../components'

import Activity from '../../components/Activity/Activity'

import ActivityItems from "./ActivityItems";

import './styles/styles.scss'

const Activities=(props)=>{
  const {}=props
  const renderActivities=()=>{
    return ActivityItems.map((item,index)=>(
      <Activity
        key={index}
        title={item.title}
        image={item.img}
        description={item.description}
        isActivityScreen={false}
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

export default Activities