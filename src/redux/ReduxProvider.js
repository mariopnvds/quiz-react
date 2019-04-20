import { Provider } from 'react-redux';
import GlobalState from './reducers';

import React, { Component } from 'react';
import App from '../App';

//import { questions } from '../assets/mock-data'

import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

const loggerMiddleware = createLogger()

export default class ReduxProvider extends Component {
  constructor(props) {
    super(props);

    // initState should be an external file. That way it'd be reachable in all the project easily...
    this.initialState = {
      score: 0,
      finished: false,
      currentQuestion: 0,
      questions: {
        isFetching: false,
        didInvalidate: false,
        token: 'e2922fc0105402baef54',
        questions: []
      },
      timerId: 0,
      timeLeft: 90000 // OJO!: si esto se cambia, ha de cambiarse en reducers.js->timeLeft(->case RESTART)
    };

    this.configureStore = this.configureStore.bind(this);
    this.store = this.configureStore();
  }

  render() {
    return (
      <Provider>
        <div style={{ height: '100%' }}>
          <App store={this.store} />
        </div>
      </Provider>
    );
  }

  configureStore() {
    return createStore(GlobalState, this.initialState,
      applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
      ));
  }
}