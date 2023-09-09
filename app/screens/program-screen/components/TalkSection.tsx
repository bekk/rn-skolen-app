import {Talk} from 'app/api/schedule'
import React from 'react'
import {Text, View} from 'react-native'

type Props = {
  talk: Talk
}

export function TalkSection({talk}: Props) {
  return (
    <View
      style={{
        borderLeftColor: 'rgb(221, 255, 87)',
        borderLeftWidth: 5,
        paddingLeft: 10,
        marginBottom: 30,
      }}>
      <Text
        style={{
          color: 'darkgrey',
          fontSize: 18,
          marginBottom: 6,
        }}>{`${talk.time} i ${talk.location}`}</Text>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 5,
        }}>
        {talk.title}
      </Text>
      <Text
        style={{
          color: 'darkgrey',
          fontSize: 18,
        }}>
        {talk.speakers}
      </Text>
    </View>
  )
}
