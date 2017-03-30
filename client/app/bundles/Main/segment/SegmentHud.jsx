import React, { PropTypes } from 'react';
import BEMHelper from 'react-bem-helper';
import { debounce, now } from 'lodash';
import { millisecondDurationToHumanReadableString } from '../helpers';

class SegmentHud extends React.Component {
    constructor(props) {
        super(props);

        //configure the bem helper to get proper classe names
        this.classes = new BEMHelper({
            name: 'segmentHud'
        });

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
        this.segment.title = event.target.value;

        if (this.segment.id) {
            this.props.updateSegment(this.segment.id, {
                title: this.segment.title
            });
        } else {
            this.props.addSegment({ title: this.segment.title });
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

        const elapsed = millisecondDurationToHumanReadableString(elapsedMs);

        this.setState({
            elapsed
        });
    }

    render() {
        return (
            <div {...this.classes()}>
                <input
                    {...this.classes('input')}
                    type="text"
                    value={this.segment.title}
                    onChange={this.setTitle}
                />
                <div {...this.classes('mainCounter')}>
                    {this.state.elapsed}
                </div>
                {!this.segment.startdate
                    ? <button
                          {...this.classes('button', 'play')}
                          onClick={this.play}
                      >
                          Play
                      </button>
                    : <button
                          {...this.classes('button', 'pause')}
                          onClick={this.pause}
                      >
                          Pause
                      </button>}
                {this.segment.startdate || this.segment.duration
                    ? <button
                          {...this.classes('button', 'finish')}
                          onClick={this.finish}
                      >
                          Finish
                      </button>
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
