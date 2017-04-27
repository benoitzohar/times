import React, { PropTypes } from 'react';
import { assign } from 'lodash';
import BEMHelper from 'react-bem-helper';

import Segment from './Segment';

function SegmentList(props) {
    //only show visible segments
    let segments = props.segments.filter(segment => !!segment.enddate);

    //order by end date
    segments.sort((a, b) => new Date(a.enddate) - new Date(b.enddate));

    //configure the bem helper to get proper classe names
    const classes = new BEMHelper({
        name: 'segmentList'
    });

    return (
        <div {...classes()}>
            {segments.map(
                segment =>
                    (segment
                        ? <Segment
                              key={segment.id}
                              title={segment.title}
                              duration={segment.duration}
                              onTitleChange={title =>
                                  props.updateSegment(
                                      assign(segment, { title })
                                  )}
                              onDelete={() => props.deleteSegment(segment.id)}
                          />
                        : null)
            )}
        </div>
    );
}

SegmentList.propTypes = {
    segments: PropTypes.array.isRequired,
    updateSegment: PropTypes.func.isRequired,
    deleteSegment: PropTypes.func.isRequired
};

export default SegmentList;
