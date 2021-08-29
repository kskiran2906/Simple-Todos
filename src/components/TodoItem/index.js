import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {todoItem, deleteTodo} = this.props
    const {title, id} = todoItem
    const deleteTodoItem = () => {
      deleteTodo(id)
    }
    return (
      <li className="todo-item-container">
        <p className="title">{title}</p>
        <button type="button" className="btn" onClick={deleteTodoItem}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
