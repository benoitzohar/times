import { combineReducers } from 'redux';
import { uniqueId, remove } from 'lodash';

const code = (state = '', action) => {
    return state;
};

const tasks = (state = [], action) => {
    switch (action.type) {
        case 'TASK_SELECT':
            const tasks = [...state];
            tasks.map(task => {
                task.current = task.id === action.id;
            });
            return tasks;

        case 'TASK_ADD':
            return [
                ...state,
                { id: 'tmp-task-' + uniqueId(), title: action.title }
            ];

        case 'TASK_REMOVE':
            remove(state, { id: action.id });
            return [...state];

        default:
            return state;
    }
};

const segments = (state = [], action) => {
    switch (action.type) {
        case 'SEGMENT_ADD':
            return [
                ...state,
                {
                    id: 'tmp-segment-' + uniqueId(),
                    title: action.title,
                    startdate: new Date()
                }
            ];

        case 'SEGMENT_REMOVE':
            remove(state, { id: action.id });
            return [...state];

        default:
            return [
                {
                    id: 'tmp-segment-' + uniqueId(),
                    title: 'Test segment 1',
                    startdate: new Date()
                },
                {
                    id: 'tmp-segment-' + uniqueId(),
                    title: 'Test segment 2',
                    startdate: new Date()
                }
            ];
    }
};

const mainReducer = combineReducers({ code, tasks, segments });

export default mainReducer;
