import React from 'react'
import CircleIcon from '../atoms/CircleIcon/CircleIcon'
import ClockIcon from '../ready-icons/ClockIcon'

interface IProps {}

const ClockCircleIcon = (props: IProps) => {
  return (
    <CircleIcon color="blue">
      <ClockIcon />
    </CircleIcon>
  )
}

export default ClockCircleIcon
