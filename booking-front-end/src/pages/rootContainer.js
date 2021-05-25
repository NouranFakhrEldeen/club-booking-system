import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import { errorHandlerActions } from '../redux/ErrorHandler';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/**************Styles & fonts****************/
// import general styles

import '../styles/fonts/fontawesome.css';
import '../styles/fonts/light.css';
// import bootstrap
import 'bootstrap/scss/bootstrap.scss';
// eslint-disable-next-line no-unused-vars
// import Audit from './Audit/Audit';
// import ConfirmSetList from './ConfirmSet/ConfirmSet.List';
import {
  Home,
  Activities
} from './';

import {
 
  ErrorHandlingModal,
} from '../components';



const rootContainer = ({
  t: translate,
  errorHanlder,
}) => {

  // let [title, setTitle] = useState('');


  // document.title = translate(title);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/activities' component={Activities} />
    
        </Switch>
        {errorHanlder.DISPLAY_ERROR_MESSAGE_BOOLEAN && <ErrorHandlingModal />}
      </Router>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errorHanlder: state.errorHanlder,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...errorHandlerActions,
  }, dispatch);
}

export const RootContainer = connect(mapStateToProps, mapDispatchToProps)(withTranslation()(rootContainer));