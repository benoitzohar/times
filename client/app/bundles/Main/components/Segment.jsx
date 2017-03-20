import React, { PropTypes } from 'react';

function Segment(props) {
    return (
        <div className="segment">
            {props.title}
            <button onClick={props.onDelete}>Delete</button>
        </div>
    );
}

Segment.propTypes = {
    title: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Segment;
