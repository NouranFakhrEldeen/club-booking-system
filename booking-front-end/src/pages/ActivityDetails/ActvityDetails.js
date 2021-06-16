import React from 'react'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next';

import { Header, Footer} from '../../components'
import i18n from '../../i18n';



const activityDetails=(props)=>{
    console.log("props", props.location.state)
return (
    <div>
    <Header/>
    <div>
        <img ></img>
    </div>
 <Footer/>
    </div>
   
)

}
export const ActivityDetails = (withTranslation()(activityDetails))
