import React, { Component } from 'react';
import store from './store'
import {getInputChangeAction, getInputAddAction, getInputDeleteAction} from './store/actionCreators'
import 'antd/dist/antd.css';
import axios from 'axios'
import TodoListUI from './TodoListUI'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.onChangeInput = this.onChangeInput.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <TodoListUI 
        inputValue={this.state.inputValue}
        data={this.state.data}
        onChangeInput={this.onChangeInput}
        handleSubmit={this.handleSubmit}
        handleDeleteItem={this.handleDeleteItem}
      />
    )
  }
  componentDidMount() {
    axios.get('/api/todoList').then(res=>{
      console.log(res);
    })
  }
  onChangeInput(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleSubmit() {
    const action = getInputAddAction()
    store.dispatch(action)
  }
  handleDeleteItem(index) {
    const action = getInputDeleteAction(index)
    store.dispatch(action)
  }
}
export default TodoList