import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Address extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullAddress: this.props.fullAddress
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
  fullAddress: PropTypes.string
};

export default Address;
