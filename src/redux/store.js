import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import { combineEpics,createEpicMiddleware } from 'redux-observable';
import fetchMovieList from '../services';


const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,

  applyMiddleware(
    epicMiddleware,
    thunk

  )
);
epicMiddleware.run(combineEpics(
  fetchMovieList
));

export default store;