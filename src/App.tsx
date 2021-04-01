import React, { useEffect, useRef } from 'react'
import AppStyled, { AppContentStyled } from './AppStyled'
import { Switch, Route } from 'react-router-dom'
import HomeView from './views/HomeView/HomeView'
import Header from './components/organisms/Header/Header'

interface IProps {}

const App = (props: IProps) => {
  const headerRef = useRef<HTMLDivElement>(null)
  const appContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let headerHeight = 0
    if (headerRef.current) {
      headerHeight = headerRef.current.clientHeight
    }

    if (appContentRef.current) {
      appContentRef.current.style.paddingTop = `${headerHeight}px`
    }
  }, [])

  return (
    <AppStyled>
      <Header ref={headerRef} />
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
