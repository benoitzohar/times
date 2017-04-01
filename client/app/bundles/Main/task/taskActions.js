import { CALL_API } from 'redux-api-middleware';
import { uniqueId, assign } from 'lodash';
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

//get the header object with the code from the state
const headers = function(state) {
    console.log('[debug] state', state);
    return {
        'Content-Type': 'application/json',
        Authorization: state.params.code
    };
};

export const selectTask = id => ({ type: 'TASK_SELECT', id });

export const addTask = task => {
    //generate temporary ID for the task
    const temporaryId = 'tmp-task-' + uniqueId();

    return {
        [CALL_API]: {
            types: [
                {
                    type: ADD_TASK,
                    meta: { task, temporaryId }
                },
                {
                    type: ADD_TASK_SUCCESS,
                    meta: { temporaryId }
                },
                ADD_TASK_FAILURE
            ],
            endpoint: '/tasks',
            method: 'POST',
            headers,
            body: JSON.stringify(task)
        }
    };
};
export const updateTask = task => ({
    [CALL_API]: {
        types: [
            {
                type: UPDATE_TASK,
                meta: { task }
            },
            UPDATE_TASK_SUCCESS,
            UPDATE_TASK_FAILURE
        ],
        endpoint: `/tasks/${task.id}`,
        method: 'PUT',
        headers,
        body: JSON.stringify(task)
    }
});

export const deleteTask = id => ({
    [CALL_API]: {
        types: [
            {
                type: DELETE_TASK,
                meta: { id }
            },
            DELETE_TASK_SUCCESS,
            DELETE_TASK_FAILURE
        ],
        endpoint: `/tasks/${id}`,
        method: 'DELETE',
        headers
    }
});
