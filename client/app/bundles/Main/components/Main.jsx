import React, { PropTypes } from 'react';

import TaskList from './TaskList';

export default class Main extends React.Component {
    static propTypes = {
        tasks: PropTypes.array.isRequired,
        selectTask: PropTypes.func.isRequired
    };

    /**
    * @param props - Comes from your rails view.
    * @param _railsContext - Comes from React on Rails
    */
    constructor(props, _railsContext) {
        super(props);

        // How to set initial state in ES6 class syntax
        // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
        this.state = {
            tasks: this.props.tasks,
            currentTask: null
        };
    }

    render() {
        return (
            <div>
                <TaskList tasks={this.state.tasks} />
                <div className="panel" />
                <button>Add</button>
            </div>
        );
    }
}
