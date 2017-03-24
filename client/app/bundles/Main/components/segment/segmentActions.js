export const addSegment = segment => ({ type: 'SEGMENT_ADD', segment });
export const updateSegment = (id, segment) => ({
    type: 'SEGMENT_UPDATE',
    id,
    segment
});
export const removeSegment = id => ({ type: 'SEGMENT_REMOVE', id });
