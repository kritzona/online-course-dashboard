import React from 'react'
import IconStyled from './IconStyled'

interface IProps {
  source: string
}

const Icon = (props: IProps) => {
  return <IconStyled source={props.source} />
}

export default Icon
