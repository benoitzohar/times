import React, { PropTypes } from 'react';

function Segment(props) {
    return (
        <div className="segment">
            <input
                type="text"
                value={props.title}
                onChange={evt => props.onTitleChange(evt.target.value)}
            />
            <button onClick={props.onDelete}>Delete</button>
        </div>
    );
}

Segment.propTypes = {
    title: PropTypes.string.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Segment;
