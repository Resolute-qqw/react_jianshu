const defaultState = {
  todoList: [],
  inputValue: '123'
}

export default (newState = defaultState, action ) => {
  if(action.type==='change_input_value') {
    return newState
  }
  return newState
}