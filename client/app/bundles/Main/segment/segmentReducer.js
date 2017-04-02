import { uniqueId, remove, assign } from 'lodash';

import {
    ADD_SEGMENT,
    ADD_SEGMENT_SUCCESS,
    ADD_SEGMENT_FAILURE, //TODO handle failure
    UPDATE_SEGMENT,
    UPDATE_SEGMENT_SUCCESS,
    UPDATE_SEGMENT_FAILURE, //TODO handle failure
    DELETE_SEGMENT,
    DELETE_SEGMENT_SUCCESS,
    DELETE_SEGMENT_FAILURE //TODO handle failure
} from './segmentConstants';

const segments = (state = [], action) => {
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

        default:
            return state;
    }
};

export default segments;
