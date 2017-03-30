import { createStore, applyMiddleware, combineReducers } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import mainReducer from './main/mainReducer';

const reducer = combineReducers(mainReducer);
const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export default function configureStore(railsProps) {
    return createStoreWithMiddleware(mainReducer, railsProps);
}
