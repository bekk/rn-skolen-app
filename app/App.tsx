import React from 'react'
import {ScrollView} from 'react-native'
import {Header} from './components/Header'
import {InfoContent} from './screens/InfoContent'
import {CodePushDescription} from 'app/components/CodePushDescription'

export function App(): JSX.Element {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'rgb(30, 30, 30)'}}
      contentContainerStyle={{paddingBottom: 40}}>
      <Header />
      <CodePushDescription />
      <InfoContent />
    </ScrollView>
  )
}
