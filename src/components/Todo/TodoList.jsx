import React from 'react'
import styled from 'styled-components'
import { FaCheckCircle, FaEdit, FaTrashAlt } from 'react-icons/fa'

const ListItem = styled.li`
  display: flex;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  min-height: 30px;
`

const ListInput = styled.input`
  width: 250px;
  background-color: #12343b;
  border: none;
  color: #ccc;
  font-size: 20px;
  padding-left: 10px;
  margin-right: 15px;

  :focus {
    outline: none;
  }
`

const ButtonComplete = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 28px;
  border-radius: 50%;
  color: #ff6c6c;
  margin-right: 10px;

  :focus {
    outline: none;
  }
`

const ButtonEdit = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 28px;
  border-radius: 50%;
  color: #e2d029;
  margin-right: 10px;

  :focus {
    outline: none;
  }
`

const ButtonDelete = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 28px;
  border-radius: 50%;
  color: lightseagreen;

  :focus {
    outline: none;
  }
`

export const TodoList = ({ todos, setTodos, setEditTodo }) => {
  const handleIsDone = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, isDone: !item.isDone }
        }
        return item
      }),
    )
  }

  const handleEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id)
    setEditTodo(findTodo)
  }

  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <div>
      {todos.map((todo) => (
        <ListItem key={todo.id}>
          <ListInput
            type="text"
            value={todo.title}
            onChange={(e) => e.preventDefault()}
            style={{
              textDecorationColor: '#ff6c6c',
              textDecorationStyle: 'solid',
              textDecorationLine: todo.isDone ? 'line-through' : '',
            }}
          />
          <div>
            <ButtonComplete onClick={() => handleIsDone(todo)}>
              <FaCheckCircle />
            </ButtonComplete>
            <ButtonEdit onClick={() => handleEdit(todo)}>
              <FaEdit />
            </ButtonEdit>
            <ButtonDelete onClick={() => handleDelete(todo)}>
              <FaTrashAlt />
            </ButtonDelete>
          </div>
        </ListItem>
      ))}
    </div>
  )
}
