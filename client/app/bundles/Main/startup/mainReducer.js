import { combineReducers } from 'redux';

import tasks from '../components/task/taskReducer';
import segments from '../components/segment/segmentReducer';

const code = (state = '', action) => {
    return state;
};

const mainReducer = combineReducers({ code, tasks, segments });

export default mainReducer;
