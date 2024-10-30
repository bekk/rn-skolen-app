import ExpandableBox from 'app/components/ExpandableBox'
import Goals from 'app/components/goals'
import React, {useEffect, useState} from 'react'
import {TouchableOpacity, View} from 'react-native'
import {StyleSheet, SafeAreaView, StatusBar, Button, Text} from 'react-native'
import DocumentPicker, {
  DocumentPickerResponse,
  types,
} from 'react-native-document-picker'

type ExerciseObject = {
  exerciseName: string
  setOrder: number
  weight: number
  reps: number
  distance: number
  seconds: number
  notes: string
}

type WorkoutObject = {
  date: Date
  name: string
  duration: string
  exercises: ExerciseObject[]
  workoutNotes: string
  rpe: string
  isARun: boolean
}

type RunObject = {
  kilometers: number
  time: number
  year: number
}

type WorkoutYearObject = {
  workouts: WorkoutObject[]
  amountOfWorkouts: number
  weeklyAverage: number
  year: number
  runs?: RunObject[]
}

const getRunsByYear = (year: number, resultListOfRuns: RunObject[]) => {
  const runs = resultListOfRuns.filter(run => run.year === year)
  return runs
}

function getWeekNumber() {
  var today = new Date()
  var dayNum = today.getUTCDay() || 7
  today.setUTCDate(today.getUTCDate() + 4 - dayNum)
  var yearStart = new Date(Date.UTC(today.getUTCFullYear(), 0, 1))
  return Math.ceil(((today.valueOf() - yearStart.valueOf()) / 86400000 + 1) / 7)
}

const formatData = async (s: DocumentPickerResponse) => {
  const r = await fetch(s.uri)
  const text = await r.text()
  const lines = text.split('\n')
  const _data = lines.map(line => line.split(','))
  const listOfWorkouts: Map<string, WorkoutObject> = new Map()
  const listOfRuns: Map<string, RunObject> = new Map()

  _data.forEach((d, i) => {
    if (i > 0) {
      if (d[0] !== '') {
        let current_workout_date = new Date(d[0])
        if (!Number.isNaN(current_workout_date)) {
          const workoutId = current_workout_date.toISOString()

          if (listOfWorkouts.has(workoutId)) {
            const workout = listOfWorkouts.get(workoutId)
            if (workout) {
              workout.exercises.push({
                exerciseName: d[3],
                setOrder: parseInt(d[4], 10),
                weight: parseInt(d[5], 10),
                reps: parseInt(d[6], 10),
                distance: parseInt(d[7], 10),
                seconds: parseInt(d[8], 10),
                notes: d[9],
              })
            }
          } else {
            const newWorkout: WorkoutObject = {
              date: new Date(d[0]),
              name: d[1],
              duration: d[2],
              exercises: [
                {
                  exerciseName: d[3],
                  setOrder: parseInt(d[4], 10),
                  weight: parseInt(d[5], 10),
                  reps: parseInt(d[6], 10),
                  distance: parseInt(d[7], 10),
                  seconds: parseInt(d[8], 10),
                  notes: d[9],
                },
              ],
              workoutNotes: d[10],
              rpe: d[11],
              isARun: false,
            }

            var runningExercice = newWorkout.exercises.find(e =>
              e.exerciseName.toLocaleLowerCase().includes('running'),
            )
            if (runningExercice != null && runningExercice.distance >= 10) {
              newWorkout.isARun = true
              const newRun: RunObject = {
                kilometers: runningExercice.distance,
                time: runningExercice.seconds,
                year: newWorkout.date.getFullYear(),
              }
              listOfRuns.set(workoutId, newRun)
            }

            listOfWorkouts.set(workoutId, newWorkout)
          }
        }
      }
    }
  })

  const resultListOfWorkouts = Array.from(listOfWorkouts.values())
  const yearsWithWorkouts: Map<number, WorkoutYearObject> = new Map()
  resultListOfWorkouts.forEach(workout => {
    const year = workout.date.getFullYear()
    if (yearsWithWorkouts.has(year)) {
      yearsWithWorkouts.get(year)?.workouts.push(workout)
    } else {
      yearsWithWorkouts.set(year, {
        workouts: [workout],
        amountOfWorkouts: 0,
        weeklyAverage: 0,
        year: year,
      })
    }
  })

  const currentWeek = getWeekNumber()
  const currentYear = new Date().getFullYear()

  yearsWithWorkouts.forEach(w => {
    w.amountOfWorkouts = w.workouts.length
    w.runs = getRunsByYear(w.year, Array.from(listOfRuns.values()))

    if (w.year === currentYear) {
      w.weeklyAverage = w.amountOfWorkouts / currentWeek
    } else {
      w.weeklyAverage = w.amountOfWorkouts / 52
    }
  })
  return yearsWithWorkouts
}

