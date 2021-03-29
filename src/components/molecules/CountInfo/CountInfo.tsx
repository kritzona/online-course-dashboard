import React from 'react'
import CountInfoStyled, {
  CountInfoContentStyled,
  CountInfoDescStyled,
  CountInfoEastStyled,
  CountInfoIconStyled,
  CountInfoValueStyled,
  CountInfoWestStyled,
} from './CountInfoStyled'
import Card from '../../atoms/Card/Card'
import ContentWrapper from '../../atoms/ContentWrapper/ContentWrapper'
import Text from '../../atoms/Text/Text'
import PersonCircleIcon from '../../ready-circle-icons/PersonCircleIcon'

interface IProps {}

const CountInfo = (props: IProps) => {
  return (
    <CountInfoStyled>
      <Card>
        <ContentWrapper size="large">
          <CountInfoContentStyled>
            <CountInfoWestStyled>
              <CountInfoIconStyled>
                <PersonCircleIcon />
              </CountInfoIconStyled>
            </CountInfoWestStyled>
            <CountInfoEastStyled>
              <CountInfoValueStyled>
                <Text type="span" size="medium" weight="semibold">
                  62
                </Text>
              </CountInfoValueStyled>
              <CountInfoDescStyled>
                <Text type="span" size="normal" weight="medium">
                  Students
                </Text>
              </CountInfoDescStyled>
            </CountInfoEastStyled>
          </CountInfoContentStyled>
        </ContentWrapper>
      </Card>
    </CountInfoStyled>
  )
}

export default CountInfo
