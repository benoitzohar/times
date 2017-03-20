import React, { PropTypes } from 'react';
import TaskList from './TaskList';
import SegmentPanel from './SegmentPanel';

function Main(props) {
    return (
        <div>
            <TaskList
                tasks={props.tasks}
                addTask={props.addTask}
                selectTask={props.selectTask}
                removeTask={props.removeTask}
            />
            <SegmentPanel
                segments={props.segments}
                addSegment={props.addSegment}
                pauseSegment={props.pauseSegment}
                finishSegment={props.finishSegment}
                removeSegment={props.removeSegment}
            />
        </div>
    );
}

Main.propTypes = {
    //tasks
    tasks: PropTypes.array.isRequired,
    selectTask: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,

    //segments
    segments: PropTypes.array.isRequired,
    addSegment: PropTypes.func.isRequired,
    pauseSegment: PropTypes.func.isRequired,
    finishSegment: PropTypes.func.isRequired,
    removeSegment: PropTypes.func.isRequired
};

export default Main;
