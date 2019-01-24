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
              <div className="fork-list"> 
                <button onClick={() => this.props.handleShowForkDetails(item.id, index)}>Get Last 3 FORK</button>
                { 
                  item.fork_details && item.fork_details.length === 0 &&
                  <div className="info">No Fork Available</div>
                }
                <div className="fork-avatar-list">
                { 
                  item.fork_details && item.fork_details.length > 0 &&
                  item.fork_details.map((item, index) => 
                    <a href={item.html_url} target="_blank" rel="noopener noreferrer" key={index} >
                      <img src={item.owner.avatar_url} />
                    </a>
                  )
                }
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}