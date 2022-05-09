import { useRecoilState, useRecoilValue } from 'recoil'
import { TodoType } from '../configs/customTypes'
import { todoListCountState, todoListState } from '../configs/states'

export const useTodo = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState)
  const todoCounts = useRecoilValue(todoListCountState)
  const addTodo = (todo: TodoType) => {
    setTodoList([...todoList, todo])
  }
  const deleteTodo = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id))
  }
  const undoTodo = (id: number) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: false }
        }
        return todo
      })
    )
  }
  const markAsDone = (id: number) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: true }
        }
        return todo
      })
    )
  }
  const editTodo = (new_title: string, id: number) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: new_title }
        }
        return todo
      })
    )
  }
  return { addTodo, deleteTodo, markAsDone, undoTodo, todoCounts, editTodo }
}
