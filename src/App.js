import './styles/App.css';
import React from 'react';
import ReactDOM from 'react-dom';

import SearchableBeautyPlacesContainer from './containers/SearchableBeautyPlacesContainer';

const App = () => {
  return (
    <div className="App">
      <SearchableBeautyPlacesContainer />
    </div>
  )
}

export default App;
