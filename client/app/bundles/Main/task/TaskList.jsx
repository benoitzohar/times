import React from 'react';
import PropTypes from 'prop-types';
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
            <div {...classes('wrapper')}>
                {props.tasks.map(task => (
                    <Task
                        key={task.id}
                        title={task.title}
                        duration={task.duration}
                        current={task.id === props.params.currentTask.id}
                        onTitleChange={title =>
                            props.updateTask(assign(task, { title }))}
                        onSelect={() => {
                            props.selectTask(task);
                            props.loadSegments(task.id);
                        }}
                        onDelete={() => props.deleteTask(task.id)}
                    />
                ))}
            </div>
            <button
                {...classes('button', 'add')}
                onClick={() => {
                    const task = { title: 'New task' };
                    const res = props.addTask(task);

                    props.selectTask(task);
                    props.resetSegments();
                }}
            >
                New Task
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
    selectTask: PropTypes.func.isRequired,

    loadSegments: PropTypes.func.isRequired
};

export default TaskList;
