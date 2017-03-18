import React, { PropTypes } from 'react';

import TaskList from './TaskList';

export default class Main extends React.Component {
    static propTypes = {
        tasks: PropTypes.array.isRequired,
        selectTask: PropTypes.func.isRequired,
        addTask: PropTypes.func.isRequired,
        removeTask: PropTypes.func.isRequired
    };

    /**
    * @param props - Comes from your rails view.
    * @param _railsContext - Comes from React on Rails
    */
    constructor(props, _railsContext) {
        super(props);

        this.state = {
            tasks: this.props.tasks,
            currentTask: null
        };
    }

    render() {
        return (
            <div>
                <TaskList
                    tasks={this.state.tasks}
                    addTask={this.props.addTask}
                    selectTask={this.props.selectTask}
                />

            </div>
        );
    }
}
