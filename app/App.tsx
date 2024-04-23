import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import InfoScreen from './screens/InfoScreen'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {StyleSheet} from 'react-native'

export type RootStackParamList = {
  InfoScreen: undefined
}

function App(): JSX.Element {
  const Tab = createBottomTabNavigator()

  return (
    <SafeAreaProvider style={styles.sectionContainer}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Info" component={InfoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
})

export default App
