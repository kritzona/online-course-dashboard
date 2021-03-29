import React from 'react'
import CircleIcon from '../atoms/CircleIcon/CircleIcon'
import CupIcon from '../ready-icons/CupIcon'

interface IProps {}

const CupCircleIcon = (props: IProps) => {
  return (
    <CircleIcon color="orange">
      <CupIcon />
    </CircleIcon>
  )
}

export default CupCircleIcon
