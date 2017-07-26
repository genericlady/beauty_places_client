import React, { Component } from 'react';
import Address from './Address.js';
import Rating from './Rating.js';
import BeautyPlaceButton from './BeautyPlaceButton.js';

const BeautyPlace = (props) => {
    const beautyPlace = props.beautyPlace

    return (
      <tr className="beauty-place">
        <td>
          <h3>{beautyPlace.name}</h3>
          <small>
            <Address fullAddress={beautyPlace.formatted_address} /> 
          </small>
        </td>
        <td><Rating rating={beautyPlace.rating} /></td>
        <td><BeautyPlaceButton placeId={beautyPlace.place_id} /></td>
      </tr>
    );
}

export default BeautyPlace;
