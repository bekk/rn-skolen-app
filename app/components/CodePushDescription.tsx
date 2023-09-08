import React from 'react'
import {Text, View} from 'react-native'
import {useCodePushDescription} from '../Utils'

export function CodePushDescription() {
  const codePushDescription = useCodePushDescription()

  return (
    <View
      style={{
        position: 'absolute',
        top: 5,
        right: 10,
        elevation: 1,
        zIndex: 1,
      }}>
      <Text>{codePushDescription}</Text>
    </View>
  )
}
