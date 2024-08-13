import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

const Game = () => {
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Text style={styles.text}>Game</Text>
      </View>
      <View style={styles.secondContainer}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  box: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Game
