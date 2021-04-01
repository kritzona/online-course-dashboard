import React from 'react'
import UserStyled, {
  UserAvatarStyled,
  UserButtonStyled,
  UserInfoFullnameStyled,
  UserInfoPostStyled,
  UserInfoStyled,
} from './UserStyled'
import Text from '../../atoms/Text/Text'
import Avatar from '../../atoms/Avatar/Avatar'
import AvatarImageSource from '../../../assets/images/avatar.png'
import ArrowDownIcon from '../../ready-icons/ArrowDownIcon'

interface IProps {}

const User = (props: IProps) => {
  return (
    <UserStyled>
      <UserInfoStyled>
        <UserInfoFullnameStyled>
          <Text type="span" size="normal" weight="medium">
            Cody Simmmons
          </Text>
        </UserInfoFullnameStyled>
        <UserInfoPostStyled>
          <Text type="span" size="small" weight="medium">
            Lecturer
          </Text>
        </UserInfoPostStyled>
      </UserInfoStyled>
      <UserAvatarStyled>
        <Avatar size="large" imageSource={AvatarImageSource} />
      </UserAvatarStyled>
      <UserButtonStyled>
        <ArrowDownIcon />
      </UserButtonStyled>
    </UserStyled>
  )
}

export default User
