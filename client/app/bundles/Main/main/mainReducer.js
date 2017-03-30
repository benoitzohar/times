import { combineReducers } from 'redux';

import tasks from '../task/taskReducer';
import segments from '../segment/segmentReducer';

const code = (state = '', action) => {
    return state;
};

const mainReducer = combineReducers({ code, tasks, segments });

export default mainReducer;
