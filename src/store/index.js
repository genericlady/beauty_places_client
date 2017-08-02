import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import beautyPlaces from '../reducers/beautyPlaces';
import currentLocation from '../reducers/currentLocation';
import filters from '../reducers/filters';
import coords from '../reducers/coords';

const middlewares = [thunk];
const reducers = combineReducers({
  beautyPlaces,
  currentLocation,
  filters,
  coords
});

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && 
  window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middlewares)
)
