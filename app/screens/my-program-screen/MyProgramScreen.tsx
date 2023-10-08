import React from 'react'
import {ScrollView, View} from 'react-native'
import {Header} from 'app/components/Header'
import schedule from 'app/api/schedule'
import {TalkSection} from 'app/components/TalkSection'
import {useRecoilValue} from 'recoil'
import {myProgramTitlesAtom} from 'app/recoil-state/my-program'

export function MyProgramScreen() {
  const allTalks = schedule
  const myProgramTitles = useRecoilValue(myProgramTitlesAtom)

  const myProgramTalks = allTalks.filter(talk =>
    myProgramTitles.includes(talk.title),
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
