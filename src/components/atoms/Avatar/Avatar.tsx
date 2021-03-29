import React from 'react'
import AvatarStyled from './AvatarStyled'

export type TAvatarSize = 'normal' | 'large'

interface IProps {
  size: TAvatarSize
  imageSource: string
}

const Avatar = (props: IProps) => {
  return <AvatarStyled size={props.size} imageSource={props.imageSource} />
}

export default Avatar
