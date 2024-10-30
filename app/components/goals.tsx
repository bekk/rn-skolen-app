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
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity
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
  const save = () => {

  }

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.content}>
        <View style={styles.description}>
          <Text style={styles.title}>Mål</Text>
          <Text style={styles.text1}>Sett dine mål her</Text>
        </View>
        <View style={styles.inputAndText}>
          <Text style={styles.text2}>Ukentlige treningsøkter</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={runGoal}
            onChangeText={setRunGoal}></TextInput>
        </View>
    
        <View style={styles.inputAndText}>
          <Text style={styles.text2}>Løpeøkter på ett år</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            collapsable={true}
            value={workoutsGoal}
            onChangeText={setWorkoutsGoal}></TextInput>
        </View>
        <TouchableOpacity onPress={save} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Lagre</Text>
        </TouchableOpacity>
        {/*<Button title="Gå videre" onPress={next} />*/}
      </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#171717',
    flex: 1,
  },
  content: {
    margin: 20,
    flex: 1
  },
  description: {
    marginBottom:20
  },
  saveButton: {
    marginTop: 20,
    elevation: 8,
    backgroundColor: "#fefefe",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  saveButtonText: {
    fontSize: 18,
    color: "#171717",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
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
  inputAndText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  input: {
    borderRadius: 10,
    fontSize: 18,
    color: 'white',
    backgroundColor: '#262626',
    width: 80,
    padding: 5,
    textAlign: 'center'
  },
})

export default Goals
