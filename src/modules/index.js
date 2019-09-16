import {combineReducers} from "redux";
import counter from './redux-actions-counter';
import todos from './todos'

const rootReducer = combineReducers({
    counter,
    todos
});

export default rootReducer;