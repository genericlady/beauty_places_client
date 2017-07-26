import React, { Component } from 'react';
import Rating from './Rating';

export default class Review extends Component {
  render() {
    const review = this.props.review

    return (
      <div className="review pb-2">
        {console.log(review)}
        <p>Author: {review.author_name}</p>
        <p>rating: <Rating rating={review.rating} /></p>
        <p>{this.props.review.text}</p>
      </div>
    )
  }
}


