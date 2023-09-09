import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface Props {
  size: number
}

export function InfoIcon({size}: Props) {
  return (
    <Svg viewBox="0 0 512 512" width={size} height={size}>
      <Path
        d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"
        fill="none"
        stroke="black"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <Path
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M220 220h32v116"
      />
      <Path
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M208 340h88"
      />
      <Path d="M248 130a26 26 0 1 0 26 26 26 26 0 0 0-26-26z" />
    </Svg>
  )
}
