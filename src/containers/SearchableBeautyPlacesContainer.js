import React, { Component } from 'react';
import { fetchByCoordinates } from '../services/BeautyPlaceService';
import CurrentLocationService from '../services/CurrentLocationService'
import SearchForm from '../components/SearchForm';
import Filters from '../components/Filters';
import BeautyPlacesList from '../components/BeautyPlacesList';

class SearchableBeautyPlacesContainer extends Component {
  constructor() {
    super();

    this.state = {
      beautyPlaces: [],
      currentLocation: {},
      filters: {
        type: 'all'
      }
    };

  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords 

      fetchByCoordinates(latitude.toString(), longitude.toString())
        .then(beautyPlaces => {
          setTimeout(() => null, 0);
          this.setState({beautyPlaces});
        })
    });

    console.log(this.state.beautyPlaces);
  }

  render() {
    const { beautyPlaces } = this.state;

    return (
      <div className="mx-auto">
        <h2 className="text-center">Search for Beauty Places</h2>
        <SearchForm onSubmit={this.fetchBeautyPlaces} />
        <Filters filters={this.state.filters}
                 onChangeType={this.handleChangeFilterType} />
        <BeautyPlacesList beautyPlaces={beautyPlaces} />
      </div>
    )
  }
}

export default SearchableBeautyPlacesContainer;
