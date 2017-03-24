import { uniqueId, remove, assign } from 'lodash';

const reducer = (state = [], action) => {
    switch (action.type) {
        case 'SEGMENT_ADD':
            return [
                ...state,
                assign(
                    {
                        id: 'tmp-segment-' + uniqueId(),
                        startdate: new Date()
                    },
                    segment
                )
            ];

        case 'SEGMENT_UPDATE':
            return state.map(
                segment =>
                    segment.id === action.id
                        ? assign({}, segment, action.segment)
                        : segment
            );

        case 'SEGMENT_REMOVE':
            remove(state, { id: action.id });
            return [...state];

        default:
            return [
                {
                    id: 'tmp-segment-' + uniqueId(),
                    title: 'Test segment 1',
                    startdate: new Date(),
                    duration: 12000,
                    enddate: null
                },
                {
                    id: 'tmp-segment-' + uniqueId(),
                    title: 'Test segment 2',
                    startdate: new Date(),
                    duration: 0,
                    enddate: null
                }
            ];
    }
};

export default reducer;
