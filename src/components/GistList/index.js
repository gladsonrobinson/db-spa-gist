import React from 'react';
import './gist-list.css'
import FileTypeBadge from '../FileTypeBadge';

export default class GistList extends React.Component {
  render() {
    return(
      <div className="gist-lists-wrap">
        {this.props.gists.map((item, index) => 
          <div className="gist-list" key={index}>
            <div className="gist-details">
              <div className="user-avatar">
                <img src={item.owner.avatar_url} alt="user logo" /> 
                <a className="user-name" href={item.owner.html_url} target="_blank" rel="noopener noreferrer">{item.owner.login}</a>
              </div>
              {item.description && <h4 className="desc">{item.description}</h4>}
              <a href={item.html_url} target="_blank" rel="noopener noreferrer">{item.html_url}</a>
              {item.files && <FileTypeBadge files={item.files} /> }
            </div>
          </div>
        )}
      </div>
    );
  }
}