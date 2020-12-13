import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleKeyDown(e) {
    if(e.key === "Enter") {
      this.props.onSubmit();
    } else if(e.key === "Tab") {
      e.preventDefault();
      this.props.onAutoComplete();
    }
  }

  render() {
    return (
      <>
        When <input type="text" name="search" value={this.props.keywords} onChange={this.props.onChange} onKeyDown={this.handleKeyDown} size="100" />
        <input type="button" name="add" value="Add" onClick={this.props.onSubmit} />
      </>
    );
  }
}

export default SearchBar;
