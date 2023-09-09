import React from 'react'
import {Text, TextStyle} from 'react-native'

type Props = {
  children: string
  style?: TextStyle
}

export function Heading({children, style}: Props) {
  return (
    <Text
      style={[
        {
          color: 'white',
          fontSize: 28,
          fontWeight: 'bold',
        },
        style,
      ]}>
      {children}
    </Text>
  )
}
