const defaultState = {
  data: [],
  inputValue: ''
}

// reducer 可以接收state 但绝不能修改state！！！！！
export default (state = defaultState, action) => {
  if(action.type === 'onChangeInput') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === 'addTodoItem') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.data.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if(action.type === 'deleteTodoItem') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.data.splice(action.value, 1)
    return newState
  }
  if(action.type === 'setTodoList') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.data = action.value
    return newState
  }
  
  return state
}