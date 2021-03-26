import React from 'react'
import Icon from '../atoms/Icon/Icon'
import PersonPrimaryIconSource from '../../assets/icons/person-primary-icon.svg'

interface IProps {}

const PersonIcon = (props: IProps) => {
  return <Icon source={PersonPrimaryIconSource} />
}

export default PersonIcon
