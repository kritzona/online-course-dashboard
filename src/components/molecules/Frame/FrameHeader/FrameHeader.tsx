import React from 'react'
import FrameHeaderStyled, {
  FrameHeaderElementsStyled,
  FrameHeaderTitleStyled,
  FrameHeaderContentWrapperStyled,
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
        <FrameHeaderContentWrapperStyled>
          <FrameHeaderTitleStyled>
            <Text type="h2">{props.title}</Text>
          </FrameHeaderTitleStyled>
          {props.elements && (
            <FrameHeaderElementsStyled>
              {props.elements}
            </FrameHeaderElementsStyled>
          )}
        </FrameHeaderContentWrapperStyled>
      </ContentWrapper>
    </FrameHeaderStyled>
  )
}

export default FrameHeader
