import React, { useEffect, useRef } from 'react'
import AppStyled, { AppContentStyled } from './AppStyled'
import { Switch, Route } from 'react-router-dom'
import HomeView from './views/HomeView/HomeView'
import Header from './components/organisms/Header/Header'
import Sidebar from './components/organisms/Sidebar/Sidebar'

interface IProps {}

const App = (props: IProps) => {
  const headerRef = useRef<HTMLDivElement>(null)
  const appContentRef = useRef<HTMLDivElement>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let headerHeight = 0
    if (headerRef.current) {
      headerHeight = headerRef.current.clientHeight
    }

    let sidebarWidth = 0
    if (sidebarRef.current) {
      sidebarWidth = sidebarRef.current.clientWidth
    }

    if (appContentRef.current) {
      appContentRef.current.style.marginTop = `${headerHeight}px`
      appContentRef.current.style.marginLeft = `${sidebarWidth}px`
    }
    if (headerRef.current) {
      headerRef.current.style.marginLeft = `${sidebarWidth}px`
      headerRef.current.style.width = `calc(100% - ${sidebarWidth}px)`
    }
  }, [])

  return (
    <AppStyled>
      <Header ref={headerRef} />
      <Sidebar ref={sidebarRef} />
      <AppContentStyled ref={appContentRef}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>
        </Switch>
      </AppContentStyled>
    </AppStyled>
  )
}

export default App
