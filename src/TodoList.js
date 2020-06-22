import React, { Component } from 'react'
import { connect } from 'react-redux'
class TodoList extends Component{ 
  render() {
    return (
      <div>
        <div>
          <input value={this.props.inputValue} onChange={this.props.changeInputValue} />
          <button>提交</button>
        </div>
        <div>
          <ul>
            <li>
              1
            </li>
            <li>
              1
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (props) => {
  return {
    inputValue: props.inputValue
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)