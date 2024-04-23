import {NativeStackScreenProps} from '@react-navigation/native-stack'
import {RootStackParamList} from 'app/App'
import Goals from 'app/components/goals'
import React, {useEffect, useState} from 'react'

export type GoalsScreenProps = NativeStackScreenProps<RootStackParamList>

function GoalsScreen({navigation}: GoalsScreenProps): JSX.Element {
  const [workoutsGoal, setWorkoutGoal] = useState('')
  const [runGoal, setRunGoal] = useState('')

  return (
    <Goals
      workoutsGoal={workoutsGoal}
      setWorkoutsGoal={setWorkoutGoal}
      setRunGoal={setRunGoal}
      runGoal={runGoal}
      navigation={navigation}
    />
  )
}

export default GoalsScreen
