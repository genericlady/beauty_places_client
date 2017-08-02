import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/SearchForm';
import Filters from '../components/Filters';
import BeautyPlacesList from '../components/BeautyPlacesList';
import { 
  getBeautyPlaces, 
  getCurrentLocation,
  changeFilters
} from '../actions/BeautyPlaceActions'

class BeautyPlacesContainer extends Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords 
      const { filters } = this.props

      this.props
        .getCurrentLocation(latitude, longitude)
        .then(currentLocation => {
          this.props.getBeautyPlaces(filters, currentLocation)
        });

    });
  }

  handleFilterChange = (filters) => { 
    this.props.changeFilters(filters);
    this.props.getBeautyPlaces(filters, this.props.currentLocation);
  }

  render() {
    const { beautyPlaces, currentLocation } = this.props;

    return (
      <div className="mx-auto">
        <SearchForm currentLocation={currentLocation} onSubmit={this.fetchBeautyPlaces} />
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
    changeFilters
  }
)(BeautyPlacesContainer);

