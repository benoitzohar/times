import React, { PropTypes } from 'react';

function Task(props) {
    return (
        <div className="task">
            {props.title} {props.current ? <span>selected</span> : null}
            <button onClick={props.onSelect}>Select</button>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    );
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
    current: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Task;
