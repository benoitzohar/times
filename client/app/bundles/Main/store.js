import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';

import params from './reducers';
import tasks from './task/taskReducer';
import segments from './segment/segmentReducer';

const reducer = combineReducers({ params, tasks, segments });
const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export default function configureStore(railsProps) {
    return createStoreWithMiddleware(reducer, railsProps);
}
