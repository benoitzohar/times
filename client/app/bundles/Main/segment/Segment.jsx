import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
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
            Duration: {duration}
            <button {...classes('button')} onClick={props.onDelete}>
                Delete
            </button>
        </div>
    );
}

Segment.propTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Segment;
