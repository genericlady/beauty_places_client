import {
  fetchByCityState,
  fetchCurrentLocation
} from '../services/BeautyPlaceService';

const receivedBeautyPlaces = beautyPlaces => {
  return {
    type: 'RECEIVED_BEAUTY_PLACES',
    beautyPlaces
  }
}

const receivedCurrentLocation = currentLocation => {
  return {
    type: 'RECEIVED_CURRENT_LOCATION',
    currentLocation
  }
}

const changedFilters = filters => {
  return {
    type: 'CHANGED_FILTERS',
    filters
  }
}

export const getBeautyPlaces = (filters, currentLocation) => {
  return dispatch => {
    return fetchByCityState(currentLocation, filters)
      .then(beautyPlaces => dispatch(receivedBeautyPlaces(beautyPlaces)));
  }
}

export const getCurrentLocation = (latitude, longitude) => {
  return dispatch => {
    const currentLocation = fetchCurrentLocation(latitude, longitude); 
    currentLocation.then(cl => dispatch(receivedCurrentLocation(cl)))

    return Promise.resolve(currentLocation)
  }
}

export const changeFilters = (filters) => {
  return dispatch => dispatch(changedFilters(filters));
}
