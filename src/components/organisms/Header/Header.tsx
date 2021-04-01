import React, { forwardRef, Ref } from 'react'
import HeaderStyled, {
  HeaderContentStyled,
  HeaderDelimiterStyled,
  HeaderEastStyled,
  HeaderWestStyled,
} from './HeaderStyled'
import Wrapper from '../../atoms/Wrapper/Wrapper'
import User from '../../molecules/User/User'
import NotificationsIcon from '../../ready-icons/NotificationsIcon'
import LogoutIcon from '../../ready-icons/LogoutIcon'
import Search from '../../molecules/Search/Search'

interface IProps {}

const Header = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  return (
    <HeaderStyled ref={ref}>
      <Wrapper>
        <HeaderContentStyled>
          <HeaderWestStyled>
            <Search />
          </HeaderWestStyled>
          <HeaderEastStyled>
            <User />
            <HeaderDelimiterStyled />
            <NotificationsIcon />
            <LogoutIcon />
          </HeaderEastStyled>
        </HeaderContentStyled>
      </Wrapper>
    </HeaderStyled>
  )
})

export default Header
