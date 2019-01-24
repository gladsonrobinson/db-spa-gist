import React from 'react';
import SearchBox from './../SearchBox';
import GistList from './../GistList';
import './gist.css';

export default class GistWrapper extends React.Component {
  render() {
    return(
      <div className="gist-ctnr">
        <SearchBox handleSearch={(value)=>this.props.getGistFromUserName(value)} />
        <GistList gists={this.props.gists} />
      </div>
    );
  }
}