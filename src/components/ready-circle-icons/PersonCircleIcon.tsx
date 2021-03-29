import React from 'react'
import CircleIcon from '../atoms/CircleIcon/CircleIcon'
import PersonIcon from '../ready-icons/PersonIcon'

interface IProps {}

const PersonCircleIcon = (props: IProps) => {
  return (
    <CircleIcon color="primary">
      <PersonIcon />
    </CircleIcon>
  )
}

export default PersonCircleIcon
