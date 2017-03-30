import React, { PropTypes } from 'react';
import BEMHelper from 'react-bem-helper';

import Segment from './Segment';

function SegmentList(props) {
    //only show visible segments
    const segments = props.segments.map(
        segment => segment.enddate ? segment : null
    );

    //configure the bem helper to get proper classe names
    const classes = new BEMHelper({
        name: 'segmentList'
    });

    return (
        <div {...classes()}>
            {segments.map(
                segment =>
                    segment
                        ? <Segment
                              key={segment.id}
                              title={segment.title}
                              duration={segment.duration}
                              onTitleChange={title =>
                                  props.updateSegment(segment.id, { title })}
                              onDelete={() => props.removeSegment(segment.id)}
                          />
                        : null
            )}
        </div>
    );
}

SegmentList.propTypes = {
    segments: PropTypes.array.isRequired,
    updateSegment: PropTypes.func.isRequired,
    removeSegment: PropTypes.func.isRequired
};

export default SegmentList;