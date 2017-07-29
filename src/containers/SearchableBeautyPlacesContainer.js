import React, { Component } from 'react';
import { fetchByCoordinates } from '../services/BeautyPlaceService';
import SearchForm from '../components/SearchForm';
import Filters from '../components/Filters';
import BeautyPlacesList from '../components/BeautyPlacesList';

class SearchableBeautyPlacesContainer extends Component {
  constructor() {
    super();

    this.state = {
      beautyPlaces: [],
      currentLocation: {},
      filters: ['hair', 'skin', 'nails'],
      coords: {latitude: 0, longitude: 0}
    };

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({coords: position.coords})
      const { latitude, longitude } = position.coords 

      this.setBeautyPlaces(latitude, longitude, this.state.filters);
    });
  }

  setBeautyPlaces = (latitude, longitude, filters) => {
    fetchByCoordinates(latitude.toString(), longitude.toString(), filters) 
      .then(beautyPlaces => {
        this.setState({beautyPlaces});
      })
  }

  handleFilterChange = (filters) => { 
    this.setState({ filters: filters }); 
    const { latitude, longitude } = this.state.coords 
    this.setBeautyPlaces(latitude, longitude, filters)
  }

  render() {
    const { beautyPlaces } = this.state;

    return (
      <div className="mx-auto">
        <h2 className="text-center">Search for Beauty Places</h2>
        <SearchForm onSubmit={this.fetchBeautyPlaces} />
        <Filters changeFilters={(filters) => this.handleFilterChange(filters)} />
        <BeautyPlacesList beautyPlaces={beautyPlaces} />
      </div>
    )
  }
}

export default SearchableBeautyPlacesContainer;
