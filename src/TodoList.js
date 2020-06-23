import React from 'react'
import { connect } from 'react-redux'
const TodoList = (props) => {
  const { inputValue, todoList, changeInputValue, addItem, deleteItem } = props
  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={addItem}>提交</button>
      </div>
      <div>
        <ul>
          {
            todoList.map((item, index) => {
              return (
                <li onClick={deleteItem.bind(this, index)} key={index}>
                  {item}
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}
const mapStateToProps = (props) => {
  return {
    inputValue: props.inputValue,
    todoList: props.todoList
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change_input_value',
        value: e.target.value
      }
      dispatch(action)
    },
    addItem() {
      const action = {
        type: 'add_item',
      }
      dispatch(action)
    },
    deleteItem(index) {
      const action = {
        type: 'delete_item',
        value: index
      }
      dispatch(action)
    }
  }
}
console.log(connect(mapStateToProps, mapDispatchToProps)(TodoList))
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)