import React from 'react';
import { Provider } from 'react-redux';
import BEMHelper from 'react-bem-helper';

import configureStore from './store';
import TaskListContainer from './task/TaskListContainer';
import SegmentPanelContainer from './segment/SegmentPanelContainer';

const classes = new BEMHelper({
    name: 'app'
});

const App = (props, _railsContext) => (
    <Provider store={configureStore(props)}>
        <div {...classes()}>
            <div {...classes('row')}>
                <TaskListContainer />
                <SegmentPanelContainer />
            </div>
        </div>
    </Provider>
);

export default App;
