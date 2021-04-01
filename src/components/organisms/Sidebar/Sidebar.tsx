import React, { forwardRef, Ref } from 'react'
import SidebarStyled, {
  SidebarContentStyled,
  SidebarLogotypeStyled,
} from './SidebarStyled'
import Logotype from '../../atoms/Logotype/Logotype'

interface IProps {}

const Sidebar = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  return (
    <SidebarStyled ref={ref}>
      <SidebarLogotypeStyled>
        <Logotype />
      </SidebarLogotypeStyled>
      <SidebarContentStyled />
    </SidebarStyled>
  )
})

export default Sidebar
