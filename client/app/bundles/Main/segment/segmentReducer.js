import { uniqueId, remove, assign } from 'lodash';
import { default as swal } from 'sweetalert2';

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
    DELETE_SEGMENT_FAILURE
} from './segmentConstants';

const segments = (state = [], action) => {
    switch (action.type) {
        //RESET
        case RESET_SEGMENTS:
            return [];
        //LOAD
        case LOAD_SEGMENTS:
            //start by resetting the state
            //to avoid having wrong segments while the data is loading
            return [];

        case LOAD_SEGMENTS_SUCCESS:
            return action.payload;

        case LOAD_SEGMENTS_FAILURE:
            swal(
                'Error!',
                'An error occured while loading the times for the current tasks, sorry.',
                'error'
            );
            return state;
        //ADD
        case ADD_SEGMENT:
            return [
                ...state,
                assign({ id: action.meta.temporaryId }, action.meta.segment)
            ];
        case ADD_SEGMENT_SUCCESS:
            return state.map(segment => {
                //replace the item with temporary ID by the actual object
                if (segment.id == action.meta.temporaryId) {
                    return action.payload;
                } else {
                    return segment;
                }
            });

        case ADD_SEGMENT_FAILURE:
            swal(
                'Error!',
                'An error occured while creating the time, sorry.',
                'error'
            );
            return state;
        //UPDATE
        case UPDATE_SEGMENT:
            return state.map(
                segment =>
                    (segment.id === action.meta.segment.id
                        ? assign({}, segment, action.meta.segment)
                        : segment)
            );
        case UPDATE_SEGMENT_FAILURE:
            swal(
                'Error!',
                'An error occured while saving the time, sorry.',
                'error'
            );
            return state;
        //DELETE
        case DELETE_SEGMENT:
            remove(state, { id: action.meta.id });
            return [...state];

        case DELETE_SEGMENT_FAILURE:
            swal(
                'Error!',
                'An error occured while deleting the time, sorry.',
                'error'
            );
            return state;

        default:
            return state;
    }
};

export default segments;
