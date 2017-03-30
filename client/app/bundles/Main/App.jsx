import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import TaskListContainer from './task/TaskListContainer';
import SegmentPanelContainer from './segment/SegmentPanelContainer';

const App = (props, _railsContext) => (
    <Provider store={configureStore(props)}>
        <div className="main">
            <TaskListContainer />
            <SegmentPanelContainer />
        </div>
    </Provider>
);

export default App;