import React from 'react'
import Icon from '../atoms/Icon/Icon'
import searchGreyIconSource from '../../assets/icons/search-grey-icon.svg'

interface IProps {}

const SearchIcon = (props: IProps) => {
  return <Icon source={searchGreyIconSource} />
}

export default SearchIcon
