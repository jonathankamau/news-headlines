import * as appActions from '../actions/actions'

describe('AppActions', () => {
  it('should create an action to search through a list of news sources', () => {
    const text = 'search sources list'
    const expectedAction = {
      type: 'SEARCH_LIST_OF_SOURCES',
      text: text
    }
    expect(appActions.searchSourcesList(text)).toEqual(expectedAction)
  })
})
