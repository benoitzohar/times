import { uniqueId, remove, assign } from 'lodash';
import { default as swal } from 'sweetalert2';

import {
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
    console.log('[debug] action.type', action.type);
    switch (action.type) {
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

        case UPDATE_SEGMENT:
            return state.map(
                segment =>
                    segment.id === action.meta.segment.id
                        ? assign({}, segment, action.meta.segment)
                        : segment
            );

        case DELETE_SEGMENT:
            remove(state, { id: action.meta.id });
            return [...state];

        case ADD_SEGMENT_FAILURE:
            swal(
                'Error!',
                'An error occured while creating the time, sorry.',
                'error'
            );
            break;
        case UPDATE_SEGMENT_FAILURE:
            break;
        case DELETE_SEGMENT_FAILURE:
            break;

        default:
            return state;
    }
};

export default segments;
