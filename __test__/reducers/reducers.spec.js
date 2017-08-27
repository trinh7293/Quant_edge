import reducer from '../../src/reducers'
import { initialState } from '../../src/initialState'
import { jump, setFilter } from '../../src/actions'
import 'babel-polyfill'

describe('reducers', () => {
  it('should return the initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  it('should handle setFilter', () => {
    const filter = 'SHOW_TOP'
    const lists = initialState.lists
    expect(reducer(initialState, setFilter(filter))
    ).toEqual({
      ...initialState,
      filter
    })
  })
})
