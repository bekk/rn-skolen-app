import React from 'react'
import {Image, View} from 'react-native'

export function Header() {
  return (
    <View style={{backgroundColor: 'white', paddingTop: 40}}>
      <Image
        source={require('../images/RebellerBilde.png')}
        style={{width: '100%', height: 150}}
      />
    </View>
  )
}