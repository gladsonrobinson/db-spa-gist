import React from 'react';
import GistCtnr  from '../../containers/Gists';
import { Gist } from '../../components';

export default class Home extends React.Component {
  render() {
    return (
      <GistCtnr>
        {({gists, getGistFromUserName})=>{
          console.log("dsadsa", gists)
          return <Gist gists={gists} getGistFromUserName={getGistFromUserName}  />;
        }}
      </GistCtnr>
    );
  }
}
