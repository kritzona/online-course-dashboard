import React from 'react'
import FrameHeaderStyled, {
  FrameHeaderElementsStyled,
  FrameHeaderTitleStyled,
  FrameHeaderWrapperStyled,
} from './FrameHeaderStyled'
import ContentWrapper from '../../../atoms/ContentWrapper/ContentWrapper'
import Text from '../../../atoms/Text/Text'

interface IProps {
  title: string
  elements?: React.ReactNode
}

const FrameHeader = (props: IProps) => {
  return (
    <FrameHeaderStyled>
      <ContentWrapper>
        <FrameHeaderWrapperStyled>
          <FrameHeaderTitleStyled>
            <Text type="h2">{props.title}</Text>
          </FrameHeaderTitleStyled>
          {props.elements && (
            <FrameHeaderElementsStyled>
              {props.elements}
            </FrameHeaderElementsStyled>
          )}
        </FrameHeaderWrapperStyled>
      </ContentWrapper>
    </FrameHeaderStyled>
  )
}

export default FrameHeader
