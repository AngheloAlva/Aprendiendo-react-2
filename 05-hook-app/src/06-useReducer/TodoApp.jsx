import TodoList from './TodoList'
import TodoAdd from './TodoAdd'
import { useTodo } from '../hooks/useTodo'

const TodoApp = () => {
  const { handleDeleteTodo, handleNewTodo, handleToggleTodo, todos, pendingTodosCount } = useTodo()

  return (
    <>
      <h1>TodoApp</h1>
      <h5>Total de Todos: {todos.length}</h5>
      <h5>Pendientes: {pendingTodosCount}</h5>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
        </div>

        <div className='col-5'>
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>

    </>
  )
}

export default TodoApp
