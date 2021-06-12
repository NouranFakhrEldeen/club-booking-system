import React from 'react'
import { capitalizeFirstWord } from '../../helpers';
import './AboutUs.scss';
import bg from '../../images/bg.png';
import blueImage from '../../images/aboutUs.png';
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';
function Aboutus() {
  return (
    <div >
      <div className="overlay">
        <img src={bg}  alt=""/>
        <div className="text-wrapper">
          <h2 className="text">{i18n.t('aboutUs.title')}</h2>
          <p className='centerText'>The center contributes to the development of youth and youth by investing time and 
practicing various spiritual, social, cultural, scientific and sports activities to equip them 
with the skills that ensure bearing responsibility and keep pace with the information age 
and prepare them to compete in the labor market in light of the new and successive 
changes of the international community</p>
          <button className='moreButton'>
            {i18n.t('aboutUs.more')}
          </button>
        </div>
      </div>
    </div>
  )
}

export const AboutUs = (withTranslation()(Aboutus));

