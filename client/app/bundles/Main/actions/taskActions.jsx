export const selectTask = id => ({ type: 'TASK_SELECT', id });
export const addTask = title => ({ type: 'TASK_ADD', title });
export const removeTask = id => ({ type: 'TASK_REMOVE', id });
