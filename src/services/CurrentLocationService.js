const API_URL = process.env.REACT_APP_API_URL;

const CurrentLocationService = {
  fetch() {
    let url = `${API_URL}/current_location`

    return fetch(url, {accept: 'application/json'})
      .then(res => res.json())
  }
}

export default CurrentLocationService;
