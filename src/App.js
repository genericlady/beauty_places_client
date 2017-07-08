import React, { Component } from 'react';
import './App.css';

const REVIEWS = [
  "I love this place!",
  "Best experience ever!",
  "YES! Will come back!"
]

class App extends Component {
  render() {
    const reviews = REVIEWS.map(review => React.createElement('li', {}, review))

    return (
      <div className="App">
        <div className="App-header">
          <h2>Search for Beauty Places</h2>
          <form>
            <label style={{color: "white"}} value="">
              Search by your current location: 
              <input type="text"></input>
              <input type="submit" value="Submit" />
            </label>
          </form>
        </div>

        <div className="App-body">
          <h3>Reviews Found</h3>
          <div className="Places">
            <div className="place">
              <div className="name">Sally's Beauty Place</div>
              <div className="rating">Rating: ****</div>
              <div className="reviews">
                <ul>
                  {reviews}
                </ul>
              </div>
            </div>
            <div className="place">
              <div className="name">A place for your Nails!</div>
              <div className="rating">Rating: *****</div>
              <div className="reviews">
                <ul>
                  {reviews}
                </ul>
              </div>
            </div>
            <div className="place">
              <div className="name">A place for your skin!</div>
              <div className="rating">Rating: *****</div>
              <div className="reviews">
                <ul>
                  {reviews}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
