import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface Props {
  size: number
  color?: string
}

export function StarIcon({size, color = 'black'}: Props) {
  return (
    <Svg viewBox="0 0 512 512" width={size} height={size}>
      <Path
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </Svg>
  )
}
