import { TodoComponentType } from '../configs/customTypes'
import { useTodo } from '../hooks/useTodo'

const CompletedTodo = ({ todo }: TodoComponentType) => {
  const { undoTodo } = useTodo()
  return (
    <div>
      <span style={{ textDecoration: 'line-through' }}>{todo.title}</span>
      <button onClick={() => undoTodo(todo.id)}>Undo</button>
    </div>
  )
}
export default CompletedTodo
