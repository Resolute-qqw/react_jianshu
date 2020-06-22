import React from 'react'
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
  return (
    <div style={{ margin: '20px' }}>
      <Input placeholder="Basic usage" value={props.inputValue} style={{ width: '300px', marginRight: '10px' }} onChange={props.onChangeInput} />
      <Button type="primary" onClick={props.handleSubmit}>Primary Button</Button>
      <List
        size="small"
        bordered
        dataSource={props.data}
        style={{ width: '435px', marginTop: '10px' }}
        renderItem={(item, index) => (<List.Item onClick={() => { props.handleDeleteItem(index) }}>{item}</List.Item>)}
      />
    </div>
  )
}

export default TodoListUI