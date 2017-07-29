import React from 'react';
import Rating from './Rating';

const Review = (props) => {
  const review = props.review

  return (
    <div className="review pb-2">
      <div>Author: {review.author_name}</div>
      <div>rating: <Rating rating={review.rating} /></div>
      <div>{review.text}</div>
    </div>
  )
}

export default Review;
