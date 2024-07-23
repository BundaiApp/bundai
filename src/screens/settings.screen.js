import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage } from 'react-native-flash-message'
//utils
import AuthContext from '../contexts/authContext'
import ProvideData from '../util/jlptArray'

export default function SettingScreen() {
  //context
  const { setAuth } = useContext(AuthContext)
  const [level, setLevel] = useState(1)
  const [jlptArrayNumber, setJlptNumber] = useState(0)
  const [arr, setArr] = useState([])

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

  async function con() {
    values = await AsyncStorage.multiGet([
      '@verified',
      '@passed',
      '@email',
      '@username',
      '@token',
      '@userId'
    ])
    console.log(values)
  }

  async function callError() {
    showMessage({
      message: 'Simple message',
      type: 'info'
    })
  }

  function fetchData(levelData) {
    let data = ProvideData('jlpt', levelData)
    setLevel(level)
    setJlptNumber(data.length)
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => logout()}>
        <Text style={styles.text}>Log out</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => con()}>
        <Text style={styles.text}>Console</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => callError()}>
        <Text style={styles.text}>test notification</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => fetchData(1)}>
        <Text style={styles.text}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => fetchData(2)}>
        <Text style={styles.text}>2</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => fetchData(3)}>
        <Text style={styles.text}>3</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => fetchData(4)}>
        <Text style={styles.text}>4</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => fetchData(5)}>
        <Text style={styles.text}>5</Text>
      </TouchableOpacity>

      <Text style={styles.jlptLevel}> {jlptArrayNumber}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightyellow'
  },
  jlptLevel: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'green'
  }
})
