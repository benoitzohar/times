import React, { PropTypes } from 'react';
import TaskList from './task/TaskList';
import SegmentPanel from './segment/SegmentPanel';

function Main(props) {
    console.log('[debug] props', props);
    return (
        <div>
            <TaskList
                code={props.code}
                tasks={props.tasks}
                addTask={props.addTask}
                updateTaskTitle={props.updateTaskTitle}
                selectTask={props.selectTask}
                removeTask={props.removeTask}
                apiAddTask={props.apiAddTask}
                apiUpdateTask={props.apiUpdateTask}
                apiDeleteTask={props.apiDeleteTask}
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
    //main
    code: PropTypes.string.isRequired,

    //tasks
    tasks: PropTypes.array.isRequired,
    selectTask: PropTypes.func.isRequired,
    updateTaskTitle: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,

    //api task
    apiAddTask: PropTypes.func.isRequired,
    apiUpdateTask: PropTypes.func.isRequired,
    apiDeleteTask: PropTypes.func.isRequired,

    //segments
    segments: PropTypes.array.isRequired,
    addSegment: PropTypes.func.isRequired,
    updateSegment: PropTypes.func.isRequired,
    removeSegment: PropTypes.func.isRequired
};

export default Main;
