import React from 'react'
import CircleIcon from '../atoms/CircleIcon/CircleIcon'
import BookIcon from '../ready-icons/BookIcon'

interface IProps {}

const BookCircleIcon = (props: IProps) => {
  return (
    <CircleIcon color="blue">
      <BookIcon />
    </CircleIcon>
  )
}

export default BookCircleIcon
