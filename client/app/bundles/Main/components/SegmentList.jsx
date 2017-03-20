import React, { PropTypes } from 'react';
import Segment from './Segment';

function SegmentList(props) {
    return (
        <div className="segment-list">
            {props.segments.map(segment => (
                <Segment
                    key={segment.id}
                    title={segment.title}
                    onDelete={() => props.deleteSegment(segment.id)}
                />
            ))}
        </div>
    );
}

SegmentList.propTypes = {
    segments: PropTypes.array.isRequired,
    removeSegment: PropTypes.func.isRequired
};

export default SegmentList;
