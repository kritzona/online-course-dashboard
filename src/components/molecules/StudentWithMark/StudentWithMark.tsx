import React from 'react'
import StudentWithMarkStyled, {
  StudentWithMarkEastStyled,
  StudentWithMarkWestStyled,
} from './StudentWithMarkStyled'
import Student from '../Student/Student'
import Text from '../../atoms/Text/Text'

interface IProps {}

const StudentWithMark = (props: IProps) => {
  return (
    <StudentWithMarkStyled>
      <StudentWithMarkWestStyled>
        <Student />
      </StudentWithMarkWestStyled>
      <StudentWithMarkEastStyled>
        <Text size="normal" weight="semibold">
          9.3
        </Text>
      </StudentWithMarkEastStyled>
    </StudentWithMarkStyled>
  )
}

export default StudentWithMark
