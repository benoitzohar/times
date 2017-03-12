import {combineReducers} from 'redux'
import {MAIN_CODE_UPDATE} from '../constants/mainConstants'

const code = (state = '', action) => {
    switch (action.type) {
        case MAIN_CODE_UPDATE:
            return action.text
        default:
            return state
    }
};

const mainReducer = combineReducers({code})

export default mainReducer
