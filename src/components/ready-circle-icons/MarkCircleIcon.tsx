import React from 'react'
import CircleIcon from '../atoms/CircleIcon/CircleIcon'
import MarkIcon from '../ready-icons/MarkIcon'

interface IProps {}

const MarkCircleIcon = (props: IProps) => {
  return (
    <CircleIcon color="aqua">
      <MarkIcon />
    </CircleIcon>
  )
}

export default MarkCircleIcon
