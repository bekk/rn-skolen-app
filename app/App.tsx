import React from 'react'
import {InfoScreen} from './screens/info-screen/InfoScreen'
import {NavigationContainer} from '@react-navigation/native'
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import {ProgramScreen} from 'app/screens/program-screen/ProgramScreen'
import {InfoIcon} from 'app/icons/InfoIcon'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {InfoIconFilled} from 'app/icons/InfoIconFilled'
import {ProgramIconFilled} from 'app/icons/ProgramIconFilled'
import {ProgramIcon} from 'app/icons/ProgramIcon'
import {MyProgramScreen} from 'app/screens/my-program-screen/MyProgramScreen'
import {StarIcon} from 'app/icons/StarIcon'
import {RecoilRoot} from 'recoil'
import {StarIconFilled} from 'app/icons/StarIconFilled'
import {GestureHandlerRootView} from 'react-native-gesture-handler'

const Tab = createBottomTabNavigator()

export function App(): JSX.Element {
  return (
    <RecoilRoot>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <Tab.Navigator screenOptions={getScreenOptions}>
              <Tab.Screen name="Info" component={InfoScreen} />
              <Tab.Screen name="Program" component={ProgramScreen} />
              <Tab.Screen name="Mitt program" component={MyProgramScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </RecoilRoot>
  )
}

function getScreenOptions({route}: any): BottomTabNavigationOptions {
  return {
    tabBarIcon: ({focused}: {focused: boolean}) => {
      return getRouteIcon(route.name, focused)
    },
    tabBarActiveTintColor: 'black',
    tabBarInactiveTintColor: 'black',
    headerShown: false,
    tabBarStyle: {backgroundColor: 'rgb(221, 255, 87)'},
  }
}

function getRouteIcon(routeName: string, focused: boolean) {
  if (routeName === 'Info') {
    if (focused) {
      return <InfoIconFilled size={30} />
    }
    return <InfoIcon size={30} />
  } else if (routeName === 'Program') {
    if (focused) {
      return <ProgramIconFilled size={30} />
    }
    return <ProgramIcon size={30} />
  } else if (routeName === 'Mitt program') {
    if (focused) {
      return <StarIconFilled size={30} />
    }
    return <StarIcon size={30} />
  }
}
