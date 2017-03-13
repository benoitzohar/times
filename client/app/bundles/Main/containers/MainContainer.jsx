import { connect } from 'react-redux';
import Main from '../components/Main';
import * as actions from '../actions/mainActionCreators';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = state => ({ code: state.code, tasks: state.tasks });

// Don't forget to actually use connect!
// Note that we don't export Main, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, actions)(Main);
