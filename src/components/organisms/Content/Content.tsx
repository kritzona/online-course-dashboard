import React from 'react'
import ContentStyled from './ContentStyled'

interface IProps {
  children?: React.ReactNode
}

const Content = (props: IProps) => {
  return <ContentStyled>{props.children}</ContentStyled>;
};

export default Content;
