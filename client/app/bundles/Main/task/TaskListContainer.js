import { connect } from 'react-redux';
import TaskList from './TaskList';
import actions from './taskActions';

const mapStateToProps = state => {
    return { code: state.code, tasks: state.tasks };
};

//connect to the main component
export default connect(mapStateToProps, actions)(TaskList);
