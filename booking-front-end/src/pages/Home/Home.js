import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import { withTranslation } from 'react-i18next';
import { Header } from '../../components';
import { connect } from 'react-redux';

import './styles/style.scss';

// import i18n from '../../i18n';



const home = ({
  t: translate,
 
}) => {
  // let history = useHistory();

  return (
    <div className='home-page'>
      <Header
      />

      <div className="container h-100">
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => {
  return {
  
  };
};
export const Home = connect(

  mapDispatchToProps
)(withTranslation()(home));
