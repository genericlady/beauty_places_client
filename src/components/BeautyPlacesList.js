import React, { Component } from 'react';
import BeautyPlace from './BeautyPlace';

const BeautyPlacesList = (props) => {
  const beautyPlaces = props.beautyPlaces.map(
    (beautyPlace, index) => (<BeautyPlace key={index} beautyPlace={beautyPlace} />)
  );

  return (
    <div className="places">
      {beautyPlaces}
    </div>
  );
}

export default BeautyPlacesList;
