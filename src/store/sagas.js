import { takeEvery, put } from 'redux-saga/effects'
import {GET_TODO_LIST} from './actionTypes'
import { setTodoListAction } from './actionCreators'
import axios from 'axios'

function* getInitTodoList() {
  try{
    const res = yield axios.get('/api/todoList')
    yield put(setTodoListAction(res.data))
  }catch (e){
    console.log('todoList: catch')
    let data = ['aKuYa','QQW','HuiHui']
    yield put(setTodoListAction(data))
  }
}
// generator 函数
function* mySaga() {
  yield takeEvery(GET_TODO_LIST, getInitTodoList);
}

export default mySaga;