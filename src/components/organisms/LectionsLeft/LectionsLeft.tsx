import React from 'react'
import LectionsLeftStyled from './LectionsLeftStyled'
import CountInfo from '../../molecules/CountInfo/CountInfo'
import CupCircleIcon from '../../ready-circle-icons/CupCircleIcon'

interface IProps {}

const LectionsLeft = (props: IProps) => {
  return (
    <LectionsLeftStyled>
      <CountInfo
        circleIcon={<CupCircleIcon />}
        desc="Lections left"
        value={25}
      />
    </LectionsLeftStyled>
  )
}

export default LectionsLeft
