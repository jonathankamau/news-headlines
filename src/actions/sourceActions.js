import * as types from './action-types';
import sourceApi from '../api/sourceApi';

export function loadSourceSuccess(sources) {  
  return {type: types.GET_SOURCES, sources};
}

export function loadSources() {  
  return function(dispatch) {
    return sourceApi.getSources().then(sources => {
      dispatch(loadSourceSuccess(sources));
    }).catch(error => {
      throw(error);
    });
  };
}
