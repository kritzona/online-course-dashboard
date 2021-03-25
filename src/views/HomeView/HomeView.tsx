import React from 'react'
import HomeViewStyled from './HomeViewStyled'
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
      <Wrapper paddingY={true}>
        <Row gutter={true}>
          <Column size={12}>
            <ContentHeader>
              <>
                <Button>Manage dashboard</Button>
                <Button>Create new dashboard</Button>
              </>
            </ContentHeader>
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
          <Column size={4}>
            <Card>
              <ContentWrapper size="normal">Card</ContentWrapper>
            </Card>
          </Column>
          <Column size={4}>
            <Card>
              <ContentWrapper size="large">Card</ContentWrapper>
            </Card>
          </Column>
          <Column size={4}>
            <Card>
              <ContentWrapper size="large">Card</ContentWrapper>
            </Card>
          </Column>
          <Column size={4}>
            <Card>
              <ContentWrapper size="large">Card</ContentWrapper>
            </Card>
          </Column>
        </Row>
      </Wrapper>
    </HomeViewStyled>
  )
}

export default HomeView
