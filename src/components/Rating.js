import React, { Component } from 'react';
import FullStar from './FullStar';
import HalfStar from './HalfStar';
import EmptyStar from './EmptyStar';

class Rating extends Component {
  render() {
    const rating = this.props.rating ? this.props.rating : 0
    const stars = []
    const integer = (rating + "").split(".")[0]
    const fractional = (rating + "").split(".")[1]
    const difference = 5 - integer

    if (rating === 5) {
      for(let i=0; i < 5; i++) { stars.push(<FullStar />) }
    } else if (rating > 0) {
      for(let i=0; i < integer; i++) { stars.push(<FullStar />) }

      if (fractional < 5) {
        stars.push(<EmptyStar />)
      } else if (fractional >= 5) {
        stars.push(<HalfStar />)
      }

      if (fractional === undefined) {
        for(let i=0; i < difference; i++) { stars.push(<EmptyStar />) }
      } else {
        for(let i=1; i < difference; i++) { stars.push(<EmptyStar />) }
      }

    } else {
      for(let i=0; i < 5; i++) { stars.push(<EmptyStar />) }
    }

    return (
      <div className="rating d-inline">
        {stars}
      </div>
    )
  }
}

export default Rating;
