import { state as initialState, getters } from '~/store/todos'

describe('todos module', () => {
  describe('getters', () => {
    describe('doneCount', () => {
      test('works', () => {
        const state = initialState()
        expect(getters.doneCount(state)).toBe(0)
      })
    })
  })
})
