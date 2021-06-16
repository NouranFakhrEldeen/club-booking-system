import React from 'react'
import { capitalizeFirstWord } from '../../helpers';
import './AboutUs.scss';
import bg from '../../images/bg.png';
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';
function Aboutus() {
  return (
    <div >
      <div className="overlay">
        <img src={bg}  alt=""/>
        <div className="text-wrapper">
          <h2 className="text">{i18n.t('aboutUs.title')}</h2>
          <p className='centerText'>{i18n.t('aboutUs.description')}</p>
          <button className='moreButton'>
            {i18n.t('aboutUs.more')}
          </button>
        </div>
      </div>
    </div>
  )
}

export const AboutUs = (withTranslation()(Aboutus));

