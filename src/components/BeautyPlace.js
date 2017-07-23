import React, { Component } from 'react';
import Address from './Address.js';
import Reviews from './Reviews.js';
import Rating from './Rating.js';

class BeautyPlace extends Component {
  render() {
    const beautyPlace = this.props.beautyPlace

    return (
      <div className="beauty-place">
        <h2>{beautyPlace.name}</h2>
        <small>
          <Address fullAddress={beautyPlace.fullAddress} /> 
        </small>
        <Rating rating={beautyPlace.rating} />
        <Reviews reviews={beautyPlace.reviews} />
      </div>
    );
  }
}

export default BeautyPlace;
