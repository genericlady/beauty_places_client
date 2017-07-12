import React from 'react';
import PropTypes from 'prop-types';

export default class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      loc: '',
      showTypeahead: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({
      loc: event.target.value,
      showTypeahead: event.target.value.length > 0 ? true : false,
    });
  }

  handleFormSubmit(ev) {
    ev.preventDefault();

    this.setState({
      loc: ev.target.value, 
      showTypeahead: false
    });
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label style={{color: "white"}} value="">
          Search by your current location: 
          <input type="text" onChange={this.handleChange}></input>
          <input type="submit" value="Submit" />
        <div className={this.state.showTypeahead ? "dropdown" : "invisible"}>
          <div className="search-typeahead">
          {this.state.loc}
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
