import {PureComponent} from 'react';
import { connect } from "react-redux";
import {getGistFromUserName, getLastThreeForkFromGistId} from './actions';

const mapStateToProps = state => ({
  gists: state.gists
});

const mapActionsToProps = {
  getGistFromUserName,
  getLastThreeForkFromGistId
};

class Gists extends PureComponent {
  render() {
    const {gists, getGistFromUserName, getLastThreeForkFromGistId} = this.props;
    return this.props.children({gists, getGistFromUserName, getLastThreeForkFromGistId});
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Gists);