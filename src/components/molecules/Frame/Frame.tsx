import React from 'react'
import FrameStyled from './FrameStyled'
import Card from '../../atoms/Card/Card'
import FrameHeader from './FrameHeader/FrameHeader'
import FrameContent from './FrameContent/FrameContent'

interface IProps {
  title: string
  elements?: React.ReactNode
}

const Frame = (props: IProps) => {
  return (
    <FrameStyled>
      <Card>
        <FrameHeader title={props.title} elements={props.elements} />
        <FrameContent />
      </Card>
    </FrameStyled>
  )
}

export default Frame
