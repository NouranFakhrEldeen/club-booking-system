import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { withTranslation } from 'react-i18next'

import { Header} from '../../components'
import {AboutUsSlider} from '../../components';

import Images from "../../styles/images/Images";


import './styles/styles.scss'

const about=(props)=>{
  return (
    <div>
      <Header/>
      <div className="container">
        <Row>
          <Col>
            <AboutUsSlider
              images={[Images.glee.default]}
            />
          </Col>
          <Col>
            <p className="church-container">Saint George Center</p>
            <p className="aboutDetails">
            The center contributes to the development of young people and the youth by 
   investing time and practicing various spiritual, social, cultural, scientific and sports
   activities to equip them with the skills that ensure bearing responsibility, keep up
   with the information age and prepare them for competition in the labor market in
 light of the new and successive changes of the international community.
   It aims to prepare children and youth and educate them in a good and balanced 
   upbringing, develop their capabilities, discover their talents, and nurture their 
   creativity and innovation. The Center takes all means and means to achieve these goals, 
   and in particular the following:
            </p> 
          </Col>
        </Row>
        <Row>
          {/* <p className="aboutDetails">
            The center contributes to the development of young people and the youth by 
   investing time and practicing various spiritual, social, cultural, scientific and sports
   activities to equip them with the skills that ensure bearing responsibility, keep up
   with the information age and prepare them for competition in the labor market in
 light of the new and successive changes of the international community.
   It aims to prepare children and youth and educate them in a good and balanced 
   upbringing, develop their capabilities, discover their talents, and nurture their 
   creativity and innovation. The Center takes all means and means to achieve these goals, 
   and in particular the following:
          </p> */}

        </Row>
      </div>
    </div>
        
       
  //         {/* <div className="aboutDetailsContainer">
  //           <p className="church-container">Saint George Center</p>
  //           <p className="aboutDetails">
  //           The center contributes to the development of young people and the youth by 
  // investing time and practicing various spiritual, social, cultural, scientific and sports
  // activities to equip them with the skills that ensure bearing responsibility, keep up
  // with the information age and prepare them for competition in the labor market in
  // light of the new and successive changes of the international community.
  // It aims to prepare children and youth and educate them in a good and balanced 
  // upbringing, develop their capabilities, discover their talents, and nurture their 
  // creativity and innovation. The Center takes all means and means to achieve these goals, 
  // and in particular the following:
  //           </p>
  //         </div>
  //       </div>
  //     </div> */}
  )
}

export const About = (withTranslation()(about))