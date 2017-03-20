export const selectTask = id => ({ type: 'TASK_SELECT', id });
export const addTask = title => ({ type: 'TASK_ADD', title });
export const removeTask = id => ({ type: 'TASK_REMOVE', id });

export const addSegment = title => ({ type: 'SEGMENT_ADD', title });
export const pauseSegment = id => ({ type: 'SEGMENT_PAUSE', id });
export const finishSegment = id => ({ type: 'SEGMENT_FINISH', id });
export const removeSegment = id => ({ type: 'SEGMENT_REMOVE', id });
