import { combineReducers } from 'redux';
import { uniqueId, remove, assign } from 'lodash';

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

        case 'TASK_UPDATE_TITLE':
            return state.map(
                task =>
                    task.id === action.id
                        ? assign({}, task, { title: action.title })
                        : task
            );

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
                assign(
                    {
                        id: 'tmp-segment-' + uniqueId(),
                        startdate: new Date()
                    },
                    segment
                )
            ];

        case 'SEGMENT_UPDATE':
            return state.map(
                segment =>
                    segment.id === action.id
                        ? assign({}, segment, action.segment)
                        : segment
            );

        case 'SEGMENT_REMOVE':
            remove(state, { id: action.id });
            return [...state];

        default:
            return [
                {
                    id: 'tmp-segment-' + uniqueId(),
                    title: 'Test segment 1',
                    startdate: new Date(),
                    duration: 12000
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
