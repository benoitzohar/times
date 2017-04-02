import { CALL_API } from 'redux-api-middleware';
import { uniqueId } from 'lodash';
import {
    ADD_SEGMENT,
    ADD_SEGMENT_SUCCESS,
    ADD_SEGMENT_FAILURE,
    UPDATE_SEGMENT,
    UPDATE_SEGMENT_SUCCESS,
    UPDATE_SEGMENT_FAILURE,
    DELETE_SEGMENT,
    DELETE_SEGMENT_SUCCESS,
    DELETE_SEGMENT_FAILURE,
    SELECT_SEGMENT,
    SELECT_SEGMENT_SUCCESS,
    SELECT_SEGMENT_FAILURE
} from './segmentConstants';

//get the header object with the code from the state
const headers = function(state) {
    return {
        'Content-Type': 'application/json',
        Authorization: state.params.code
    };
};

export const addSegment = segment => {
    //generate temporary ID for the segment
    const temporaryId = 'tmp-segment-' + uniqueId();

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
            endpoint: state => `/tasks/${state.currentTask.id}/segments`,
            method: 'POST',
            headers,
            body: JSON.stringify(segment)
        }
    };
};
export const updateSegment = segment => ({
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
            `/tasks/${state.currentTask.id}/segments/${segment.id}`,
        method: 'PUT',
        headers,
        body: JSON.stringify(segment)
    }
});

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
        endpoint: state => `/tasks/${state.currentTask.id}/segments/${id}`,
        method: 'DELETE',
        headers
    }
});
