import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // only do this inside of the constructor
    // use this.setState to update state elsewhere
    this.state = { term: '' };
  }

  render() {
    // this.setState causes component to re-render
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  onInputChange(term) {
    // event is an event object that describes the event that occurred
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
