import React from 'react'
import FinishedHomeworksStyled from './FinishedHomeworksStyled'
import CountInfo from '../../molecules/CountInfo/CountInfo'
import BookCircleIcon from '../../ready-circle-icons/BookCircleIcon'

interface IProps {}

const FinishedHomeworks = (props: IProps) => {
  return (
    <FinishedHomeworksStyled>
      <CountInfo
        circleIcon={<BookCircleIcon />}
        desc="Finished homeworks"
        value={83}
        valueSuffix="%"
      />
    </FinishedHomeworksStyled>
  )
}

export default FinishedHomeworks
