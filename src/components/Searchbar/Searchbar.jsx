import React, { Component } from 'react'
import { Input, SubmitButton } from './styles';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <Input
            type="search"
            className="Searchbar__input"
            value={this.state.query}
            name="query"
            onChange={this.handleOnChange}
            placeholder="name, number, or type"
          >
          </Input>

          <SubmitButton className="Searchbar__input">
            <FontAwesomeIcon icon={faSearch} />
          </SubmitButton>

        </form>
      </div>
    )
  }
}
