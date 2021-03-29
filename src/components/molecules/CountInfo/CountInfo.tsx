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
import CircleIcon from '../../atoms/CircleIcon/CircleIcon'

interface IProps {
  circleIcon: ReturnType<typeof CircleIcon>
  desc: string
  value: number
  valueSuffix?: string
  addValue?: number
  addValueSuffix?: string
}

const CountInfo = (props: IProps) => {
  return (
    <CountInfoStyled>
      <Card>
        <ContentWrapper size="large">
          <CountInfoContentStyled>
            <CountInfoWestStyled>
              <CountInfoIconStyled>{props.circleIcon}</CountInfoIconStyled>
            </CountInfoWestStyled>
            <CountInfoEastStyled>
              <CountInfoValuesStyled>
                <CountInfoValueStyled>
                  <Text type="span" size="medium" weight="semibold">
                    {props.value}
                    {props.valueSuffix ? props.valueSuffix : null}
                  </Text>
                </CountInfoValueStyled>
                {props.addValue && (
                  <CountInfoAddValueStyled>
                    <Text type="span" size="normal" weight="semibold">
                      ({props.addValue}
                      {props.addValueSuffix ? props.addValueSuffix : null})
                    </Text>
                  </CountInfoAddValueStyled>
                )}
              </CountInfoValuesStyled>

              <CountInfoDescStyled>
                <Text type="span" size="normal" weight="medium">
                  {props.desc}
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
