import React, { useContext } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
//utils
import AuthContext from '../contexts/authContext'

export default function SettingScreen() {
  //context
  const { setAuth } = useContext(AuthContext)

  async function logout() {
    await setAuth({
      userId: null,
      token: null,
      username: null,
      passed: false,
      verified: false,
      email: null
    })

    await AsyncStorage.multiRemove([
      '@userId',
      '@token',
      '@username',
      '@verified',
      '@passed',
      '@email',
      '@password'
    ])
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => logout()}>
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow'
  }
})
