import { GET_TODO_LIST, ON_CHANGE_INPUT, ADD_TODO_ITEM, DELETE_TODO_ITEM, SET_TODO_LIST } from './actionTypes'
export const getInputChangeAction = (value) => ({
  type: ON_CHANGE_INPUT,
  value
})
export const getInputAddAction = () => ({
  type: ADD_TODO_ITEM
})
export const getInputDeleteAction = (value) => ({
  type: DELETE_TODO_ITEM,
  value
})
export const setTodoListAction = (value) => ({
  type: SET_TODO_LIST,
  value
})
export const getTodoListAction = () => ({
  type: GET_TODO_LIST
})