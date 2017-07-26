import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import BeautyPlaceDetailsService from '../services/BeautyPlaceDetailsService';
import ReviewList from './ReviewList'

class BeautyPlaceButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      placeId: props.placeId,
      details: {reviews: []}
    };

    this.toggle = this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    BeautyPlaceDetailsService.fetch(this.state.placeId).then(
      details => this.setState({details})
    )

    this.setState({
      modal: !this.state.modal
    });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const details = this.state.details

    return (
      <div className="d-inline">
        <Button color="primary" onClick={this.handleClick}>Reviews</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{details.name}</ModalHeader>
          <ModalBody>
            <ReviewList reviews={details.reviews} />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Check This Place Out!</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default BeautyPlaceButton;
