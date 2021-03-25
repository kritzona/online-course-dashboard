import React from 'react'
import ContentHeaderStyled, {
  ContentHeaderEastStyled,
  ContentHeaderSubtitleStyled,
  ContentHeaderTitleStyled,
  ContentHeaderWestStyled,
} from './ContentHeaderStyled'
import Text from '../../atoms/Text/Text'

interface IProps {
  children?: React.ReactNode
}

const ContentHeader = (props: IProps) => {
  return (
    <ContentHeaderStyled>
      <ContentHeaderWestStyled>
        <ContentHeaderTitleStyled>
          <Text type="h1">Dashboard</Text>
        </ContentHeaderTitleStyled>
        <ContentHeaderSubtitleStyled>
          <Text type="p">Mobile UX/UI Design course</Text>
        </ContentHeaderSubtitleStyled>
      </ContentHeaderWestStyled>
      <ContentHeaderEastStyled>{props.children}</ContentHeaderEastStyled>
    </ContentHeaderStyled>
  )
}

export default ContentHeader
