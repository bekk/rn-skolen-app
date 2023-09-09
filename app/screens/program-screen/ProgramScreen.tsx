import React, {useState} from 'react'
import {ScrollView, View} from 'react-native'
import {Header} from 'app/components/Header'
import {
  Filter,
  TypeFilter,
} from 'app/screens/program-screen/components/TypeFilter'
import schedule from 'app/api/schedule'
import {ScheduleSection} from 'app/screens/program-screen/components/ScheduleSection'

export function ProgramScreen() {
  const [selectedFilter, setSelectedFilter] = useState<Filter>('Alle')

  const filteredTalks = schedule.filter(talk =>
    selectedFilter === 'Alle' ? true : talk.type === selectedFilter,
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
        <TypeFilter
          onSelect={setSelectedFilter}
          selectedFilter={selectedFilter}
        />
        <ScheduleSection timeSlot={'09:15'} talks={filteredTalks} />
        <ScheduleSection timeSlot={'09:40'} talks={filteredTalks} />
        <ScheduleSection timeSlot={'09:50'} talks={filteredTalks} />
        <ScheduleSection timeSlot={'10:45'} talks={filteredTalks} />
        <ScheduleSection timeSlot={'11:20'} talks={filteredTalks} />
        <ScheduleSection timeSlot={'12:50'} talks={filteredTalks} />
        <ScheduleSection timeSlot={'13:45'} talks={filteredTalks} />
        <ScheduleSection timeSlot={'14:25'} talks={filteredTalks} />
        <ScheduleSection timeSlot={'15:20'} talks={filteredTalks} />
        <ScheduleSection timeSlot={'15:55'} talks={filteredTalks} />
      </View>
    </ScrollView>
  )
}
