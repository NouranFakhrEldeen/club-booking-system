import React from 'react'
import { Header, Gallery} from '../../components'

import { withTranslation } from 'react-i18next';



const gallery=(props)=>{
  const {}=props
 
  return (
    <div>
      <Header/>

      <Gallery></Gallery>
     
     
    </div>

  )
}

export  const GalleryContainer = (withTranslation()(gallery))