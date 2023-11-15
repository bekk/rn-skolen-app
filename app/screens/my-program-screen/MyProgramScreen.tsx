import React from 'react'
import {ScrollView, View} from 'react-native'
import {Header} from 'app/components/Header'
import schedule from 'app/api/schedule'
import {useRecoilValue} from 'recoil'
import {myProgramTitlesAtom} from 'app/recoil-state/my-program'
import Animated, {FadeInRight, FadeOut} from 'react-native-reanimated'
import {RemovableTalkSection} from 'app/screens/program-screen/components/RemovableTalkSection'

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
          <Animated.View
            key={index}
            entering={FadeInRight.delay(index * 80)}
            exiting={FadeOut}>
            <RemovableTalkSection talk={talk} />
          </Animated.View>
        ))}
      </View>
    </ScrollView>
  )
}
