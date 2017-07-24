import React, { Component } from 'react';
import Address from './Address.js';
import Reviews from './Reviews.js';
import Rating from './Rating.js';

class BeautyPlace extends Component {
  render() {
    const beautyPlace = this.props.beautyPlace

    return (
      <div className="beauty-place">
        <div className="beauty-place-header">
          <h2 className="place-name pr-1">{beautyPlace.name}</h2>
          <Rating rating={beautyPlace.rating} />
        </div>
        <Reviews reviews={beautyPlace.reviews} />
        <small>
          <Address fullAddress={beautyPlace.fullAddress} /> 
        </small>
      </div>
    );
  }
}

export default BeautyPlace;
