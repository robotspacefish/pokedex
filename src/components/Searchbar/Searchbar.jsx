import React, { Component } from 'react'

export default class Searchbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    }
  }

  handleOnChange = e => {
    this.setState({ query: e.target.value })
  }

  handleOnSubmit = e => {
    e.preventDefault();
    // TODO
    this.setState({ query: '' });
  }

  render() {
    return (
      <div className="Searchbar">
        <form onSubmit={this.handleOnSubmit}>
          <input type="search"
            value={this.state.query}
            name="query"
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
