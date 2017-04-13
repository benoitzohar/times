import { CALL_API } from 'redux-api-middleware';
import { uniqueId, startsWith } from 'lodash';
import {
    RESET_SEGMENTS,
    LOAD_SEGMENTS,
    LOAD_SEGMENTS_SUCCESS,
    LOAD_SEGMENTS_FAILURE,
    ADD_SEGMENT,
    ADD_SEGMENT_SUCCESS,
    ADD_SEGMENT_FAILURE,
    UPDATE_SEGMENT,
    UPDATE_SEGMENT_SUCCESS,
    UPDATE_SEGMENT_FAILURE,
    DELETE_SEGMENT,
    DELETE_SEGMENT_SUCCESS,
    DELETE_SEGMENT_FAILURE,
    SEGMENT_PREFIX
} from './segmentConstants';

//get the header object with the code from the state
const headers = function(state) {
    return {
        'Content-Type': 'application/json',
        Authorization: state.params.code
    };
};

export const resetSegments = () => RESET_SEGMENTS;

export const loadSegments = taskId => ({
    [CALL_API]: {
        types: [LOAD_SEGMENTS, LOAD_SEGMENTS_SUCCESS, LOAD_SEGMENTS_FAILURE],
        endpoint: `/tasks/${taskId}/segments`,
        method: 'GET',
        headers
    }
});

export const addSegment = segment => {
    //generate temporary ID for the segment
    const temporaryId = SEGMENT_PREFIX + uniqueId();

    return {
        [CALL_API]: {
            types: [
                {
                    type: ADD_SEGMENT,
                    meta: { segment, temporaryId }
                },
                {
                    type: ADD_SEGMENT_SUCCESS,
                    meta: { temporaryId }
                },
                ADD_SEGMENT_FAILURE
            ],
            endpoint: state => `/tasks/${state.params.currentTask.id}/segments`,
            method: 'POST',
            headers,
            body: JSON.stringify(segment)
        }
    };
};
export const updateSegment = segment => {
    //do not save if the segment has not been created yet
    if (!segment.id || startsWith(segment.id, SEGMENT_PREFIX)) {
        return;
    }

    return {
        [CALL_API]: {
            types: [
                {
                    type: UPDATE_SEGMENT,
                    meta: { segment }
                },
                UPDATE_SEGMENT_SUCCESS,
                UPDATE_SEGMENT_FAILURE
            ],
            endpoint: state =>
                `/tasks/${state.params.currentTask.id}/segments/${segment.id}`,
            method: 'PUT',
            headers,
            body: JSON.stringify(segment)
        }
    };
};

export const deleteSegment = id => ({
    [CALL_API]: {
        types: [
            {
                type: DELETE_SEGMENT,
                meta: { id }
            },
            DELETE_SEGMENT_SUCCESS,
            DELETE_SEGMENT_FAILURE
        ],
        endpoint: state =>
            `/tasks/${state.params.currentTask.id}/segments/${id}`,
        method: 'DELETE',
        headers
    }
});
