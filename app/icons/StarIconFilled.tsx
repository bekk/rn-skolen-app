import React from 'react'
import Svg, {Path} from 'react-native-svg'
import {StyleProp, ViewStyle} from 'react-native/types'

interface Props {
  size: number
  color?: string
  style?: StyleProp<ViewStyle>
}

export function StarIconFilled({size, color = 'black', style}: Props) {
  return (
    <Svg viewBox="0 0 512 512" width={size} height={size} style={style}>
      <Path
        fill={color}
        d="M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z"
      />
    </Svg>
  )
}
