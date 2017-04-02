import { combineReducers } from 'redux';
import { assign } from 'lodash';

import { SELECT_TASK } from './task/taskConstants';

const params = (state = {}, action) => {
    switch (action.type) {
        case SELECT_TASK:
            return assign({}, state, { currentTask: action.meta.task });
        default:
            return state;
    }
};

export default params;
