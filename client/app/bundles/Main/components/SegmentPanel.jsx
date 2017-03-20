import React, { PropTypes } from 'react';
import { last } from 'lodash';
import SegmentHud from './SegmentHud';
import SegmentList from './SegmentList';

function SegmentPanel(props) {
    const lastSegment = last(props.segments);
    const mainSegment = lastSegment && lastSegment.duration
        ? null
        : last(props.segments);
    return (
        <div className="segment-panel">
            <SegmentHud
                segment={mainSegment}
                onPlay={props.addSegment}
                onPause={props.pauseSegment}
                onFinish={props.finishSegment}
            />
            <SegmentList
                segments={props.segments}
                removeSegment={props.removeSegment}
            />
        </div>
    );
}

SegmentPanel.propTypes = {
    segments: PropTypes.array.isRequired,
    addSegment: PropTypes.func.isRequired,
    pauseSegment: PropTypes.func.isRequired,
    finishSegment: PropTypes.func.isRequired,
    removeSegment: PropTypes.func.isRequired
};

export default SegmentPanel;
