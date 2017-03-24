import React, { PropTypes } from 'react';
import debounce from 'lodash';

class SegmentHud extends React.Component {
    constructor(props) {
        super(props);

        //scope binding
        ['init', 'play', 'pause', 'finish', 'setTitle'].map(fn => {
            this[fn] = this[fn].bind(this);
        });
        this.init(props);
    }

    componentWillUpdate(nextProps) {
        this.init(nextProps);
    }

    init(props) {
        this.segment = props.segment ? props.segment : {};
    }

    getDuration() {
        const currentDuration = this.segment && this.segment.duration
            ? this.segment.duration
            : 0;
        const newDuration = new Date() - this.segment.startdate;
        return currentDuration + newDuration;
    }

    play() {
        if (this.segment.id) {
            this.props.updateSegment(this.segment.id, {
                startdate: new Date()
            });
        } else {
            this.props.addSegment({ startdate: new Date() });
        }
    }

    pause() {
        this.props.updateSegment(this.segment.id, {
            duration: this.getDuration(),
            startdate: null
        });
    }

    finish() {
        this.props.updateSegment(this.segment.id, {
            duration: this.getDuration(),
            enddate: new Date()
        });
    }

    setTitle(event) {
        const title = event.target.value;
        if (this.segment.id) {
            this.props.updateSegment(this.segment.id, { title });
        } else {
            this.props.addSegment({ title });
        }
    }

    render() {
        return (
            <div className="segment-hud">
                <input
                    type="text"
                    value={this.props.segment ? this.props.segment.title : ''}
                    onChange={this.setTitle}
                />
                <div className="segment-hud__main-counter">
                    00:00
                </div>
                {!this.segment.startdate
                    ? <button onClick={this.play}>Play</button>
                    : <button onClick={this.pause}>Pause</button>}
                {this.segment.startdate || this.segment.duration
                    ? <button onClick={this.finish}>Finish</button>
                    : null}
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
