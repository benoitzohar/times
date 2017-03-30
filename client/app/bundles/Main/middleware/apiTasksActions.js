import { CALL_API } from 'redux-api-middleware';
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
} from './apiTasksConstants';

const headers = function(code) {
    return {
        'Content-Type': 'application/json',
        Authorization: code
    };
};

export const apiAddTask = (code, data) => ({
    [CALL_API]: {
        types: [ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_FAILURE],
        endpoint: '/tasks',
        method: 'POST',
        headers: headers(code),
        body: JSON.stringify(data)
    }
});
export const apiUpdateTask = (code, id, data) => ({
    [CALL_API]: {
        types: [UPDATE_TASK, UPDATE_TASK_SUCCESS, UPDATE_TASK_FAILURE],
        endpoint: `/tasks/${id}`,
        method: 'PUT',
        headers: headers(code),
        body: JSON.stringify(data)
    }
});

export const apiDeleteTask = (code, id) => ({
    [CALL_API]: {
        types: [DELETE_TASK, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE],
        endpoint: `/tasks/${id}`,
        method: 'DELETE',
        headers: headers(code)
    }
});
