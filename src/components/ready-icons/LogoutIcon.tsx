import React from 'react'
import Icon from '../atoms/Icon/Icon'
import logoutGreyIconSource from '../../assets/icons/logout-grey-icon.svg'

interface IProps {}

const LogoutIcon = (props: IProps) => {
  return <Icon source={logoutGreyIconSource} />
}

export default LogoutIcon
