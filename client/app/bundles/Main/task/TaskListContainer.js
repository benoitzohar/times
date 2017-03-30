import { connect } from 'react-redux';
import TaskList from './TaskList';
import * as actions from './taskActions';

const mapStateToProps = state => {
    return { code: state.code, tasks: state.tasks };
};

export default connect(mapStateToProps, actions)(TaskList);
