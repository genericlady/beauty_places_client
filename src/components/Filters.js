import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class Filters extends Component {
    constructor (props) {
    super(props);

    this.state = { cSelected: [1, 2, 3] };

    this.toFilters = this.toFilters.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  onCheckboxBtnClick(selected) {
    // cSelected will return the value for what is selected
    // {JSON.stringify(this.state.cSelected)}
    const index = this.state.cSelected.indexOf(selected);

    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }

    this.setState({ cSelected: [...this.state.cSelected] });
    this.props.changeFilters(this.toFilters(this.state.cSelected));
    
  }

  toFilters(cSelected) {
    return cSelected.map((checkboxInteger) => {
      switch (checkboxInteger) {
        case 1:
          return "hair";
        case 2:
          return "skin";
        default:
          return "nails";
      }
    });
  }

  render() {
    return (
      <div className="filters">
        <ButtonGroup>
          <Button color="primary" 
            onClick={() => this.onCheckboxBtnClick(1)}
            active={this.state.cSelected.includes(1)}>Hair
          </Button>
          <Button color="primary" 
            onClick={() => this.onCheckboxBtnClick(2)}
            active={this.state.cSelected.includes(2)}>Skin</Button>
          <Button color="primary" 
            onClick={() => this.onCheckboxBtnClick(3)} 
            active={this.state.cSelected.includes(3)}>Nails</Button>
        </ButtonGroup>
      </div>
    );
  }
}


