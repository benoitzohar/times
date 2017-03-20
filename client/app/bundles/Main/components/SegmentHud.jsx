import React, { PropTypes } from 'react';

function SegmentHud(props) {
    return (
        <div className="segment-hud">
            <button onClick={props.onPlay}>Play</button>
            <button onClick={props.onFinish}>Finish</button>
        </div>
    );
}

SegmentHud.propTypes = {
    segment: PropTypes.object,
    onPlay: PropTypes.function.required,
    onFinish: PropTypes.function.required
};

export default SegmentHud;
