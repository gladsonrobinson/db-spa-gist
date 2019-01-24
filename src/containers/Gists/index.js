import {PureComponent} from 'react';
import { connect } from "react-redux";
import {getGistFromUserName} from './actions';

const mapStateToProps = state => ({
  gists: state.gists
});

const mapActionsToProps = {
  getGistFromUserName
};

class Gists extends PureComponent {
  render() {
    const {gists, getGistFromUserName} = this.props;
    return this.props.children({gists, getGistFromUserName});
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Gists);