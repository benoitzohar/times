import React from 'react';
import PropTypes from 'prop-types';
import BEMHelper from 'react-bem-helper';
import { debounce, assign } from 'lodash';
import { millisecondDurationToHumanReadableString } from '../helpers';

class SegmentHud extends React.Component {
    constructor(props) {
        super(props);

        //configure the bem helper to get proper classe names
        this.classes = new BEMHelper({
            name: 'segmentHud'
        });

        //scope binding
        [
            'initSegment',
            'initTick',
            'play',
            'pause',
            'finish',
            'setTitle',
            'tick',
            'getElapsed'
        ].map(fn => {
            this[fn] = this[fn].bind(this);
        });

        this.initSegment(props);

        this.state = {
            elapsed: this.getElapsed()
        };
    }

    componentDidMount() {
        this.initTick(false);
    }

    componentWillUpdate(nextProps) {
        this.initSegment(nextProps);
        this.state.elapsed = this.getElapsed();
        this.initTick(true);

        //reset the elpased time
        //if the segment is empty
        if (!this.segment.id && this.state.elapsed != '00:00:00') {
            this.tick();
        }
    }

    initSegment(props) {
        //save segment
        this.segment = props.segment ? props.segment : { title: 'Untitled' };
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
        const newDuration = this.segment && this.segment.startdate
            ? new Date() - new Date(this.segment.startdate)
            : 0;

        return currentDuration + newDuration;
    }

    play() {
        if (this.segment.id) {
            this.props.updateSegment(
                assign(this.segment, {
                    startdate: new Date()
                })
            );
        } else {
            this.props.addSegment({
                startdate: new Date(),
                title: this.segment.title
            });
        }
    }

    pause() {
        this.props.updateSegment(
            assign(this.segment, {
                duration: this.getDuration(),
                startdate: null
            })
        );
    }

    finish() {
        this.props.updateSegment(
            assign(this.segment, {
                startdate: null,
                duration: this.getDuration(),
                enddate: new Date()
            })
        );
    }

    setTitle(event) {
        this.segment.title = event.target.value;
        if (this.segment.id) {
            this.props.updateSegment(this.segment);
        } else {
            this.props.addSegment({ title: this.segment.title });
        }
    }

    getElapsed() {
        let elapsedMs = 0;

        if (this.segment.startdate) {
            const duration = this.segment.duration || 0;
            elapsedMs =
                duration + (new Date() - new Date(this.segment.startdate));
        } else if (this.segment.duration) {
            elapsedMs = this.segment.duration;
        }

        return millisecondDurationToHumanReadableString(elapsedMs);
    }

    tick() {
        this.setState({
            elapsed: this.getElapsed()
        });
    }

    render() {
        return (
            <div {...this.classes()}>
                <div {...this.classes('mainCounter')}>
                    {this.state.elapsed}
                </div>
                <input
                    {...this.classes('input')}
                    type="text"
                    value={this.segment.title}
                    onChange={this.setTitle}
                />
                <div {...this.classes('buttons')}>
                    {!this.segment.startdate
                        ? <button
                              {...this.classes('button', 'play', 'icon-play')}
                              onClick={this.play}
                          />
                        : <button
                              {...this.classes('button', 'pause', 'icon-pause')}
                              onClick={this.pause}
                          />}
                    {this.segment.startdate || this.segment.duration
                        ? <button
                              {...this.classes(
                                  'button',
                                  'finish',
                                  'icon-check'
                              )}
                              onClick={this.finish}
                          />
                        : null}
                </div>
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
