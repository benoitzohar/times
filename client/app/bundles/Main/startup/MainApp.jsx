import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './mainStore';
import MainContainer from './MainContainer';

// Configure the redux store Get props from the Rails view into it.
const MainApp = (props, _railsContext) => (
    <Provider store={configureStore(props)}>
        <MainContainer />
    </Provider>
);

export default MainApp;
