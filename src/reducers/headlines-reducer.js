import * as types from '../actions/action-types';
import initialState from './initialState';

export default (state = initialState.headlines, action) => {
  switch (action.type) {
    case types.GET_HEADLINES:
      return action.headlines.articles;
    default:
      return state;
  }
};
