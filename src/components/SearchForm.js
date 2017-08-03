import React from 'react';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      locationSuggestion: '',
      showTypeahead: false,
      userInput: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ currentLocation: this.props.currentLocation });
  }

  handleChange = event => {
    this.setState({
      userInput: event.target.value,
      locationSuggestion: event.target.value,
      showTypeahead: event.target.value.length > 0 ? true : false,
    });

    this.props.handleCurrentLocationUpdate(event.target.value)
  }

  handleFormSubmit(ev) {
    ev.preventDefault();

    this.setState({
      locationSuggestion: ev.target.value, 
      showTypeahead: false
    });

    this.props.handleCurrentLocationUpdate(this.props.currentLocation.userInput)
    this.props.handleSearchSubmission()
  }

  locationFormValue() {
    const {city, state, userInput} = this.props.currentLocation
    const cityState = `${city}, ${state}`

    if (userInput !== "" && userInput !== undefined) {
      return userInput
    } else if (city !== "" && state !== "") {
      return cityState
    } else {
      return ""
    }
  }

  render() {
    return (
      <Form inline className="search" onSubmit={this.handleFormSubmit}>
        <FormGroup>
          <Label style={{color: "black"}}>Current Location</Label>
          <Input type="text" onChange={this.handleChange} 
            value={this.locationFormValue()} />
        </FormGroup>
        <Button>Submit</Button>
        <div className={this.state.showTypeahead ? "dropdown" : "invisible"}>
          <div className="search-typeahead">
          {this.state.locationSuggestion}
          </div>
        </div>
      </Form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
