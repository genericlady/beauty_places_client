const API_URL = process.env.REACT_APP_API_URL;

const BeautyPlaceService = {
  fetchPlaces() {
    let url = `${API_URL}/search?type=hair+skin+nails&lat=45.0000&long=109`;

    return fetch(url, {accept: 'application/json'})
      .then(res => res.json())
  }
}

export default BeautyPlaceService;
