import React, {PropTypes} from 'react';

export default class List extends React.Component {
    static propTypes = {
        code: PropTypes.string.isRequired, // this is passed from the Rails view
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
            <div className="list"></div>
        );
    }
}
