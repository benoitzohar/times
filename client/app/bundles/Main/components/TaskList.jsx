import React, { PropTypes } from 'react';
import Task from './Task';

function TaskList(props) {
    return (
        <div className="task-list">
            {props.tasks.map(task => (
                <Task
                    key={task.id}
                    title={task.title}
                    onClick={() => props.selectTask(task)}
                />
            ))}
            <button onClick={() => props.addTask()}>
                Add
            </button>
        </div>
    );
}
TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default TaskList;
