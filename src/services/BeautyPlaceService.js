const API_URL = process.env.REACT_APP_API_URL;

const BeautyPlaceService = {
  fetchPlaces(place) {
    let url = `${API_URL}/search?type=hair+skin+nails&current_location=${place}`;

    return fetch(url, {accept: 'application/json'})
      .then(res => res.json())
  }
}

export default BeautyPlaceService;
