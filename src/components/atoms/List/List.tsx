import React from 'react'
import ListStyled from './ListStyled'

interface IProps {
  children?: React.ReactNode
}

const List = (props: IProps) => {
  return <ListStyled>{props.children}</ListStyled>
}

export default List
