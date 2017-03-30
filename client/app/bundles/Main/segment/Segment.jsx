import React, { PropTypes } from 'react';
import { millisecondDurationToHumanReadableString } from '../helpers';

function Segment(props) {
    const duration = millisecondDurationToHumanReadableString(props.duration);
    return (
        <div className="segment">
            <input
                type="text"
                value={props.title}
                onChange={evt => props.onTitleChange(evt.target.value)}
            />
            Duration: {duration}
            <button onClick={props.onDelete}>Delete</button>
        </div>
    );
}

Segment.propTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Segment;
