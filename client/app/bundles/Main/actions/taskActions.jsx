export const selectTask = task => ({ type: 'TASK_SELECT', task });

export const addTask = task => ({ type: 'TASK_ADD', task });
export const removeTask = task => ({ type: 'TASK_REMOVE', task });
