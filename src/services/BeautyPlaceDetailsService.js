const API_URL = process.env.REACT_APP_API_URL;

const BeautyPlaceDetails = {
  fetch(placeId) {
    let url = `${API_URL}/details?place_id=${placeId}`;

    return fetch(url, {accept: 'application/json'})
      .then(res => res.json())
  }
}

export default BeautyPlaceDetails;
