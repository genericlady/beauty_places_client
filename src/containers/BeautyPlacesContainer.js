import React, { Component } from 'react';
import { fetchByCoordinates, fetchCurrentLocation } from '../services/BeautyPlaceService';
import SearchForm from '../components/SearchForm';
import Filters from '../components/Filters';
import BeautyPlacesList from '../components/BeautyPlacesList';

class BeautyPlacesContainer extends Component {
  constructor() {
    super();

    this.state = {
      beautyPlaces: [],
      currentLocation: {city: "", state: ""},
      filters: ['hair', 'skin', 'nails'],
      coords: {latitude: 0, longitude: 0}
    };

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({coords: position.coords})
      const { latitude, longitude } = position.coords 

      this.setCurrentLocation(latitude, longitude);
      this.setBeautyPlaces(latitude, longitude, this.state.filters);
    });
  }

  setBeautyPlaces = (latitude, longitude, filters) => {
    fetchByCoordinates(latitude.toString(), longitude.toString(), filters) 
      .then(beautyPlaces => {
        this.setState({beautyPlaces});
      })
  }

  setCurrentLocation = (latitude, longitude) => {
    fetchCurrentLocation(latitude, longitude)
      .then(currentLocation => 
        this.setState({currentLocation}))
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
        <SearchForm currentLocation={this.state.currentLocation} onSubmit={this.fetchBeautyPlaces} />
        <Filters changeFilters={(filters) => this.handleFilterChange(filters)} />
        <BeautyPlacesList beautyPlaces={beautyPlaces} />
      </div>
    )
  }
}

export default BeautyPlacesContainer;
