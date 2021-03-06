import { connect, bindActionCreators } from 'react-redux';
import { assign } from 'lodash';
import TaskList from './TaskList';
import * as taskActions from './taskActions';
import { loadSegments, resetSegments } from '../segment/segmentActions';

const mapStateToProps = state => {
    return { params: state.params, tasks: state.tasks };
};

export default connect(
    mapStateToProps,
    assign(taskActions, { loadSegments, resetSegments })
)(TaskList);
