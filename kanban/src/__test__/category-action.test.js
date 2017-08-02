import{
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../action/category-actions.js'

describe('testing category actions', () => {
  test('categoryCreate returns a CATEGORY_CREATE action', () => {
    let action = categoryCreate({title: 'cool'})
    expect(action.type).toEqual('CATEGORY_CREATE')
    expect(action.payload.id).toBeTruthy()
    expect(action.payload.timestamp).toBeTruthy()
    expect(action.payload.title).toBe('cool')
  })

  test('categoryDelete return a CATEGORY_DELETE action', () => {
    let mockCategory = {id: '123', timestamp: new Date(), title: 'cool'}
    let action = categoryDelete(mockCategory)
    expect(action).toEqual({
      type: 'CATEGORY_DELETE',
      payload: mockCategory,
    })
  })

  test('categoryUpdate return a CATEGORY_UPDATE action', () => {
    let mockCategory = {id: '123', timestamp: new Date(), title: 'cool'}
    let action = categoryUpdate(mockCategory)
    expect(action).toEqual({
      type: 'CATEGORY_UPDATE',
      payload: mockCategory,
    })
  })
})
