import './styles/App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavbarContainer from './containers/NavbarContainer';

import BeautyPlacesContainer from './containers/BeautyPlacesContainer';

const Deals = () => <h1>Deals</h1>
const About = () => <h1>About</h1>

const App = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <NavbarContainer />
          <Route exact path="/" component={BeautyPlacesContainer} />
          <Route exact path="/deals" component={Deals} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    </div>
  )
}

export default App;
