import { connect } from 'react-redux';
import TaskList from './TaskList';
import * as actions from './taskActions';

const mapStateToProps = state => {
    return { params: state.params, tasks: state.tasks };
};

export default connect(mapStateToProps, actions)(TaskList);
