import { ON_CHANGE_INPUT, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionTypes'
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