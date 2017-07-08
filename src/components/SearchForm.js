import React from 'react';

export default class SearchForm extends React.Component {
  render() {
    return (
      <form>
        <label style={{color: "white"}} value="">
          Search by your current location: 
          <input type="text"></input>
          <input type="submit" value="Submit" />
        </label>
      </form>
    );
  }
}
