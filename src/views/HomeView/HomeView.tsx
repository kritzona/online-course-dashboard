import React from 'react'
import HomeViewStyled from './HomeViewStyled'
import Text from '../../components/atoms/Text/Text'
import Button from '../../components/atoms/Button/Button'
import ContentHeader from '../../components/molecules/ContentHeader/ContentHeader'
import Wrapper from '../../components/atoms/Wrapper/Wrapper'
import Row from '../../components/atoms/Row/Row'
import Column from '../../components/atoms/Column/Column'
import Card from '../../components/atoms/Card/Card'
import ContentWrapper from '../../components/atoms/ContentWrapper/ContentWrapper'

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
      <Wrapper>
        <Row gutter={true}>
          <Column size={4}>
            <Card>
              <ContentWrapper size="normal">Card</ContentWrapper>
            </Card>
          </Column>
          <Column size={4}>
            <Card>
              <ContentWrapper size="normal">Card</ContentWrapper>
            </Card>
          </Column>
          <Column size={4}>
            <Card>
              <ContentWrapper size="normal">Card</ContentWrapper>
            </Card>
          </Column>
        </Row>
      </Wrapper>
    </HomeViewStyled>
  )
}

export default HomeView
