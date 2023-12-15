import React, { useState, useMemo, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
//Words stack
import HomeScreen from './screens/home.screen'
import KanjiDetailScreen from './screens/kanjiDetails.screen'
import AllKanji from './screens/allKanji.screen'
import KanjiTemplateScreen from './screens/kanjiTemplate.screen'

//Quiz Screens
import { QuizScreen } from './screens/quiz.screen'
import QuizSettings from './screens/quizSettings.screen'
import { QuizEngine } from './screens/quizEngine.screen'
import { SRS_HOME } from './screens/srsHome.screen'

//signup stack
import LandingScreen from './screens/landing.screen'
import SignUpScreen from './screens/signUp.screen'

//utils
import AuthContext from './contexts/authContext'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="KanjiDetail" component={KanjiDetailScreen} />
      <Stack.Screen name="AllKanji" component={AllKanji} />
      <Stack.Screen
        name="KanjiTemplate"
        component={KanjiTemplateScreen}
        options={({ route }) => ({ headerTitle: route.params.title })}
      />
    </Stack.Navigator>
  )
}

function QuizStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'khaki' }
      }}>
      <Stack.Screen name="QuizHome" component={QuizScreen} />
      <Stack.Screen name="QuizSettings" component={QuizSettings} />
      <Stack.Screen name="QuizEngine" component={QuizEngine} />
      <Stack.Screen name="SRS_Home" component={SRS_HOME} />
    </Stack.Navigator>
  )
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  )
}

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'dimgray',
        tabBarIcon: ({ color }) => {
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
            case 'Quiz':
              iconName = 'book'
              break
            default:
          }
          // You can return any component that you like here!
          return <Icon name={iconName} type={'ionicon'} size={26} color={color} />
        }
      })}>
      <Tab.Screen name="Words" component={HomeStack} />
      <Tab.Screen name="Quiz" component={QuizStack} />
    </Tab.Navigator>
  )
}

export default function Navigator() {
  const [loading, setIsLoading] = useState(false)
  const [auth, setAuth] = useState({
    loggedIn: false,
    passed: false,
    username: null
  })

  const authValue = useMemo(() => ({ auth, setAuth }), [auth, setAuth])

  const LoadingInd = () => {
    return <ActivityIndicator size="large" color="#1592E6" />
  }

  async function fetchUsers() {
    setIsLoading(true)
    const passed = await AsyncStorage.getItem('@passed')
    const username = await AsyncStorage.getItem('@username')
    const userid = await AsyncStorage.getItem('@userid')
    const token = await AsyncStorage.getItem('@token')
    const avatar = await AsyncStorage.getItem('@avatar')
    const verified = await AsyncStorage.getItem('@verified')
    const email = await AsyncStorage.getItem('@email')
    const password = await AsyncStorage.getItem('@password')

    userInfo = {
      passed,
      username,
      userid,
      token,
      avatar,
      verified,
      email,
      password
    }

    setAuth(userInfo)
    setIsLoading(false)
    return userInfo
  }

  useEffect(() => {
    ;(async function fetchData() {
      await fetchUsers()
    })()
  }, [])

  return (
    <AuthContext.Provider value={authValue}>
      {loading ? <LoadingInd /> : auth.passed ? <TabNav /> : <AuthStack />}
    </AuthContext.Provider>
  )
}
