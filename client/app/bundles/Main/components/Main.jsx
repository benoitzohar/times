import React, { PropTypes } from 'react';
import TaskList from './TaskList';

function Main(props) {
    return (
        <div>
            <TaskList
                tasks={props.tasks}
                addTask={props.addTask}
                selectTask={props.selectTask}
                removeTask={props.removeTask}
            />
            <SegmentPanel segments={props.segments} />
        </div>
    );
}

Main.propTypes = {
    tasks: PropTypes.array.isRequired,
    selectTask: PropTypes.func.isRequired,
    addTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired
};

export default Main;
