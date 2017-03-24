import React, { PropTypes } from 'react';
import debounce from 'lodash';

class SegmentHud extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.segment ? props.segment.id : null,
            segment: props.segment ? props.segment.title : '',
            addSegment: props.addSegment,
            updateSegment: props.updateSegment
        };

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.finish = this.finish.bind(this);
        this.setTitle = this.setTitle.bind(this);
    }

    play() {
        console.log('[debug] play');
    }

    pause() {
        console.log('[debug] pause');
    }

    finish() {
        console.log('[debug] finish');
    }

    setTitle(event) {
        const title = event.target.value;
        if (this.state.id) {
            this.state.updateSegment(this.state.id, { title });
        } else {
            this.state.addSegment({ title });
        }
    }

    render() {
        return (
            <div className="segment-hud">
                <input
                    type="text"
                    value={this.state.title}
                    onChange={this.setTitle}
                />
                <div className="segment-hud__main-counter">
                    00:00
                </div>
                <button onClick={this.play}>Play</button>
                <button onClick={this.pause}>Pause</button>
                <button onClick={this.finish}>Finish</button>
            </div>
        );
    }
}

SegmentHud.propTypes = {
    segment: PropTypes.object,
    addSegment: PropTypes.func.isRequired,
    updateSegment: PropTypes.func.isRequired
};

export default SegmentHud;
