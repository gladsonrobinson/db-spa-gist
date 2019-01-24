import React from 'react';
import './file-type-badge.css';

export default class FileTypeBadge extends React.Component {
  render() {
    /* Extract the unique file type from a gist */
    let fileList =  Object.keys(this.props.files).map(key => this.props.files[key].type);
    let distinctFileList = [...new Set(fileList)];
    return(
      <div className="file-type-badge">
        {distinctFileList.length && distinctFileList.map((item,index) => {
          return (
            <div key={index} className="tag">
              {item}
            </div>
          )
        })}
      </div>
    );
  }
}
