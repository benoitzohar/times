import React, { PropTypes } from 'react';
import debounce from 'lodash';

class SegmentHud extends React.Component {
    constructor(props) {
        super(props);

        this.state = Object.assign({}, props);
        this.state.title = this.state.segment ? this.state.segment.title : '';

        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.finish = this.finish.bind(this);
        this.setTitle = this.setTitle.bind(this);
    }

    play() {
        this.state.onPlay(this.state.title);
    }

    pause() {
        console.log('[debug] pause');
    }

    finish() {
        console.log('[debug] finish');
        this.state.onFinish();
    }

    setTitle(event) {
        this.setState({ title: event.target.value });

        _.debounce(() => {
            this.state.updateSegmentTitle(this.state.title);
        });
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
    updateSegmentTitle: PropTypes.func.isRequired,
    onPlay: PropTypes.func.isRequired,
    onFinish: PropTypes.func.isRequired
};

export default SegmentHud;
