import React from 'react';
import GistCtnr  from '../../containers/Gists';
import { GistWrapper } from '../../components';

export default class Home extends React.Component {
  render() {
    return (
      <GistCtnr>
        {({gists, getGistFromUserName, getLastThreeForkFromGistId})=>{
          return <GistWrapper gists={gists}
                    getGistFromUserName={getGistFromUserName}
                    getLastThreeForkFromGistId={getLastThreeForkFromGistId}  />;
        }}
      </GistCtnr>
    );
  }
}
