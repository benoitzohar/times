import { combineReducers } from 'redux';
import { TASK_SELECT } from '../constants/mainConstants';

const code = (state, action) => {
    console.log('[debug] action, state', action, state);
    return state;
};

const tasks = (state = '', action) => {
    switch (action.type) {
        case TASK_SELECT:
            return action.task;
        default:
            return state;
    }
};

const mainReducer = combineReducers({ code, tasks });

export default mainReducer;
