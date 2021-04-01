import React, { forwardRef, Ref } from 'react'
import HeaderStyled from './HeaderStyled'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import User from '../../molecules/User/User'

interface IProps {}

const Header = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  return (
    <HeaderStyled ref={ref}>
      <Wrapper>
        <User />
      </Wrapper>
    </HeaderStyled>
  )
})

export default Header
