import React from 'react'
import Svg, {Path} from 'react-native-svg'

interface Props {
  size: number
}

export function ArrowRight({size}: Props) {
  return (
    <Svg viewBox="0 0 100 125" width={size} height={size}>
      <Path
        fill="#2b2b2c"
        d="m54.775 66.29 2.828 2.828 19.561-19.56-19.561-19.56-2.828 2.828 14.732 14.732H25v4h44.507z"
      />
    </Svg>
  )
}
