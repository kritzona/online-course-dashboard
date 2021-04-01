import React from 'react'
import Icon from '../atoms/Icon/Icon'
import notificationsGreyIconSource from '../../assets/icons/notifications-grey-icon.svg'

interface IProps {}

const NotificationsIcon = (props: IProps) => {
  return <Icon source={notificationsGreyIconSource} />
}

export default NotificationsIcon
