import React, { Component } from "react";
import PropTypes from "prop-types";
import FontAwesome from "react-fontawesome";
import {
  StyledSearchBar,
  StyledSearchBarContent
} from "./../styles/StyledSearchBar";

class SearchBar extends Component {
  state = {
    inputValue: ""
  };

  timeOut = null;

  doSearch = event => {
    const { callback } = this.props;
    const { value } = event.target;

    this.setState({ inputValue: value });
    // waktu ketik
    clearTimeout(this.timeOut);

    this.timeOut = setTimeout(() => {
      const { inputValue } = this.state;
      callback(inputValue);
    }, 500);
  };

  render() {
    const { inputValue } = this.state;
    return (
      <div>
        <StyledSearchBar>
          <StyledSearchBarContent>
            <FontAwesome className="fa-search" name="search" size="2x" />
            <input
              type="text"
              placeholder="Search Movie"
              onChange={this.doSearch}
              value={inputValue}
            />
          </StyledSearchBarContent>
        </StyledSearchBar>
      </div>
    );
  }
}

SearchBar.propTypes = {
  callback: PropTypes.func
};

export default SearchBar;
