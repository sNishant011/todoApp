import React, { useState } from 'react'
import { useRecoilValue } from 'recoil'
import CompletedTodo from '../components/CompletedTodo'
import ToDo from '../components/ToDo'
import { TodoType } from '../configs/customTypes'
import { todoListState } from '../configs/states'
import { useTodo } from '../hooks/useTodo'

const AllToDos = () => {
  const { addTodo, todoCounts } = useTodo()
  const todoList = useRecoilValue(todoListState)
  const [todoTitle, setTodoTitle] = useState('')
  const inCompleteTodos = todoList.filter((todo) => todo.completed === false)
  const completedTodos = todoList.filter((todo) => todo.completed)
  const handleAddTodo = () => {
    const lastItem = todoList.at(todoList.length - 1)
    let newID = 1
    if (lastItem) {
      newID = lastItem.id + 1
    }
    const todo: TodoType = {
      id: newID,
      title: todoTitle,
      completed: false,
    }
    addTodo(todo)
    setTodoTitle('')
  }

  return (
    <>
      <h1>Todo's</h1>
      <h2>Incomplete Todo ({todoCounts.inCompleteTodoCount})</h2>
      <div>
        {inCompleteTodos.length > 0
          ? inCompleteTodos.map((todo, index) => (
              <ToDo key={index} todo={todo} />
            ))
          : `There are no ToDo's. Consider Adding some`}
      </div>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleAddTodo()
        }}
      >
        <input
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type='submit'>Add Todo</button>
        <h2>Completed Todo ({todoCounts.completedTodoCount})</h2>
      </form>
      <h2>Completed Todos</h2>
      <div>
        {completedTodos.length > 0
          ? completedTodos.map((todo, index) => (
              <CompletedTodo key={index} todo={todo} />
            ))
          : `Nothing in here`}
      </div>
    </>
  )
}

export default AllToDos
