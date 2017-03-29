import { CALL_API } from 'redux-api-middleware';

export const FETCH_TASKS = 'FETCH_TASKS';
export const FETCH_TASKS_SUCCESS = 'FETCH_TASKS_SUCCESS';
export const FETCH_TASKS_FAILURE = 'FETCH_TASKS_FAILURE';

export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_FAILURE = 'ADD_TASK_SUCCESS';

export const UPDATE_TASK = 'UPDATE_TASK';
export const UPDATE_TASK_SUCCESS = 'UPDATE_TASK_SUCCESS';
export const UPDATE_TASK_FAILURE = 'UPDATE_TASK_SUCCESS';

export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAILURE = 'DELETE_TASK_FAILURE';

export const apiFetchTasks = () => ({
    [CALL_API]: {
        types: [FETCH_TASKS, FETCH_TASKS_SUCCESS, FETCH_TASKS_FAILURE],
        endpoint: 'tasks',
        method: 'GET'
    }
});

export const apiAddTask = data => ({
    [CALL_API]: {
        types: [ADD_TASK, ADD_TASK_SUCCESS, ADD_TASK_FAILURE],
        endpoint: 'tasks',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
});
export const apiUpdateTask = (id, data) => ({
    [CALL_API]: {
        types: [UPDATE_TASK, UPDATE_TASK_SUCCESS, UPDATE_TASK_FAILURE],
        endpoint: `tasks/${id}`,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }
});

export const apiDeleteTask = id => ({
    [CALL_API]: {
        types: [DELETE_TASK, DELETE_TASK_SUCCESS, DELETE_TASK_FAILURE],
        endpoint: `tasks/${id}`,
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
});
