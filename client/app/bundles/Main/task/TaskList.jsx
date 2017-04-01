import React, { PropTypes } from 'react';
import BEMHelper from 'react-bem-helper';
import { assign } from 'lodash';
import Task from './Task';

function TaskList(props) {
    //configure the bem helper to get proper classe names
    const classes = new BEMHelper({
        name: 'taskList'
    });

    console.log('[debug] props', props);

    return (
        <div {...classes()}>
            {props.tasks.map(task => (
                <Task
                    key={task.id}
                    title={task.title}
                    current={task.id === props.params.currentTask.id}
                    onTitleChange={title =>
                        props.updateTask(assign(task, { title }))}
                    onSelect={() => props.selectTask(task)}
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
    params: PropTypes.object.isRequired,
    tasks: PropTypes.array.isRequired,

    addTask: PropTypes.func.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired,
    selectTask: PropTypes.func.isRequired
};

export default TaskList;
