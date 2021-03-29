import React from 'react'
import CircleIconStyled from './CircleIconStyled'
import { TColor } from '../../../themes/LightTheme/LightTheme'

interface IProps {
  color: TColor
  children?: React.ReactNode
}

const CircleIcon = (props: IProps) => {
  return (
    <CircleIconStyled color={props.color}>{props.children}</CircleIconStyled>
  )
}

export default CircleIcon
