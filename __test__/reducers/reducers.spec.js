import reducer from '../../src/reducers'
import initialState from '../../src/initialState'

describe('reducers', () => {
  it('should return the initialState', () => {
    expect(reducer(undefined, {}).toEqual(initialState))
  })
})
