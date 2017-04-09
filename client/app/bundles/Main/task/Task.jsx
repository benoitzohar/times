import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';

function Task(props) {
    //configure the bem helper to get proper classe names
    const classes = new BEMHelper({
        name: 'task'
    });

    return (
        <div
            {...classes('', props.current ? 'selected' : null)}
            onClick={props.onSelect}
        >
            <input
                {...classes('input')}
                type="text"
                value={props.title}
                onChange={evt => props.onTitleChange(evt.target.value)}
            />
            <button {...classes('button', 'delete')} onClick={props.onDelete}>
                Delete
            </button>
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
