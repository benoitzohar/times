import React, { PropTypes } from 'react';
import { last } from 'lodash';
import SegmentHud from './SegmentHud';
import SegmentList from './SegmentList';

function SegmentPanel(props) {
    const lastSegment = last(props.segments);
    const mainSegment = lastSegment && lastSegment.duration
        ? null
        : lastSegment;

    return (
        <div className="segment-panel">
            <SegmentHud
                segment={mainSegment}
                addSegment={props.addSegment}
                updateSegment={props.updateSegment}
            />
            <SegmentList
                segments={props.segments}
                updateSegment={props.updateSegment}
                removeSegment={props.removeSegment}
            />
        </div>
    );
}

SegmentPanel.propTypes = {
    segments: PropTypes.array.isRequired,
    addSegment: PropTypes.func.isRequired,
    updateSegment: PropTypes.func.isRequired,
    removeSegment: PropTypes.func.isRequired
};

export default SegmentPanel;
