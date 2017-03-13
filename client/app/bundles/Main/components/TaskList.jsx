import React, {PropTypes} from 'react';

export default class TaskList extends React.Component {
    static propTypes = {
        tasks: PropTypes.array.isRequired
    };

    constructor(props) {
        super(props);

        // How to set initial state in ES6 class syntax
        // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
        this.state = {
            tasks: this.props.tasks
        };
    }

    render() {
        return (
            <div className="task-list"></div>
        );
    }
}
