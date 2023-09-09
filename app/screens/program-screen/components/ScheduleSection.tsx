import {Talk} from 'app/api/schedule'
import {TalkSection} from 'app/screens/program-screen/components/TalkSection'
import {TimeHeading} from 'app/screens/program-screen/components/TimeHeading'
import React from 'react'
import {View} from 'react-native'

type Props = {
  timeSlot: string
  talks: Talk[]
}

export function ScheduleSection({timeSlot, talks}: Props) {
  const filteredTalks = talks.filter(talk => talk.timeKey === timeSlot)
  return (
    <View style={{marginTop: 30}}>
      <TimeHeading style={{marginBottom: 20}}>{`kl. ${timeSlot}`}</TimeHeading>
      {filteredTalks.map(talk => (
        <TalkSection key={talk.title} talk={talk} />
      ))}
    </View>
  )
}
