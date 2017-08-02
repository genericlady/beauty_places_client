import React from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      locationSuggestion: '',
      showTypeahead: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({ currentLocation: this.props.currentLocation });
  }

  handleChange = event => {
    this.setState({
      locationSuggestion: event.target.value,
      showTypeahead: event.target.value.length > 0 ? true : false,
    });
  }

  handleFormSubmit(ev) {
    ev.preventDefault();

    this.setState({
      locationSuggestion: ev.target.value, 
      showTypeahead: false
    });

    //this.props.handleCurrentLocationUpdate
  }

  render() {
    const {city, state} = this.props.currentLocation
    const city_state = `${city}, ${state}`
    return (
      <form className="search" onSubmit={this.handleFormSubmit}>
        <label style={{color: "white"}} value="">
          <input type="text" onChange={this.handleChange} placeholder={city_state}></input>
          <input type="submit" value="Change Location" />
          <div className={this.state.showTypeahead ? "dropdown" : "invisible"}>
            <div className="search-typeahead">
            {this.state.locationSuggestion}
            </div>
          </div>
        </label>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func,
};
