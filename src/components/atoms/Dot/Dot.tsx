import React from 'react'
import DotStyled from './DotStyled'

interface IProps {
  color: string
}

const Dot = (props: IProps) => {
  return <DotStyled color={props.color} />
}

export default Dot
