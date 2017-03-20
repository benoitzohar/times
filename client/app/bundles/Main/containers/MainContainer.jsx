import { connect } from 'react-redux';
import Main from '../components/Main';
import * as taskActions from '../actions/taskActions';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = state => {
    return { code: state.code, tasks: state.tasks, segments: state.segments };
};

// Don't forget to actually use connect!
// Note that we don't export Main, but the redux "connected" version of it.
// See https://github.com/reactjs/react-redux/blob/master/docs/api.md#examples
export default connect(mapStateToProps, taskActions)(Main);
