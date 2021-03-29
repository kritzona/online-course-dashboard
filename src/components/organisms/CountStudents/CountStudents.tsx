import React from 'react'
import CountStudentsStyled from './CountStudentsStyled'
import CountInfo from '../../molecules/CountInfo/CountInfo'
import PersonCircleIcon from '../../ready-circle-icons/PersonCircleIcon'

interface IProps {}

const CountStudents = (props: IProps) => {
  return (
    <CountStudentsStyled>
      <CountInfo circleIcon={<PersonCircleIcon />} desc="Students" value={62} />
    </CountStudentsStyled>
  )
}

export default CountStudents
