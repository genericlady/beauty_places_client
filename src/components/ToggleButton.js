import React from 'react';

class ToggleButton extends React.Component {
  constructor() {
    super();

    this.state = {
      isEnabled: false
    }
  }

  render() {
    return (
      <button className={`toggle-button ${this.state.isEnabled ? 'on' : 'off'}`}>
        {this.props.name} 
      </button>
    )
  }
}

export default ToggleButton;
