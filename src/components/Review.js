import React, { Component } from 'react';
import Rating from './Rating';

const Review = (props) => {
  const review = props.review

  return (
    <div className="review pb-2">
      <p>Author: {review.author_name}</p>
      <p>rating: <Rating rating={review.rating} /></p>
      <p>{review.text}</p>
    </div>
  )
}

export default Review;
