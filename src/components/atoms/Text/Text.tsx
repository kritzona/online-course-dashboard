import React from 'react'
import {
  TextH1Styled,
  TextH2Styled,
  TextPStyled,
  TextSpanStyled,
} from './TextStyled'

export type TTextHeaderType = 'h1' | 'h2'
export type TTextNormalType = 'span' | 'p'

export type TTextSize = 'large' | 'medium' | 'normal' | 'small'
export type TTextWeight = 'regular' | 'medium' | 'semibold' | 'bold'
export type TTextTransform = 'uppercase' | 'lowercase'

interface IProps {
  type?: TTextHeaderType | TTextNormalType
  size?: TTextSize
  weight?: TTextWeight
  transform?: TTextTransform

  children?: React.ReactNode
}

const Text = (props: IProps) => {
  return (
    <>
      {(!props.type || props.type === 'span') && (
        <TextSpanStyled
          size={props.size}
          weight={props.weight}
          transform={props.transform}
        >
          {props.children}
        </TextSpanStyled>
      )}
      {props.type === 'h1' && (
        <TextH1Styled transform={props.transform}>
          {props.children}
        </TextH1Styled>
      )}
      {props.type === 'h2' && (
        <TextH2Styled transform={props.transform}>
          {props.children}
        </TextH2Styled>
      )}
      {props.type === 'p' && (
        <TextPStyled
          size={props.size}
          weight={props.weight}
          transform={props.transform}
        >
          {props.children}
        </TextPStyled>
      )}
    </>
  )
}

export default Text
