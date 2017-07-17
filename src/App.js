import './App.css';
import React, { Component } from 'react';
import SearchForm from './components/SearchForm.js';
import Filters from './components/Filters.js';
import BeautyBrowser from './components/BeautyBrowser.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      beautyPlaces: this.fetchBeautyPlaces(),
      filters: {
        type: 'all',
      }
    };

    this.handleChangeFilterType = this.handleChangeFilterType.bind(this);
    this.fetchBeautyPlaces = this.fetchBeautyPlaces.bind(this);
  }

  fetchBeautyPlaces() {
    let base = 'https://maps.googleapis.com/maps/api/';
    let path = 'place/textsearch/json';
    let query = '?query=hair_care+skin_care+nail_care+in+NYC';
    let key = '&key=AIzaSyANZpynoTmXN7Xh7XM8g4oVVldbiAolqUs';
    let url = base + path;

    // if (this.state.filters.type !== 'all') {
    //   console.log(`?query=skin_care+in+NYC`);
    //   url += `?type=${this.state.filters.type}`;
    // }

    var myHeaders = new Headers();

    var myInit = { method: 'GET',
      headers: myHeaders,
      mode: 'no-cors',
      cache: 'default' };

    fetch(url + query + key, myInit)
      .then(res => res.json())
      .then(beautyPlaces => this.setState({ beautyPlaces }));

    console.log(this.state.beautyPlaces);
  }

  handleChangeFilterType() {
    console.log("FILTER FILTER FILTER");
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Search for Beauty Places</h2>
          <SearchForm onSubmit={this.fetchBeautyPlaces} />
          <Filters filters={this.state.filters}
                   onChangeType={this.handleChangeFilterType} />
        </div>

        <div className="App-body">
          <BeautyBrowser beautyPlaces={this.state.beautyPlaces} />
        </div>
      </div>
    );
  }
}

export default App;
