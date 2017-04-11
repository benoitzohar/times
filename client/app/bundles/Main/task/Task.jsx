import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { default as swal } from 'sweetalert2';
import { millisecondDurationToHumanReadableString } from '../helpers';

function Task(props) {
    const duration = millisecondDurationToHumanReadableString(props.duration);

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
            <div {...classes('duration')}>{duration}</div>
            <button
                {...classes('button', 'delete')}
                className="btn icon icon-trash"
                onClick={evt => {
                    swal({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then(function() {
                        props.onDelete();
                    });
                }}
            />
        </div>
    );
}

Task.propTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    current: PropTypes.bool,
    onTitleChange: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Task;
