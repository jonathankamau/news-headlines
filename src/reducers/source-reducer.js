import * as types from '../actions/action-types';
import initialState from './initialState';

export default (state = initialState.sources, action) => {
  switch (action.type) {
    case types.GET_SOURCES:
      return action.sources.sources;
    default:
      return state;
  }
};
