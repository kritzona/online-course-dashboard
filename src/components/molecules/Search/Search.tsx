import React from 'react'
import SearchStyled from './SearchStyled'
import InputField from '../../atoms/InputField/InputField'
import SearchIcon from '../../ready-icons/SearchIcon'

interface IProps {}

const Search = (props: IProps) => {
  return (
    <SearchStyled>
      <SearchIcon />
      <InputField placeholder="Search..." />
    </SearchStyled>
  )
}

export default Search
