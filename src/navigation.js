import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Icon } from 'react-native-elements'

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'silver',
          tabBarIcon: ({ focused, color, size = 22 }) => {
            let iconName
            switch (route.name) {
              case 'Words':
                iconName = 'file-tray-full'
                break
              default:
            }
            // You can return any component that you like here!
            return (
              <Icon name={iconName} type={'ionicon'} size={26} colo r={color} />
            )
          }
        })}>
        <Tab.Screen name="Words" component={HomeStack} />
        <Tab.Screen name="KanjiDetail" component={KanjiDetailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
