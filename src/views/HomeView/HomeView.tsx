import React from 'react'
import HomeViewStyled from './HomeViewStyled'
import Text from '../../components/atoms/Text/Text'
import Button from '../../components/atoms/Button/Button'
import ContentHeader from '../../components/molecules/ContentHeader/ContentHeader'

interface IProps {}

const HomeView = (props: IProps) => {
  return (
    <HomeViewStyled>
      <Text>dwawda</Text>
      <Button>Create new dashboard</Button>
      <ContentHeader>
        <>
          <Button>Manage dashboard</Button>
          <Button>Create new dashboard</Button>
        </>
      </ContentHeader>
    </HomeViewStyled>
  )
}

export default HomeView
