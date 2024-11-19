// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemsList, deleteTodo} = props
  const {id, title} = itemsList
  const OnDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-item-container">
      <p className="para">{title}</p>
      <button className="button" onClick={OnDeleteTodo}>
        Delete
      </button>
    </li>
  )
}
export default TodoItem
