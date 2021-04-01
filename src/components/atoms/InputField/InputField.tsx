import React from 'react'
import InputFieldStyled from './InputFieldStyled'

interface IProps {
  placeholder?: string
}

const InputField = (props: IProps) => {
  return (
    <InputFieldStyled
      placeholder={props.placeholder ? props.placeholder : 'Введите значение'}
    />
  )
}

export default InputField
