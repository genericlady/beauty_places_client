import React, { Component } from 'react';
import Address from './Address.js';
import Rating from './Rating.js';
import BeautyPlaceButton from './BeautyPlaceButton.js';

const BeautyPlace = (props) => {
    const beautyPlace = props.beautyPlace

    return (
      <div className="beauty-place">
        <div className="beauty-place-header">
          <h2 className="place-name pr-1">{beautyPlace.name}</h2>
          <Rating rating={beautyPlace.rating} />
          <BeautyPlaceButton placeId={beautyPlace.place_id} />
        </div>
        <small>
          <Address fullAddress={beautyPlace.fullAddress} /> 
        </small>
      </div>
    );
}

export default BeautyPlace;
