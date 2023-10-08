import {Talk} from 'app/api/schedule'
import {SavableTalkSection} from 'app/screens/program-screen/components/SavableTalkSection'
import {TimeHeading} from 'app/screens/program-screen/components/TimeHeading'
import React from 'react'
import {View} from 'react-native'

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
    <View style={{marginTop: 30}}>
      <TimeHeading style={{marginBottom: 20}}>{`kl. ${timeSlot}`}</TimeHeading>
      {filteredTalks.map(talk => (
        <SavableTalkSection
          key={talk.title}
          talk={talk}
          updateMyProgramTitles={updateMyProgramTitles}
          myProgramTitles={myProgramTitles}
        />
      ))}
    </View>
  )
}
