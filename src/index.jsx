import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { combineReducers } from 'redux';
import name from './reducers/new-player-reducers';

const reducer = combineReducers({ name})

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
     <App />
   </HashRouter>
  </Provider>,
  document.getElementById('react-app-root')
);