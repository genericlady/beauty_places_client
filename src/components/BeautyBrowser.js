import React, { Component } from 'react';
import BeautyPlace from './BeautyPlace';

class BeautyBrowser extends Component {
  render() {
    const beautyPlaces = this.props.beautyPlaces.map(
      (beautyPlace, index) => (<BeautyPlace key={index} beautyPlace={beautyPlace} />)
    );

    return (
      <div className="places">
        {beautyPlaces}
      </div>
    );
  }
}

export default BeautyBrowser;
