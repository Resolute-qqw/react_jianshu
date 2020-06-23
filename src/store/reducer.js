const defaultState = {
  todoList: ['qqw','aky','hh'],
  inputValue: '123'
}

export default (state = defaultState, action ) => {
  if(action.type==='change_input_value') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type==='add_item') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.todoList.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type==="delete_item") {
    const newState = JSON.parse(JSON.stringify(state))
    newState.todoList.splice(action.value, 1)
    return newState
  }
  return state
}