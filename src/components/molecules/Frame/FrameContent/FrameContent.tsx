import React from 'react'
import FrameContentStyled from './FrameContentStyled'
import ContentWrapper from '../../../atoms/ContentWrapper/ContentWrapper'
import ChartJsColumn from '../../../atoms/ChartJSColumn/ChartJsColumn'

interface IProps {}

const FrameContent = (props: IProps) => {
  return (
    <FrameContentStyled>
      <ContentWrapper>
        <ChartJsColumn />
      </ContentWrapper>
    </FrameContentStyled>
  )
}

export default FrameContent
