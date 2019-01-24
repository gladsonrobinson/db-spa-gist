import React from 'react';
import GistCtnr  from '../../containers/Gists';
import { GistWrapper } from '../../components';

export default class Home extends React.Component {
  render() {
    return (
      <GistCtnr>
        {({gists, getGistFromUserName})=>{
          console.log("dsadsa", gists)
          return <GistWrapper gists={gists} getGistFromUserName={getGistFromUserName}  />;
        }}
      </GistCtnr>
    );
  }
}
