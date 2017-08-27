import { jump, setFilter } from '../../src/actions'

describe('actions', () => {
  it('should create an action to jump', () => {
    const expectedJump = {
      type: 'jump'
    }
    expect(jump()).toEqual(expectedJump)
  })

  it('should create an action to jump', () => {
    const expectedsetFilter = {
      type: 'set_filter',
      filter: 'ALL'
    }
    const filter = 'ALL'
    expect(setFilter(filter)).toEqual(expectedsetFilter)
  })
})
