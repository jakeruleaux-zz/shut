import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';
import { createStore} from 'redux';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { combineReducers } from 'redux';
import rollDice from './reducers/roll-dice-reducer';
import reducer from './reducers/new-player-reducers';

const reducers = combineReducers({rollDice})

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
     <App />
   </HashRouter>
  </Provider>,
  document.getElementById('react-app-root')
);
