import { jump, setFilter } from '../../src/actions'

describe('actions', () => {
  it('should create an action to jump', () => {
    const expectedJump = {
      type: 'jump'
    }
    const filter = 'ALL'
    const expectedsetFilter = {
      type: 'set_filter',
      filter: 'ALL'
    }
    expect(jump()).toEqual(expectedJump)
    expect(setFilter(filter)).toEqual(expectedsetFilter)
  })
})
