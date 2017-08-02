const API_URL = process.env.REACT_APP_API_URL;

export function fetchByCoordinates(lat, lng, filters) {
  let url = `${API_URL}/search?type=${filters.join('+')}&coords=${lat}+${lng}`;

  return fetch(url, {accept: 'application/json'})
};

export function fetchByCityState(currentLocation, filters) {
  const city = `current_location[city]=${currentLocation.city}`
  const state = `current_location[state]=${currentLocation.state}`

  let url = `${API_URL}/search?type=${filters.join('+')}&${city}&${state}`;

  return fetch(url, {accept: 'application/json'})
    .then(res => res.json())
};

export function fetchCurrentLocation(lat, lng) {
  let url = `${API_URL}/current_location?coords=${lat}+${lng}`;

  return fetch(url, {accept: 'application/json'})
    .then(res => res.json())
};

