import { DefaultTheme } from 'styled-components'

const LightTheme: DefaultTheme = {
  name: 'light',
  sizes: {
    stepSize: 10,

    borderRadius: 5,

    tlFontSize: 30,
    tlLineHeight: 30,

    tmFontSize: 28,
    tmLineHeight: 24,

    tnFontSize: 14,
    tnLineHeight: 14,

    tsFontSize: 12,
    tsLineHeight: 12,

    letterSpacingInPercent: 1,

    regularFontWeight: 400,
    mediumFontWeight: 500,
    semiBoldFontWeight: 600,
    boldFontWeight: 700,
  },
  colors: {
    primaryColor: '#713BDB',
    hoverPrimaryColor: '#713BDB',
    activePrimaryColor: '#713BDB',

    accentColor: '#FF7A00',
    hoverAccentColor: '#FF7A00',
    activeAccentColor: '#FF7A00',

    redColor: '#FF4C61',
    greenColor: '#33D69F',
    blueColor: '#4CB8FF',
    orangeColor: '#FFB800',
    aquaColor: '#21B8C7',

    errorColor: '#FF4C61',
    successColor: '#33D69F',
    infoColor: '#4CB8FF',

    whiteColor: '#FFFFFF',
    blackColor: '#000000',
    greyColor: '#A6ACBE',
    lightGreyColor: '#EEF0F6',
    shadowColor: '#EDEDF6',

    backgroundColor: '#F3F7FA',
  },
  effects: {
    cardBoxShadow: '0px 3px 0px #EDEDF6',
    defaultTransition: 'all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1)',
  },
  mediaQueries: {
    desktop: '(min-width: 1200px)',
    laptop: '(min-width: 992px) and (max-width: 1199px)',
    tablet: '(min-width: 768px) and (max-width: 991px)',
    phablet: '(min-width: 576px) and (max-width: 767px)',
    mobile: '(max-width: 575px)',
  },
}

export type TColor =
  | 'primary'
  | 'accent'
  | 'red'
  | 'green'
  | 'blue'
  | 'orange'
  | 'aqua'

export default LightTheme
