import React, { PropTypes } from 'react';
import { debounce, padStart, now } from 'lodash';
import moment from 'moment';

class SegmentHud extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            elapsed: '00:00:00'
        };

        //scope binding
        [
            'initSegment',
            'initTick',
            'play',
            'pause',
            'finish',
            'setTitle',
            'tick'
        ].map(fn => {
            this[fn] = this[fn].bind(this);
        });

        this.initSegment(props);
    }

    componentDidMount() {
        this.initTick(false);
    }

    componentWillUpdate(nextProps) {
        this.initSegment(nextProps);
        this.initTick(true);

        //reset the elpased time
        //if the segment is empty
        if (!this.segment.id && this.state.elapsed != '00:00:00') {
            this.tick();
        }
    }

    initSegment(props) {
        //save segment
        this.segment = props.segment ? props.segment : {};
    }

    initTick(componentHasBeenMounted) {
        if (!componentHasBeenMounted) {
            this.tick();
        }

        //enable ticker if necessary
        if (!this.ticker) {
            if (this.segment.startdate) {
                this.ticker = setInterval(this.tick, 1000);
            }
        } else if (!this.segment.startdate) {
            //disabled ticker if necessary
            clearInterval(this.ticker);
            this.ticker = undefined;
        }
    }

    getDuration() {
        const currentDuration = this.segment && this.segment.duration
            ? this.segment.duration
            : 0;
        const newDuration = now() - this.segment.startdate;
        return currentDuration + newDuration;
    }

    play() {
        if (this.segment.id) {
            this.props.updateSegment(this.segment.id, {
                startdate: now()
            });
        } else {
            this.props.addSegment({ startdate: now() });
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
            enddate: now()
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

    tick() {
        let elapsedMs = 0;
        if (this.segment.startdate) {
            elapsedMs = this.segment.duration +
                (now() - this.segment.startdate);
        } else if (this.segment.duration) {
            elapsedMs = this.segment.duration;
        }

        const duration = moment.duration(elapsedMs);

        const seconds = duration.seconds();
        const minutes = duration.minutes();
        const hours = duration.hours();
        const days = duration.days();

        let elapsed = [hours, minutes, seconds]
            .map(time => padStart(time, 2, 0))
            .join(':');

        if (days > 0) {
            elapsed = days + ' day' + (days > 1 ? 's' : '') + ' and ' + elapsed;
        }

        this.setState({
            elapsed
        });
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
                    {this.state.elapsed}
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
