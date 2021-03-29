import React from 'react'
import CircleIcon from '../atoms/CircleIcon/CircleIcon'
import UnderperformIcon from '../ready-icons/UnderperformIcon'

interface IProps {}

const UnderperformCircleIcon = (props: IProps) => {
  return (
    <CircleIcon color="red">
      <UnderperformIcon />
    </CircleIcon>
  )
}

export default UnderperformCircleIcon
