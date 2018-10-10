import * as React from 'react'
import { subscribe } from 'redux-subscriber'
import { toastr } from 'react-redux-toastr'
//
import Todo from '@plugins/todo'
//

class TodoList extends React.Component {
  unsubscribe: () => void
  componentDidMount() {
    this.unsubscribe = subscribe('plugins.todo.items', state => {
      if (state.plugins.todo.items.length === 5) {
        toastr.light('Firebot', 'Todo List has 5 items!', {
          icon: (<img src="/static/firestudio-logo.png" alt="logo" width={40} />),
          status: 'warning',
        })
      }
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    return (
      <Todo buttonLabel="Add Task" />
    )
  }
}

export default TodoList
