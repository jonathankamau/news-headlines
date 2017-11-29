import sources from './source-reducer.js';
import headlines from './headlines-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  sources,
  headlines
});

export default rootReducer;
