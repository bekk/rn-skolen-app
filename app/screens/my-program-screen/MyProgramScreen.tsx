import React, {useCallback, useState} from 'react'
import {ScrollView, View} from 'react-native'
import {Header} from 'app/components/Header'
import {useFocusEffect} from '@react-navigation/native'
import {getStoredMyProgramTitles} from 'app/async-storage'
import schedule from 'app/api/schedule'
import {TalkSection} from 'app/components/TalkSection'

export function MyProgramScreen() {
  const allTalks = schedule
  const [myProgramTitles, setMyProgramTitles] = useState<string[]>([])

  const myProgramTalks = allTalks.filter(talk =>
    myProgramTitles.includes(talk.title),
  )

  useFocusEffect(
    useCallback(() => {
      async function setMyProgramStateToStoredState() {
        const storedTitles = await getStoredMyProgramTitles()
        setMyProgramTitles(storedTitles)
      }
      setMyProgramStateToStoredState()
    }, []),
  )

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'rgb(30, 30, 30)'}}
      contentContainerStyle={{paddingBottom: 40}}>
      <Header />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          paddingVertical: 20,
        }}>
        {myProgramTalks.map((talk, index) => (
          <TalkSection key={index} talk={talk} />
        ))}
      </View>
    </ScrollView>
  )
}
