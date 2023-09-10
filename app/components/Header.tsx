import React from 'react'
import {Image} from 'react-native'

export function Header() {
  return (
    <Image
      source={require('../images/RebellerBilde.png')}
      style={{width: '100%', height: 150}}
    />
  )
}
