import { combineReducers } from 'redux';
import taskReducer from './task';
import uiReducer from './ui';
import modalReducer from './modal';

const rootReducers = combineReducers({
    task: taskReducer,
    ui: uiReducer,
    modal: modalReducer
});

export default rootReducers;
