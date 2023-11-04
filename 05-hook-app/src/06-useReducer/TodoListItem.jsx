/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
const TodoListItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
      <span onClick={() => { onToggleTodo(todo.id) }} className={todo.done ? 'text-decoration-line-through' : ''}>
        {todo.description}
      </span>
      <button onClick={() => { onDeleteTodo(todo.id) }} className='btn btn-danger'>Borrar</button>
    </li>
  )
}

export default TodoListItem
