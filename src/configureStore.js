import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import app_reducer from './containers/App/reducers';
import login_reducer from './containers/Login/reducers';
import user_reducer from './containers/User/reducers';

import thunk from 'redux-thunk';
import { combineReducers } from 'redux'

export default function configureStore(initialState = {}, history) {

  // const middlewares = [routerMiddleware(history)];

  let middlewares = [
    routerMiddleware(history),
    thunk
  ]
  const applied_middleware = [applyMiddleware(...middlewares)];


  let all_reducers = combineReducers({
    app: app_reducer,
    login: login_reducer,
    user: user_reducer
  })


  const store = createStore(
    all_reducers,
    ...applied_middleware
  );


  return store;
}
