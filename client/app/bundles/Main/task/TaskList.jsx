import React, { PropTypes } from 'react';
import BEMHelper from 'react-bem-helper';
import { assign } from 'lodash';
import Task from './Task';

function TaskList(props) {
    //configure the bem helper to get proper classe names
    const classes = new BEMHelper({
        name: 'taskList'
    });

    return (
        <div {...classes()}>
            {props.tasks.map(task => (
                <Task
                    key={task.id}
                    title={task.title}
                    current={task.current}
                    onTitleChange={title =>
                        props.updateTask(assign(task, { title }))}
                    onSelect={() => {
                        props.selectTask(task.id);
                    }}
                    onDelete={() => props.deleteTask(task.id)}
                />
            ))}
            <button
                {...classes('button', 'add')}
                onClick={() => props.addTask({ title: 'New task' })}
            >
                Add
            </button>
        </div>
    );
}
TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    selectTask: PropTypes.func.isRequired,

    addTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
};

export default TaskList;
