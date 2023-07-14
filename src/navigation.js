import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from './screens/home.screen'
import KanjiDetailScreen from './screens/kanjiDetails.screen'
import JlptKanjiScreen from './screens/jlptKanji.screen'

export default function Navigator() {
  const Stack = createNativeStackNavigator()
  const Tab = createBottomTabNavigator()

  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="KanjiDetail" component={KanjiDetailScreen} />
        <Stack.Screen name="JlptKanji" component={JlptKanjiScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Tools" component={HomeStack} />
        <Tab.Screen name="KanjiDetail" component={KanjiDetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
