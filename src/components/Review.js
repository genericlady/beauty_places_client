import React, { Component } from 'react';

export default class Review extends Component {
  render() {
    return (
      <div className="review">
        {this.props.review}
      </div>
    )
  }
}


