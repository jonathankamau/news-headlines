import * as types from './action-types';
import headlinesApi from '../api/headlinesApi';

export function loadHeadlinesSuccess(headlines) {
  return {type: types.GET_HEADLINES, headlines};
}

export function loadHeadlines(sourceName) {  
  return function(dispatch) {
    return headlinesApi.getHeadlines(sourceName).then(headlines => {
      console.log(sourceName, 'Headlines:', headlines);
      dispatch(loadHeadlinesSuccess(headlines));
    }).catch(error => {
      throw(error);
    });
  };
}
