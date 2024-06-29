import React from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <ScrollView horizontal>
          {new Array(24).fill(1).map((i, index) => (
            <View style={styles.box}>
              <Text>Box {index}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.secondContainer}>
        <ScrollView horizontal>
          {new Array(24).fill(1).map((i, index) => (
            <View style={styles.box}>
              <Text>Box {index}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  secondContainer: {
    flex: 1
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

export default App
