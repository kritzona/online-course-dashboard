import React from 'react'
import CountInfoStyled, {
  CountInfoAddValueStyled,
  CountInfoContentStyled,
  CountInfoDescStyled,
  CountInfoEastStyled,
  CountInfoIconStyled,
  CountInfoValuesStyled,
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
              <CountInfoValuesStyled>
                <CountInfoValueStyled>
                  <Text type="span" size="medium" weight="semibold">
                    62
                  </Text>
                </CountInfoValueStyled>
                <CountInfoAddValueStyled>
                  <Text type="span" size="normal" weight="semibold">
                    (62%)
                  </Text>
                </CountInfoAddValueStyled>
              </CountInfoValuesStyled>

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
