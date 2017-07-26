import React, { Component } from 'react';
import Review from './Review'

class ReviewList extends Component {
  render() {
    const reviews = this.props.reviews.map(
      (review, index) => (<Review key={index} review={review} />)
    );

    return (
      <div className="review-list">
        {reviews.length > 0 ? reviews : "Sorry there are no reviews."}
      </div>
    )
  }
}

export default ReviewList;
