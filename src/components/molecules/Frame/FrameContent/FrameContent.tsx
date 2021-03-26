import React from 'react'
import FrameContentStyled from './FrameContentStyled'
import ContentWrapper from '../../../atoms/ContentWrapper/ContentWrapper'

interface IProps {
  children?: React.ReactNode
}

const FrameContent = (props: IProps) => {
  return (
    <FrameContentStyled>
      <ContentWrapper>{props.children}</ContentWrapper>
    </FrameContentStyled>
  )
}

export default FrameContent
