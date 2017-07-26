import React, { Component } from 'react';
import Review from './Review'

const ReviewList = (props) => {
  const reviews = props.reviews.map(
    (review, index) => (<Review key={index} review={review} />)
  );

  return (
    <div className="review-list">
      {reviews.length > 0 ? reviews : "Sorry there are no reviews."}
    </div>
  )
}

export default ReviewList;
