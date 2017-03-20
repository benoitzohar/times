import React, { PropTypes } from 'react';
import SegmentHud from './SegmentHud';
import SegmentList from './SegmentList';

function SegmentPanel(props) {
    const mainSegment = last(props.segments).duration
        ? null
        : last(props.segments);
    return (
        <div className="segment-panel">
            <SegmentHud
                segment={mainSegment}
                onPlay={props.onPlay}
                onFinish={props.onFinish}
            />
            <SegmentList segments={props.segments} />
        </div>
    );
}

SegmentPanel.propTypes = {
    segments: PropTypes.array.isRequired,
    onPlay: PropTypes.function.required,
    onFinish: PropTypes.function.required
};

export default SegmentPanel;
