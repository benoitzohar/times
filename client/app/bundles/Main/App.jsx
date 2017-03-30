import React from 'react';
import { Provider } from 'react-redux';

import configureStore from './store';
import MainContainer from './main/MainContainer';

const App = (props, _railsContext) => (
    <Provider store={configureStore(props)}>
        <MainContainer />
    </Provider>
);

export default App;
