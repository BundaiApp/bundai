import React from 'react'
import { AppRegistry, Platform, LogBox } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import FlashMessage from 'react-native-flash-message'
//apollo
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Nav from './src/navigation'
import { name as appName } from './app.json'

//main app
function App() {
  const host =
    Platform.OS === 'ios'
      ? 'http://localhost:3000/graphql'
      : Platform.OS === 'android'
      ? 'http://10.0.2.2:3000/graphql'
      : 'http://localhost:3000/graphql'

  const client = new ApolloClient({
    uri: host,
    cache: new InMemoryCache({
      dataIdFromObject: (o) => o.id
    })
  })

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Nav />
        <FlashMessage position="top" />
      </NavigationContainer>
    </ApolloProvider>
  )
}

AppRegistry.registerComponent(appName, () => App)

LogBox.ignoreAllLogs(true)
