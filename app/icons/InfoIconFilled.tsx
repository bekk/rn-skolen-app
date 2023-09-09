import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface Props {
  size: number
}

export function InfoIconFilled({size}: Props) {
  return (
    <Svg viewBox="0 0 512 512" width={size} height={size}>
      <Path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 1 1-26 26 26 26 0 0 1 26-26zm48 226h-88a16 16 0 0 1 0-32h28v-88h-16a16 16 0 0 1 0-32h32a16 16 0 0 1 16 16v104h28a16 16 0 0 1 0 32z" />
    </Svg>
  )
}
