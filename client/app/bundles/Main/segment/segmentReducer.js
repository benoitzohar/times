import { uniqueId, remove, assign } from 'lodash';

const segments = (state = [], action) => {
    console.log('[debug] segments action', action);
    switch (action.type) {
        case 'SEGMENT_ADD':
            return [
                ...state,
                assign(
                    {
                        id: 'tmp-segment-' + uniqueId(),
                        startdate: null,
                        duration: 0,
                        enddate: null
                    },
                    action.segment
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
                    enddate: new Date(new Date() + 12000)
                },
                {
                    id: 'tmp-segment-' + uniqueId(),
                    title: 'Test segment 2',
                    startdate: new Date(new Date() - 1234000),
                    duration: 0,
                    enddate: null
                }
            ];
    }
};

export default segments;
