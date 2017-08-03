import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import Filters from '../components/Filters';
import BeautyPlacesList from '../components/BeautyPlacesList';
import { 
  getBeautyPlaces, 
  getBeautyPlacesByUserInput,
  getCurrentLocation,
  changeFilters,
  userInputCurrentLocation
} from '../actions/BeautyPlaceActions'

class BeautyPlacesContainer extends Component {
  componentDidMount() {
    if (this.props.currentLocation.userInput === "") {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords 

        this.props.getCurrentLocation(latitude, longitude)
      });
    }
  }

  handleFilterChange = (filters) => { 
    this.props.changeFilters(filters);
    this.props.getBeautyPlaces(filters, this.props.currentLocation);
  }

  handleUserInput = (userInput) => {
    const { filters } = this.props

    this.props.userInputCurrentLocation(userInput);
    this.props
        .getBeautyPlacesByUserInput(filters, this.props.currentLocation.userInput);
  }

  render() {
    const { beautyPlaces, currentLocation } = this.props;

    return (
      <div className="mx-auto">
        <SearchForm currentLocation={currentLocation} 
          handleCurrentLocationUpdate={
            (userInput) => this.handleUserInput(userInput)
          } />
        <Filters changeFilters={(filters) => this.handleFilterChange(filters)} />
        <BeautyPlacesList beautyPlaces={beautyPlaces} />
      </div>
    )
  }
}

export default connect(
  state => ({ 
    beautyPlaces: state.beautyPlaces,
    currentLocation: state.currentLocation,
    filters: state.filters,
    coords: state.coords
  }), { 
    getCurrentLocation, 
    getBeautyPlaces,
    changeFilters,
    userInputCurrentLocation,
    getBeautyPlacesByUserInput
  }
)(BeautyPlacesContainer);

