import React, {PropTypes} from 'react';

import List from './List'

export default class Main extends React.Component {
    static propTypes = {
        code: PropTypes.string.isRequired,
        updateCode: PropTypes.func.isRequired
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
            code: this.props.code
        };
    }

    updateCode = (code) => {
        this.setState({code});
    };

    render() {
        return (
            <div>
                <h3>
                    Hello, {this.state.code}!
                    <List></List>
                </h3>
                <hr/>
                <form >
                    <label htmlFor="name">
                        Change current code code is
                    </label>
                    <input id="code" type="text" value={this.state.code} onChange={(e) => this.updateCode(e.target.value)}/>
                </form>
            </div>
        );
    }
}
