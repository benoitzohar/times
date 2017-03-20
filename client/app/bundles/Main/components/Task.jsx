import React, { PropTypes } from 'react';

function Task(props) {
    console.log('[debug] props', props);
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
    current: PropTypes.bool
};

export default Task;
