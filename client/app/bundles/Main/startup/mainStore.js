import { createStore } from 'redux';
import mainReducer from './mainReducer';

const configureStore = railsProps => createStore(mainReducer, railsProps);

export default configureStore;
