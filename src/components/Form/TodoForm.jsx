import React, { useEffect } from 'react'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'

const Form = styled.form``

const TaskInput = styled.input`
  outline: none;
  width: 260px;
  padding: 15px;
  margin-right: 25px;
  font-size: 20px;
  color: #ccc;
  background-color: #000;
  border: 1px solid #c89666;
  border-radius: 10px;

  :focus {
    outline: none;
  }
`

const AddButton = styled.button`
  // width: 70px;
  padding: 15px 15px;
  font-size: 20px;
  border-radius: 10px;
  border: 0;
  background-color: #f1af71;
  cursor: pointer;
  whitesppace: nowrap;

  :focus {
    outline: none;
  }
`

export const TodoForm = ({
  input,
  setInput,
  todos,
  setTodos,
  editTodo,
  setEditTodo,
}) => {
  const updateTodo = (title, id, isDone) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, isDone } : todo,
    )
    setTodos(newTodo)
    setEditTodo('')
  }

  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title)
    } else {
      setInput('')
    }
  }, [setInput, editTodo])

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, isDone: false }])
      setInput('')
    } else {
      updateTodo(input, editTodo.id, editTodo.isDone)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <TaskInput
        type="text"
        placeholder="Enter a Todo..."
        value={input}
        onChange={handleChange}
      />
      <AddButton type="submit">{editTodo ? 'Update' : 'New Todo'}</AddButton>
    </Form>
  )
}
