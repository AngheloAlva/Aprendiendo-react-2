/* eslint-disable react/prop-types */
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className='list-group'>
      {
        todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
        ))
      }
    </ul>
  )
}

export default TodoList
