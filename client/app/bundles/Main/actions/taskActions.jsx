export const selectTask = id => ({ type: 'TASK_SELECT', id });
export const addTask = title => ({ type: 'TASK_ADD', title });
export const updateTaskTitle = (id, title) => ({
    type: 'TASK_UPDATE_TITLE',
    id,
    title
});
export const removeTask = id => ({ type: 'TASK_REMOVE', id });

export const addSegment = segment => ({ type: 'SEGMENT_ADD', segment });
export const updateSegment = (id, segment) => ({
    type: 'SEGMENT_UPDATE',
    id,
    segment
});
export const removeSegment = id => ({ type: 'SEGMENT_REMOVE', id });
