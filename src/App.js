import './styles/App.css';
import React from 'react';
import SearchForm from './components/SearchForm';
import BeautyPlacesContainer from './containers/BeautyPlacesContainer';

const App = () => {
  return (
    <div className="App">
      <SearchForm store={this.props.store} />
      <BeautyPlacesContainer store={this.props.store} />
    </div>
  )
}

export default App;
