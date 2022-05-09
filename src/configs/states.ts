import { atom, selector } from 'recoil'
import { TodoType } from './customTypes'

export const todoListState = atom({
  key: 'todoListState',
  default: JSON.parse(localStorage.getItem('todos') || '') as TodoType[],
})

export const todoListCountState = selector({
  key: 'TodoListCount',
  get: ({ get }) => {
    const allTodos = get(todoListState)
    localStorage.setItem('todos', JSON.stringify(allTodos))
    let completedTodoCount = 0
    let inCompleteTodoCount = 0
    allTodos.forEach((todo) => {
      if (todo.completed) {
        completedTodoCount += 1
      } else {
        inCompleteTodoCount += 1
      }
    })
    return { completedTodoCount, inCompleteTodoCount }
  },
})
