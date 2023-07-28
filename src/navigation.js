import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Icon } from 'react-native-elements'

import HomeScreen from './screens/home.screen'
import KanjiDetailScreen from './screens/kanjiDetails.screen'
import KanjiScreen from './screens/kanji.screen'
import ExamScreen from './screens/exam.screen'
import KanjiTemplateScreen from './screens/kanjiTemplate.screen'

export default function Navigator() {
  const Stack = createStackNavigator()
  const Tab = createBottomTabNavigator()

  function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="KanjiDetail" component={KanjiDetailScreen} />
        <Stack.Screen name="JlptKanji" component={KanjiScreen} />
        <Stack.Screen name="KanjiTemplate" component={KanjiTemplateScreen} />
      </Stack.Navigator>
    )
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,

          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'dimgray',
          tabBarIcon: ({ focused, color, size = 22 }) => {
            let iconName
            switch (route.name) {
              case 'Words':
                iconName = 'file-tray-full'
                break
              case 'Exam':
                iconName = 'document-sharp'
                break
              case 'Game':
                iconName = 'game-controller'
                break
              case 'Talk':
                iconName = 'mic-circle'
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
        <Tab.Screen name="Exam" component={ExamScreen} />
        <Tab.Screen name="Game" component={ExamScreen} />
        <Tab.Screen name="Talk" component={ExamScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