async function readAndFormatData(): Promise<Map<
  number,
  WorkoutYearObject
> | null> {
  try {
    const response = await DocumentPicker.pick({
      presentationStyle: 'fullScreen',
      type: [types.csv],
    })

    const document = response[0]
    const formattedDocument = await formatData(document)
    return formattedDocument
  } catch (err) {
    console.warn(err)
  }
  return null
}

type Props = {
  workout: Map<number, WorkoutYearObject> | null | undefined
}

type WorkoutYearProp = {
  workout: WorkoutYearObject
}

const WorkoutObject = (props: WorkoutYearProp) => {

  return (
    <View>
      <Text>Antall økter: {props.workout.amountOfWorkouts}</Text>
      <Text>
        Ukentlig gjennomsnitt: {Math.round(props.workout.weeklyAverage * 100) / 100}{' '}
      </Text>
      <Text>Løpeturer på mer enn 10km: {props.workout.runs?.length || 0}</Text>
    </View>
  )
}

function Workouts({workout}: Props): JSX.Element {
  const listOfWorkouts: WorkoutYearObject[] = []
  workout?.forEach(w =>
    listOfWorkouts.push({
      year: w.year,
      amountOfWorkouts: w.amountOfWorkouts,
      workouts: w.workouts,
      weeklyAverage: w.weeklyAverage,
      runs: w.runs,
    }),
  )
  return (
    <View style={styles.listOfWorkouts}>
      {listOfWorkouts.map((w, i) => {
        return (
          <View style={{marginTop:10*i}} key={i}>
            <ExpandableBox index={i} title={w.year.toString()}>
                <WorkoutObject workout={w} />
            </ExpandableBox>
          </View>
        )
      })}
    </View>
  )
}

const workoutStyles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.6,
    shadowRadius: 2,
    elevation: 5,
  },
  yearTitle: {
    fontSize: 18,
  },
})

function InfoScreen(): JSX.Element {
  const [response, setResponse] = useState<Map<
    number,
    WorkoutYearObject
  > | null>()

  const [statistics, setStatistics] = useState(false)

  const handleDocumentSelection = async () => {
    const formattedData = await readAndFormatData()
    setResponse(formattedData)
    if (formattedData && formattedData?.size > 0) {
      setStatistics(true)
    }
  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.content}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.description}>
          <Text style={styles.title}>Stronger</Text>
          <Text style={styles.text1}>Mer data fra treningen din 💪</Text>
          <Text style={styles.text1}>Uke {getWeekNumber()}</Text>
        </View>

      {statistics ? (
        <View>
          <Workouts workout={response} />
          <Button title="New data" onPress={handleDocumentSelection} />
        </View>
      ) : (
        <Button title="Upload CSV 📑" onPress={handleDocumentSelection} />
      )}
      </View>
    </SafeAreaView>
  )
}

export default InfoScreen

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#171717',
    flex: 1,
  },
  listOfWorkouts: {
    flex: 1,
    flexDirection: 'column',
  },
  content: {
    margin: 20,
    flex: 1
  },
  description: {
    marginBottom:20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  text1: {
    color: 'white',
    fontSize: 14
  },
  text2: {
    color: 'white',
    fontSize: 18
  },
})
