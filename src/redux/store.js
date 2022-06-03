import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialState from './initialState';

const subreducers = {};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(),

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

export default store;
