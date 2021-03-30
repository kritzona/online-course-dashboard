import React from 'react'
import ListStyled from './ListStyled'
import PerfectScrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css'

interface IProps {
  children?: React.ReactNode
}

const List = (props: IProps) => {
  return (
    <PerfectScrollbar
      style={{
        maxHeight: '420px',
      }}
    >
      <ListStyled>{props.children}</ListStyled>
    </PerfectScrollbar>
  )
}

export default List
