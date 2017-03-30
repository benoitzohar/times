import { uniqueId, remove, assign } from 'lodash';

const reducer = (state = [], action) => {
    console.log('[debug] state, action', state, action);
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

export default reducer;
