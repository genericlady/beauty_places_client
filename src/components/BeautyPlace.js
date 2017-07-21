import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Address from './Address.js';
import Review from './Review.js';

class BeautyPlace extends Component {
  render() {
    const beautyPlace = this.props.beautyPlace
    const fullAddress = beautyPlace.fullAddress
    const reviews = beautyplace.reviews

    return (
      <div className="beauty-place">
        <h2>{beautyPlace.name}</h2>
        <small>
          <Address fullAddress={beautyPlace.fullAddress} /> 
        </small>
        <h4>Rating: {beautyPlace.rating}</h4>
        
        <Reviews reviews={reviews} />
      </div>
    );
  }
}

BeautyPlace.defaultProps = {
  name: 'Polly Polishes',
  rating: 5,
  reviews: REVIEWS
};

BeautyPlace.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.integer
};

export default BeautyPlace;
