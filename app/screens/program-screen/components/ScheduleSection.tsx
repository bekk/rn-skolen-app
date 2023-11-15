import {Talk} from 'app/api/schedule'
import {SavableTalkSection} from 'app/screens/program-screen/components/SavableTalkSection'
import {TimeHeading} from 'app/screens/program-screen/components/TimeHeading'
import React from 'react'
import Animated, {Layout} from 'react-native-reanimated'

type Props = {
  timeSlot: string
  talks: Talk[]
  updateMyProgramTitles: (title: string) => void
  myProgramTitles: string[]
}

export function ScheduleSection({
  timeSlot,
  talks,
  updateMyProgramTitles,
  myProgramTitles,
}: Props) {
  const filteredTalks = talks.filter(talk => talk.timeKey === timeSlot)
  return (
    <Animated.View style={{marginTop: 30}} layout={Layout}>
      <TimeHeading style={{marginBottom: 20}}>{`kl. ${timeSlot}`}</TimeHeading>
      {filteredTalks.map(talk => (
        <SavableTalkSection
          key={talk.title}
          talk={talk}
          updateMyProgramTitles={updateMyProgramTitles}
          myProgramTitles={myProgramTitles}
        />
      ))}
    </Animated.View>
  )
}
