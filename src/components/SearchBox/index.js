import React from 'react';
import './search-ctnr.css';

export default class SearchBox extends React.Component {

  constructor(props) {
    super(props);

    this._handleSearchTermSubmit = this._handleSearchTermSubmit.bind(this);
  }

  _handleSearchTermSubmit = (ev) => {
    ev.preventDefault();
    if(this.textInput.value !== "")
      this.props.handleSearch(this.textInput.value);
  }

  render() {
    return(
      <form onSubmit={this._handleSearchTermSubmit}>
        <div className="gist-search-wrap">
          <div className="search">
            <input type="text" className="search-txt" placeholder="Gist Username..." ref={(input) => this.textInput = input} />
            <button type="submit" className="search-btn">Search</button>
          </div>
        </div>
      </form>
    );
  }
}