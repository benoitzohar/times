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
    onPlay: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired
};

export default SegmentHud;
