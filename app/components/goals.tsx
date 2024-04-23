import {NavigationContainer} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from 'app/App'
import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  Button,
} from 'react-native'

type GoalsProps = {
  workoutsGoal: string
  setWorkoutsGoal: (goal: string) => void
  runGoal: string
  setRunGoal: (goal: string) => void
  navigation: NativeStackNavigationProp<RootStackParamList>
}

function Goals(props: GoalsProps): JSX.Element {
  console.log('hellooooooo')

  const {workoutsGoal, setWorkoutsGoal, runGoal, setRunGoal, navigation} = props

  const next = () => {
    navigation.navigate('InfoScreen')
  }
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View>
        <Text style={styles.title}>Mål</Text>
        <Text>Sett dine mål her</Text>
        <View>
          <Text>Ukentlige treningsøkter</Text>
          <TextInput
            style={styles.input}
            //keyboardType="numeric"
            value={runGoal}
            onChangeText={setRunGoal}></TextInput>
        </View>
        <View>
          <Text>Løpeøkter på ett år</Text>
          <TextInput
            style={styles.input}
            //keyboardType="numeric"
            value={workoutsGoal}
            onChangeText={setWorkoutsGoal}></TextInput>
        </View>
        <Button title="Gå videre" onPress={next} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    margin: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 80,
    padding: 5,
  },
})

export default Goals
