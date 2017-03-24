import React, { PropTypes } from 'react';

function Task(props) {
    return (
        <div className="task">
            <input
                type="text"
                value={props.title}
                onChange={evt => props.onTitleChange(evt.target.value)}
            />
            {props.current ? <span>[selected]</span> : null}
            <button onClick={props.onSelect}>Select</button>
            <button onClick={props.onDelete}>Delete</button>
        </div>
    );
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
    current: PropTypes.bool,
    onTitleChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Task;
