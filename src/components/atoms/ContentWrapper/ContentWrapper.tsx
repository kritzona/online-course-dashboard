import React from 'react'
import ContentWrapperStyled from './ContentWrapperStyled'

export type TContentWrapperSize = 'normal' | 'large'

interface IProps {
  size?: TContentWrapperSize
  children?: React.ReactNode
}

const ContentWrapper = (props: IProps) => {
  return (
    <ContentWrapperStyled size={props.size}>
      {props.children}
    </ContentWrapperStyled>
  )
}

export default ContentWrapper
