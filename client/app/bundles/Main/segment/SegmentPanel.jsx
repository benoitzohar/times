import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { last } from 'lodash';
import SegmentHud from './SegmentHud';
import SegmentList from './SegmentList';

function SegmentPanel(props) {
    const lastSegment = last(props.segments);
    const mainSegment = lastSegment && lastSegment.enddate ? null : lastSegment;

    //configure the bem helper to get proper classe names
    const classes = new BEMHelper({
        name: 'segmentPanel'
    });

    return (
        <div {...classes()}>
            <h1 {...classes('title')}>{props.params.currentTask.title}</h1>
            <SegmentHud
                segment={mainSegment}
                addSegment={props.addSegment}
                updateSegment={props.updateSegment}
            />
            <SegmentList
                segments={props.segments}
                updateSegment={props.updateSegment}
                deleteSegment={props.deleteSegment}
            />
        </div>
    );
}

SegmentPanel.propTypes = {
    params: PropTypes.object.isRequired,
    segments: PropTypes.array.isRequired,
    addSegment: PropTypes.func.isRequired,
    updateSegment: PropTypes.func.isRequired,
    deleteSegment: PropTypes.func.isRequired
};

export default SegmentPanel;
