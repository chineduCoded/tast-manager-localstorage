import React, { useState } from 'react'
import styled from "styled-components"
import { TodoForm } from './components/Form/TodoForm'
import { Header } from './components/Header/Header'
import { TodoList } from './components/Todo/TodoList'

const Container = styled.div`
background: linear-gradient(to right bottom, #e1b382, #c89666);
min-height: 100vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
background-color: #12343b;
min-width: 450px;
min-height: 650px;
padding: 30px;
border-radius: 10px;
box-sizing: border-box;
box-shadow: 3px 6px 40px #000;
margin-bottom: 10px;
`

const App = () => {
  const [input, setInput] = useState("")
  const [todos, setTodos] = useState([])
  return (
    <Container>
      <Wrapper>
        <div><Header /></div>
        <div>
          <TodoForm
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos} />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </Wrapper>
    </Container>
  )
}

export default App
