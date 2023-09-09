import {Button} from 'app/components/Button'
import React from 'react'
import {Linking, Text, TextStyle} from 'react-native'

type Props = {
  children: string
  url: string
  style?: TextStyle
}

export function Link({children, url, style}: Props) {
  function handlePress() {
    Linking.openURL(url)
  }

  return (
    <Button onPress={handlePress}>
      <Text style={[{textDecorationLine: 'underline'}, style]}>{children}</Text>
    </Button>
  )
}
