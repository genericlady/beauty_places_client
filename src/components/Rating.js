import React, { Component } from 'react';

class Rating extends Component {
  render() {
    const rating = this.props.rating ? this.props.rating : 0

    return (
      <div className="rating">
        {rating}
      </div>
    )
  }
}

export default Rating;
