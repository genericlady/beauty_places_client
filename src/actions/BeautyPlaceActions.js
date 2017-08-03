import {
  fetchByCityState,
  fetchCurrentLocation,
  fetchByUserInput
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

const userChangedCurrentLocation = currentLocation => {
  return {
    type: 'USER_CHANGED_LOCATION',
    currentLocation
  }
}

export const getBeautyPlaces = (filters, currentLocation) => {
  return dispatch => {
    return fetchByCityState(currentLocation, filters)
      .then(beautyPlaces => dispatch(receivedBeautyPlaces(beautyPlaces)));
  }
}

export const getBeautyPlacesByUserInput = (filters, userInput) => {
  return dispatch => {
    return fetchByUserInput(userInput, filters)
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

export const userInputCurrentLocation = (userInput) => {
  const newLocation = { city: "", state: "", userInput }

  return dispatch => dispatch(userChangedCurrentLocation(newLocation))
}
