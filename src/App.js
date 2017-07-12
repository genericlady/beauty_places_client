import './App.css';
import React, { Component } from 'react';
import BeautyPlace from './components/BeautyPlace.js'
import SearchForm from './components/SearchForm.js'
import ToggleButton from './components/ToggleButton.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Search for Beauty Places</h2>
          <SearchForm />
          <ToggleButton name="Hair" />
          <ToggleButton name="Skin" />
          <ToggleButton name="Nails" />
          <ToggleButton name="Medical" />
        </div>

        <div className="App-body">
          <div className="Places">
            <BeautyPlace name="Sally's Beauty Place" rating="*****" />
            <BeautyPlace name="A place for your Nails!" rating="*****" />
            <BeautyPlace name="A place for your skin!" rating="*****" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
