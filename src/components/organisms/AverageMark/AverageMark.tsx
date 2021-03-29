import React from 'react'
import AverageMarkStyled from './AverageMarkStyled'
import CountInfo from '../../molecules/CountInfo/CountInfo'
import MarkCircleIcon from '../../ready-circle-icons/MarkCircleIcon'

interface IProps {}

const AverageMark = (props: IProps) => {
  return (
    <AverageMarkStyled>
      <CountInfo
        circleIcon={<MarkCircleIcon />}
        desc="Average mark"
        value={6.8}
      />
    </AverageMarkStyled>
  )
}

export default AverageMark
