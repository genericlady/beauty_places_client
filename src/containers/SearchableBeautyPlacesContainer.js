import React, { Component } from 'react';
import BeautyPlaceService from '../services/BeautyPlaceService';
import SearchForm from '../components/SearchForm';
import Filters from '../components/Filters';
import BeautyPlacesList from '../components/BeautyPlacesList';

class SearchableBeautyPlacesContainer extends Component {
  constructor() {
    super();

    this.state = {
      beautyPlaces: [],
      currentLocation: "",
      filters: {
        type: 'all'
      }
    };

  }

  componentWillMount() {
    this.setState({currentLocation: "New York, NY"})
  }

  componentDidMount() {
    BeautyPlaceService.fetchPlaces(this.state.currentLocation).then(
      beautyPlaces => this.setState({beautyPlaces})
    )
  }


  render() {
    const beautyPlaces = this.state.beautyPlaces;

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
