import './App.css';
import React, { Component } from 'react';
import BeautyPlaceService from './services/BeautyPlaceService'
import SearchForm from './components/SearchForm';
import Filters from './components/Filters';
import BeautyBrowser from './components/BeautyBrowser';

class App extends Component {
  constructor() {
    super();

    this.state = {
      beautyPlaces: [],
      filters: {
        type: 'all'
      }
    };

    this.handleChangeFilterType = this.handleChangeFilterType.bind(this);
  }

  componentDidMount() {
    BeautyPlaceService.fetchPlaces().then(
      places => this.setState({beautyPlaces: places}))
  }

  handleChangeFilterType() {
    console.log("FILTER FILTER FILTER");
  }

  render() {
    const beautyPlaces = this.state.beautyPlaces;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Search for Beauty Places</h2>
          <SearchForm onSubmit={this.fetchBeautyPlaces} />
          <Filters filters={this.state.filters}
                   onChangeType={this.handleChangeFilterType} />
        </div>

        <div className="App-body">
          {console.log("we are passing beautyPlaces json to a component")}
          {console.log(beautyPlaces)}
          <BeautyBrowser beautyPlaces={beautyPlaces} />
        </div>
      </div>
    );
  }
}

export default App;
