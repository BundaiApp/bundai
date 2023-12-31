import React from 'react'
import { AppRegistry, Platform, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
//apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Nav from './src/navigation'
import { name as appName } from './app.json'

//main app
function App() {
  const host =
    Platform.OS === 'ios' ? 'http://localhost:3000/graphql' : 'http://10.0.2.2:3000/graphql'

  const client = new ApolloClient({
    //uri: host,
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache({
      dataIdFromObject: (o) => o.id
    })
  })

  return (
    <ApolloProvider client={client}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          <Nav />
        </NavigationContainer>
      </GestureHandlerRootView>
    </ApolloProvider>
  )
}

AppRegistry.registerComponent(appName, () => App)

LogBox.ignoreAllLogs(true)
