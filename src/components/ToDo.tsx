import { TodoComponentType } from '../configs/customTypes'
import { useTodo } from '../hooks/useTodo'

const ToDo = ({ todo }: TodoComponentType) => {
  const { deleteTodo, markAsDone, editTodo } = useTodo()
  const handleTodoEdit = (todo_id: number) => {
    const new_title = prompt('Enter a new title: ')
    if (new_title) {
      editTodo(new_title, todo_id)
    }
  }
  return (
    <div>
      <span>{todo.title}</span>
      <button onClick={() => markAsDone(todo.id)}>Mark As Done</button>
      <button onClick={() => handleTodoEdit(todo.id)}>Edit</button>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}
export default ToDo
