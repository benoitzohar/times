import { combineReducers } from 'redux';

const code = (state = '', action) => {
    console.log('[debug] action, state', action, state);
    return state;
};

const tasks = (state = '', action) => {
    console.log('[debug] tasks action:', state, action);
    switch (action.type) {
        case 'TASK_SELECT':
            return action.id;
        case 'TASK_ADD':
            return [...state, { id: action.id, title: action.title }];

        default:
            return state;
    }
};

const mainReducer = combineReducers({ code, tasks });

export default mainReducer;
