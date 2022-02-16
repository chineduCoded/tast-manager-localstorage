import React from 'react'
import styled from 'styled-components'

const Heading = styled.h1`
  color: #fff;
  text-align: center;
  margin: 30px 0;
`

export const Header = () => {
  return <Heading>Task Manager</Heading>
}
