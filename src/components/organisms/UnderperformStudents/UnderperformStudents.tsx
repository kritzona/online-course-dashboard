import React from 'react'
import UnderperformStudentsStyled from './UnderperformStudentsStyled'
import CountInfo from '../../molecules/CountInfo/CountInfo'
import UnderperformCircleIcon from '../../ready-circle-icons/UnderperformCircleIcon'

interface IProps {}

const UnderperformStudents = (props: IProps) => {
  return (
    <UnderperformStudentsStyled>
      <CountInfo
        circleIcon={<UnderperformCircleIcon />}
        desc="Underperforming students"
        value={9}
        addValue={14}
        addValueSuffix="%"
      />
    </UnderperformStudentsStyled>
  )
}

export default UnderperformStudents
