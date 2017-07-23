import React, { Component } from 'react';
import Review from './Review'

class Reviews extends Component {
  render() {
    const reviews = this.props.reviews.map((review) => 
      <Review review={review} />
    );

    return (
      <div className="reviews">
        {reviews}
      </div>
    )
  }
}

export default Reviews;
