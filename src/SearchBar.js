import React from "react";
import "./css/SearchBar.css";
import PropTypes from "prop-types";

class ErrorLabel extends React.Component {
  static propTypes = {
    errorMessage: PropTypes.string
  }

  render() {
    return (
      <div className="error_message">{this.props.errorMessage}</div>
    );
  }
}

class SearchBar extends React.Component {
  static propTypes = {
    onAutoComplete: PropTypes.func,
    hideFilteredResults: PropTypes.func,
    keywords: PropTypes.string,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    errorMessage: PropTypes.string
  }

  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      this.props.onSubmit();
    } else if (e.key === "Tab") {
      e.preventDefault();
      this.props.onAutoComplete();
    } else if (e.key === "Escape") {
      this.props.hideFilteredResults();
    }
  }

  render() {
    return (
      <div className="search_bar">
        When <input autoFocus className="input_field" type="text" name="search" value={this.props.keywords} onChange={this.props.onChange} onKeyDown={this.handleKeyDown} />
        <input className="add_button" type="button" name="add" value="Add" onClick={this.props.onSubmit} />
        <ErrorLabel errorMessage={this.props.errorMessage} />
      </div>
    );
  }
}

export default SearchBar;
