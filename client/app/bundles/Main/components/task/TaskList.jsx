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
                    onTitleChange={title => {
                        props.updateTaskTitle(task.id, title);
                        props.apiUpdateTask(props.code, task.id, { title });
                    }}
                    onSelect={() => {
                        props.selectTask(task.id);
                    }}
                    onDelete={() => {
                        props.removeTask(task.id);
                        props.apiDeleteTask(props.code, task.id);
                    }}
                />
            ))}
            <button
                onClick={() => {
                    props.addTask('New task');
                    props.apiAddTask(props.code, { title: 'New task' });
                }}
            >
                Add
            </button>
        </div>
    );
}
TaskList.propTypes = {
    code: PropTypes.string.isRequired,

    //task
    tasks: PropTypes.array.isRequired,
    addTask: PropTypes.func.isRequired,
    updateTaskTitle: PropTypes.func.isRequired,
    selectTask: PropTypes.func.isRequired,
    removeTask: PropTypes.func.isRequired,

    //api
    apiAddTask: PropTypes.func.isRequired,
    apiUpdateTask: PropTypes.func.isRequired,
    apiDeleteTask: PropTypes.func.isRequired
};

export default TaskList;
