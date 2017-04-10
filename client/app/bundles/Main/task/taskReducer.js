import { uniqueId, remove, assign } from 'lodash';

import {
    ADD_TASK,
    ADD_TASK_SUCCESS,
    ADD_TASK_FAILURE,
    UPDATE_TASK,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FAILURE,
    DELETE_TASK,
    DELETE_TASK_SUCCESS,
    DELETE_TASK_FAILURE
} from './taskConstants';

const tasks = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:
            return [
                ...state,
                assign({ id: action.meta.temporaryId }, action.meta.task)
            ];
        case ADD_TASK_SUCCESS:
            return state.map(task => {
                //replace the item with temporary ID by the actual object
                if (task.id == action.meta.temporaryId) {
                    return action.payload;
                } else {
                    return task;
                }
            });

        case UPDATE_TASK:
            return state.map(
                task =>
                    task.id === action.meta.task.id
                        ? assign({}, task, action.meta.task)
                        : task
            );

        case DELETE_TASK:
            remove(state, { id: action.meta.id });
            return [...state];

        default:
            return state;
    }
};

export default tasks;
