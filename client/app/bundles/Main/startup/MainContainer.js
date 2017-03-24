import { connect } from 'react-redux';
import Main from '../components/Main';
import actions from './mainActions';

// Which part of the Redux global state does our component want to receive as props?
const mapStateToProps = state => {
    return { code: state.code, tasks: state.tasks, segments: state.segments };
};

//connect to the main component
export default connect(mapStateToProps, actions)(Main);
