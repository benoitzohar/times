import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { default as swal } from 'sweetalert2';
import { millisecondDurationToHumanReadableString } from '../helpers';

function Segment(props) {
    const duration = millisecondDurationToHumanReadableString(props.duration);

    //configure the bem helper to get proper classe names
    const classes = new BEMHelper({
        name: 'segment'
    });

    return (
        <div {...classes()}>
            <input
                {...classes('input')}
                type="text"
                value={props.title}
                onChange={evt => props.onTitleChange(evt.target.value)}
            />
            <span {...classes('duration')}>
                Duration: {duration}
            </span>
            <button
                {...classes('button', 'delete', 'icon-trash')}
                onClick={evt => {
                    swal({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        type: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#d33',
                        cancelButtonColor: '#3085d6',
                        confirmButtonText: 'Yes, delete it!'
                    }).then(function() {
                        props.onDelete();
                    });
                }}
            />
        </div>
    );
}

Segment.propTypes = {
    title: PropTypes.string,
    duration: PropTypes.number,
    onTitleChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Segment;
