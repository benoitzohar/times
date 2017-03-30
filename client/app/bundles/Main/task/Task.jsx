import React, { PropTypes } from 'react';
import BEMHelper from 'react-bem-helper';

function Task(props) {
    //configure the bem helper to get proper classe names
    const classes = new BEMHelper({
        name: 'task'
    });

    return (
        <div {...classes()}>
            <input
                {...classes('input')}
                type="text"
                value={props.title}
                onChange={evt => props.onTitleChange(evt.target.value)}
            />
            {props.current ? <span>[selected]</span> : null}
            <button {...classes('button', 'select')} onClick={props.onSelect}>
                Select
            </button>
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
