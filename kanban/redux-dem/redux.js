//tekes a reducer and returns a store

createStore = (reducer) => {
  let subscribers = []
  //get initial state from reducer
  let state = reducer(undefined, {type: null})
  return {
    getState: () => {
      return state
    },
    dispatch: (action) => {
      state = reducer(state, action)
      subscribers.forEach(cb => cb())
      return action
    },
    subscribe:(cb) => {
      subscribers.push(cb)
    },
  }
}

let reducer = (state=0, action) => {
  let{type, payload} = action
  switch(type){
  case 'INC':
    return payload ? state + payload : state + 1
  case 'DEC':
    return payload ? state - payload : state - 1
  default:
    return state
  }
}

store = createStore(reducer)

store.subscribe(() => {
  console.log('__STATE__', store.getState())
})

store.dispatch({type: 'NOOP'})

store.dispatch({type: 'INC'})
store.dispatch({type: 'DEC'})
