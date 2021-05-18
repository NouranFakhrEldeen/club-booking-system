import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
// import { createBrowserHistory } from 'history';
import { store } from './redux';
// import bootstrap
import 'bootstrap/scss/bootstrap.scss';

// eslint-disable-next-line no-unused-vars
import { PersistGate } from 'redux-persist/integration/react';
// eslint-disable-next-line no-unused-vars
import { persistStore, persistReducer } from 'redux-persist';
import { RootContainer } from './pages';

// eslint-disable-next-line no-unused-vars
const App = ({ t: translate }) => {
  // eslint-disable-next-line no-unused-vars
  let persistor = persistStore(store);


  // var hist = createBrowserHistory();
  return (
    <div>

      <Provider store={store}>

        <RootContainer />

      </Provider>
    </div>
  );
};

export default App;
