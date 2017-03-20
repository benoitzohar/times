import React, { PropTypes } from 'react';
import Task from './Task';

function TaskList(props) {
    return (
        <div className="task-list">
            {props.tasks.map(task => (
                <Task
                    key={task.id}
                    title={task.title}
                    current={task.current}
                    onSelect={() => props.selectTask(task.id)}
                    onDelete={() => props.removeTask(task.id)}
                />
            ))}
            <button onClick={() => props.addTask('New task')}>
                Add
            </button>
        </div>
    );
}
TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default TaskList;
