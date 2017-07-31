import './styles/App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';

import SearchableBeautyPlacesContainer from './containers/SearchableBeautyPlacesContainer';

const Deals = () => <h1>Deals</h1>
const About = () => <h1>About</h1>

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={SearchableBeautyPlacesContainer} />
          <Route exact path="/deals" component={Deals} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    </div>
  )
}

export default App;
