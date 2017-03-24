import React, { PropTypes } from 'react';
import TaskList from './task/TaskList';
import SegmentPanel from './segment/SegmentPanel';

function Main(props) {
    return (
        <div>
            <TaskList
                tasks={props.tasks}
                addTask={props.addTask}
                updateTaskTitle={props.updateTaskTitle}
                selectTask={props.selectTask}
                removeTask={props.removeTask}
            />
            <SegmentPanel
                segments={props.segments}
                addSegment={props.addSegment}
                updateSegment={props.updateSegment}
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
    updateTaskTitle: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,

    //segments
    segments: PropTypes.array.isRequired,
    addSegment: PropTypes.func.isRequired,
    updateSegment: PropTypes.func.isRequired,
    removeSegment: PropTypes.func.isRequired
};

export default Main;
