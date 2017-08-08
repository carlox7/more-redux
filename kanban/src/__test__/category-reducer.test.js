import categoryReducer from '../reducer/category.js'

describe('testing category reducer', () => {
  test('initial state should be an empty array', () => {
    let result = categoryReducer(undefined, {type: null})
    expect(result).toEqual([])
  })

  test('if the action type is not registered it will return the state', () => {
    let mockState = [
      {id: 'abc', title: 'magikarp'},
      {id: '123', title: 'pikachu'},
    ]

    let result = categoryReducer(mockState, {type:null})
    expect(result).toEqual(mockState)
  })
  test('CATEGORY_CREATE should append to the array', () => {
    let actionOne = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: '123',
        title: 'cool beans',
        timestamp: new Date(),
      },
    }

    let state = categoryReducer([], actionOne)
    expect(state.length).toBe(1)
    expect(state[0]).toBe(actionOne.payload)

    let actionTwo = {
      type: 'CATEGORY_CREATE',
      payload: {
        id: '123',
        title: 'wuttt',
        timestamp: new Date(),
      },
    }

    state = categoryReducer(state, actionTwo)
    expect(state.length).toBe(2)
    expect(state[0]).toBe(actionOne.payload)
    expect(state[1]).toBe(actionTwo.payload)
  })

  test('CATEGORY_DELETE should append to the array', () => {
    let mockState = [
      {id: 'abc', title: 'magikarp', timestamp: new Date()},
      {id: '123', title: 'pikachu', timestamp: new Date()},
      {id: 'xyz', title: 'bulbasaur', timestamp: new Date()},
      {id: '107', title: 'moltres', timestamp: new Date()},
    ]

    let actionOne = {
      type: 'CATEGORY_DELETE',
      payload: {id: 'xyz', title: 'bulbasaur', timestamp: new Date()},
    }

    let state = categoryReducer(mockState, actionOne)
    expect(state.length).toBe(3)
    expect(state).toEqual(mockState.filter(item => item.id != 'xyz'))
  })

  test('CATEGORY_UPDATE should throw error', () => {
    let mockState = [
      {id: 'abc', title: 'magikarp', timestamp: new Date()},

    ]
    let actionOne = {
      type: 'CATEGORY_UPDATE',
      payload: {id: 'abc', timestamp: new Date()},
    }

    expect(() => categoryReducer(mockState, actionOne))
      .toThrow('VALIDATION ERROR: category must have id, title, and timestamp')
  })
})
