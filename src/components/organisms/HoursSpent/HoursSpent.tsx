import React from 'react'
import HoursSpentStyled from './HoursSpentStyled'
import CountInfo from '../../molecules/CountInfo/CountInfo'
import ClockCircleIcon from '../../ready-circle-icons/ClockCircleIcon'

interface IProps {}

const HoursSpent = (props: IProps) => {
  return (
    <HoursSpentStyled>
      <CountInfo
        circleIcon={<ClockCircleIcon />}
        desc="Hours spent on lections"
        value={139}
      />
    </HoursSpentStyled>
  )
}

export default HoursSpent
