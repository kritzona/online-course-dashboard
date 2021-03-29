import React from 'react'
import StudentStyled from './StudentStyled'
import Avatar from '../../atoms/Avatar/Avatar'
import Text from '../../atoms/Text/Text'
import studentAvatar1ImageSource from '../../../assets/images/student-avatar-1.png'

interface IProps {}

const Student = (props: IProps) => {
  return (
    <StudentStyled>
      <Avatar size="normal" imageSource={studentAvatar1ImageSource} />
      <Text size="normal" weight="medium">
        Annette Watson
      </Text>
    </StudentStyled>
  )
}

export default Student
