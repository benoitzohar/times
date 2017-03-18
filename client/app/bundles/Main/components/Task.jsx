import React, { PropTypes } from 'react';

function Task(props, data) {
    return <div className="task" onClick={props.onClick}>{props.title}</div>;
}

Task.propTypes = {
    title: PropTypes.string.isRequired
};

export default Task;
