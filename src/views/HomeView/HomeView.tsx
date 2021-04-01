import React, { useEffect, useState } from 'react'
import HomeViewStyled from './HomeViewStyled'
import Button from '../../components/atoms/Button/Button'
import ContentHeader from '../../components/molecules/ContentHeader/ContentHeader'
import Wrapper from '../../components/atoms/Wrapper/Wrapper'
import Row from '../../components/atoms/Row/Row'
import Column from '../../components/atoms/Column/Column'
import Frame from '../../components/molecules/Frame/Frame'
import ColumnChart from '../../components/molecules/ColumnChart/ColumnChart'
import CountStudents from '../../components/organisms/CountStudents/CountStudents'
import AverageMark from '../../components/organisms/AverageMark/AverageMark'
import UnderperformStudents from '../../components/organisms/UnderperformStudents/UnderperformStudents'
import FinishedHomeworks from '../../components/organisms/FinishedHomeworks/FinishedHomeworks'
import LectionsLeft from '../../components/organisms/LectionsLeft/LectionsLeft'
import HoursSpent from '../../components/organisms/HoursSpent/HoursSpent'
import List from '../../components/atoms/List/List'
import StudentWithMark from '../../components/molecules/StudentWithMark/StudentWithMark'
import PieChart from '../../components/molecules/PieChart/PieChart'

interface IProps {}

const HomeView = (props: IProps) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

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
          <Column size={3}>
            <CountStudents />
          </Column>
          <Column size={3}>
            <AverageMark />
          </Column>
          <Column size={3}>
            <UnderperformStudents />
          </Column>
          <Column size={3}>
            <FinishedHomeworks />
          </Column>
          <Column size={6}>
            <Row gutter={true}>
              <Column size={12}>
                {loaded && (
                  <ColumnChart title="Students number change per month" />
                )}
              </Column>
              <Column size={6}>
                <LectionsLeft />
              </Column>
              <Column size={6}>
                <HoursSpent />
              </Column>
            </Row>
          </Column>
          <Column size={3}>
            <Frame title="Students by average mark">
              <List>
                <>
                  <StudentWithMark />
                  <StudentWithMark />
                  <StudentWithMark />
                  <StudentWithMark />
                  <StudentWithMark />
                  <StudentWithMark />
                  <StudentWithMark />
                  <StudentWithMark />
                  <StudentWithMark />
                  <StudentWithMark />
                  <StudentWithMark />
                  <StudentWithMark />
                </>
              </List>
            </Frame>
          </Column>
          <Column size={3}>
            <PieChart
              title={'Students by type of studying'}
              items={[
                { id: 1, label: 'Первый', value: 2000, color: 'primary' },
                { id: 2, label: 'Второй', value: 300, color: 'orange' },
                { id: 3, label: 'Третий', value: 3400, color: 'red' },
                { id: 4, label: 'Четвертый', value: 100, color: 'green' },
              ]}
            />
          </Column>
        </Row>
      </Wrapper>
    </HomeViewStyled>
  )
}

export default HomeView
