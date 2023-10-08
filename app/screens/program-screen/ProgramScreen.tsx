import React, {useCallback, useState} from 'react'
import {ScrollView, View} from 'react-native'
import {Header} from 'app/components/Header'
import {
  Filter,
  TypeFilter,
} from 'app/screens/program-screen/components/TypeFilter'
import schedule from 'app/api/schedule'
import {ScheduleSection} from 'app/screens/program-screen/components/ScheduleSection'
import {getStoredMyProgramTitles, updateMyPogramTitles} from 'app/async-storage'
import {useFocusEffect} from '@react-navigation/native'

export function ProgramScreen() {
  const [selectedFilter, setSelectedFilter] = useState<Filter>('Alle')
  const [myProgramTitles, setMyProgramTitles] = useState<string[]>([])

  const filteredTalks = schedule.filter(talk =>
    selectedFilter === 'Alle' ? true : talk.type === selectedFilter,
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

  function updateMyProgramTitles(currentTitle: string) {
    updateMyPogramTitles(currentTitle)
    setMyProgramTitles(prev => {
      if (prev.includes(currentTitle)) {
        return prev.filter(title => title !== currentTitle)
      }
      return [currentTitle, ...prev]
    })
  }

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
        <ScheduleSection
          timeSlot={'09:15'}
          talks={filteredTalks}
          updateMyProgramTitles={updateMyProgramTitles}
          myProgramTitles={myProgramTitles}
        />
        <ScheduleSection
          timeSlot={'09:40'}
          talks={filteredTalks}
          updateMyProgramTitles={updateMyProgramTitles}
          myProgramTitles={myProgramTitles}
        />
        <ScheduleSection
          timeSlot={'09:50'}
          talks={filteredTalks}
          updateMyProgramTitles={updateMyProgramTitles}
          myProgramTitles={myProgramTitles}
        />
        <ScheduleSection
          timeSlot={'10:45'}
          talks={filteredTalks}
          updateMyProgramTitles={updateMyProgramTitles}
          myProgramTitles={myProgramTitles}
        />
        <ScheduleSection
          timeSlot={'11:20'}
          talks={filteredTalks}
          updateMyProgramTitles={updateMyProgramTitles}
          myProgramTitles={myProgramTitles}
        />
        <ScheduleSection
          timeSlot={'12:50'}
          talks={filteredTalks}
          updateMyProgramTitles={updateMyProgramTitles}
          myProgramTitles={myProgramTitles}
        />
        <ScheduleSection
          timeSlot={'13:45'}
          talks={filteredTalks}
          updateMyProgramTitles={updateMyProgramTitles}
          myProgramTitles={myProgramTitles}
        />
        <ScheduleSection
          timeSlot={'14:25'}
          talks={filteredTalks}
          updateMyProgramTitles={updateMyProgramTitles}
          myProgramTitles={myProgramTitles}
        />
        <ScheduleSection
          timeSlot={'15:20'}
          talks={filteredTalks}
          updateMyProgramTitles={updateMyProgramTitles}
          myProgramTitles={myProgramTitles}
        />
        <ScheduleSection
          timeSlot={'15:55'}
          talks={filteredTalks}
          updateMyProgramTitles={updateMyProgramTitles}
          myProgramTitles={myProgramTitles}
        />
      </View>
    </ScrollView>
  )
}
