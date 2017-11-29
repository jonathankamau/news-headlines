import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as appActions from '../actions/sourceActions'
import * as types from '../actions/action-types'
import fetchMock from 'fetch-mock'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('appActions', () => {
  afterEach(() => {
    fetchMock.reset()
    fetchMock.restore()
  })

it('creates GET_SOURCES action to get all the news sources', () => {
    fetchMock
      .getOnce('/sources', { body: { sources: ['news headlines'] }, headers: { 'content-type': 'application/json' } })

      const expectedActions = [
      { type: types.GET_SOURCES,   sources: { sources: ['news headlines'] } } ]

      const store = mockStore({ sources: [] })

      return store.dispatch(appActions.loadSources()).then(() => {

      expect(store.getActions()).toEqual(expectedActions)

    })    
})

})
