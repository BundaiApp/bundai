import React, { useState, useMemo, useEffect, useContext, useCallback } from 'react'
import { ActivityIndicator } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery } from '@apollo/client'
import { useFocusEffect } from '@react-navigation/native'

//Words stack
import HomeScreen from './screens/home.screen'
import KanjiDetailScreen from './screens/kanjiDetails.screen'
import AllKanji from './screens/allKanji.screen'
import KanjiTemplateScreen from './screens/kanjiTemplate.screen'

//Quiz Screens
import { QuizHome } from './screens/quizHome.screen'
import QuizSettings from './screens/quizSettings.screen'
import { QuizEngine } from './screens/quizEngine.screen'
import { SRS_Engine } from './screens/srsEngine.screen'

//signup stack
import LandingScreen from './screens/landing.screen'
import SignUpScreen from './screens/signUp.screen'
import LoginScreen from './screens/logIn.screen'

//settings screen
import SettingScreen from './screens/settings.screen'
//Similar screen
import SimilarScreen from './screens/similars.screen'
import SimilarDetailScreen from './screens/similarDetail.screen'
//TestScreen
import TestScreen from './screens/test.screen.js'
//utils
import AuthContext from './contexts/authContext'

//query
import FIND_PENDING_FLASHCARDS from './queries/findPendingCards.query'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'khaki' },
        headerBackTitleVisible: false,
        headerTintColor: 'black'
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerStyle: { backgroundColor: 'papayawhip' } }}
      />
      <Stack.Screen
        name="KanjiDetail"
        component={KanjiDetailScreen}
        options={() => ({ headerTitle: ' ' })}
      />
      <Stack.Screen
        name="AllKanji"
        component={AllKanji}
        options={({ route }) => ({ headerTitle: route.params.title })}
      />
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
        headerStyle: { backgroundColor: 'khaki' },
        headerBackTitleVisible: false,
        headerTintColor: 'black'
      }}>
      <Stack.Screen name="QuizHome" component={QuizHome} options={{ headerShown: false }} />
      <Stack.Screen
        name="QuizSettings"
        component={QuizSettings}
        options={() => ({ headerTitle: 'Quiz Settings' })}
      />
      <Stack.Screen name="QuizEngine" component={QuizEngine} options={{ headerShown: false }} />
      <Stack.Screen name="SRSEngine" component={SRS_Engine} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'thistle' },
        headerBackTitleVisible: false,
        headerTintColor: 'black'
      }}>
      <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={() => ({ headerTitle: 'Sign Up' })}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={() => ({ headerTitle: 'Log In' })}
      />
    </Stack.Navigator>
  )
}

function SimilarStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'thistle' },
        headerBackTitleVisible: false,
        headerTintColor: 'black'
      }}>
      <Stack.Screen
        name="SimilarList"
        component={SimilarScreen}
        options={() => ({ headerTitle: 'Similar Kanjis' })}
      />
      <Stack.Screen
        name="SimilarDetail"
        component={SimilarDetailScreen}
        options={({ route }) => ({ headerTitle: route.params.kanji })}
      />
    </Stack.Navigator>
  )
}

function TabNav() {
  //context
  const { auth } = useContext(AuthContext)

  const { data, loading, refetch } = useQuery(FIND_PENDING_FLASHCARDS, {
    variables: {
      userId: auth.userId
    }
  })

  useFocusEffect(
    useCallback(() => {
      ;(async function fetch() {
        await refetch()
      })()
    }, [])
  )

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
            case 'Similars':
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
            case 'Settings':
              iconName = 'cog'
              break
            default:
              iconName = 'book'
          }
          // You can return any component that you like here!
          return <Icon name={iconName} type={'ionicon'} size={26} color={color} />
        }
      })}>
      <Tab.Screen name="Words" component={HomeStack} />
      <Tab.Screen
        name="Quiz"
        component={QuizStack}
        options={{
          tabBarBadge: loading ? (
            <ActivityIndicator size="small" color="green" />
          ) : data?.getPendingFlashCards?.length === 0 ? null : (
            data?.getPendingFlashCards?.length
          )
        }}
      />
      <Tab.Screen name="Similars" component={SimilarStack} />
      <Tab.Screen name="Settings" component={SettingScreen} />
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
    const userId = await AsyncStorage.getItem('@userId')
    const token = await AsyncStorage.getItem('@token')
    const avatar = await AsyncStorage.getItem('@avatar')
    const verified = await AsyncStorage.getItem('@verified')
    const email = await AsyncStorage.getItem('@email')
    const password = await AsyncStorage.getItem('@password')

    userInfo = {
      passed,
      username,
      userId,
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
