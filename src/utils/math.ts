export const gaussRound = (number: number, decimalPlaces: number) => {
  const d = decimalPlaces || 0
  const m = Math.pow(10, d)
  const n = +(d ? number * m : number).toFixed(8)
  const i = Math.floor(n)
  const f = n - i
  const e = 1e-8
  const r =
    f > 0.5 - e && f < 0.5 + e ? (i % 2 === 0 ? i : i + 1) : Math.round(n)

  return d ? r / m : r
}

export const convertPercentToNumber = (
  total: number,
  percent: number,
  decimalPlaces = 0,
) => {
  const number = (total * percent) / 100

  return gaussRound(number, decimalPlaces)
}
export const convertNumberToPercent = (
  total: number,
  number: number,
  decimalPlaces = 0,
) => {
  const percent = (total * number) / 100

  return gaussRound(percent, decimalPlaces)
}
