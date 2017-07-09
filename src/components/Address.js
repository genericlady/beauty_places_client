import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullAddress: `${props.street}, ${props.city}`
    }
  }

  render() {
    return (
      <div className="address">
        {this.state.fullAddress}
      </div>
    );
  }
}

Address.propTypes = {
  street: PropTypes.string,
  city: PropTypes.string
};

export default Address;
