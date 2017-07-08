import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Beauty Reviews</h2>
          <form>
            <label style={{color: "white"}} value="">
              Search by your current location: 
              <input type="text"></input>
              <input type="submit" value="Submit" />
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
