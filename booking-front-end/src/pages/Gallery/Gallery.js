import React from 'react'
import { Header, Gallery, Footer} from '../../components'

import { withTranslation } from 'react-i18next';



const gallery=(props)=>{
  const {}=props
 
  return (
    <div>
      <Header/>

      <Gallery></Gallery>
     
      <Footer/>
    </div>

  )
}

export  const GalleryContainer = (withTranslation()(gallery))