import React from 'react'
import { ScrollView, SafeAreaView, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'
//utils
import { FONTS } from '../components/fonts'

export default function Test() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerOne} />
      <ScrollView horizontal style={styles.containerTwo}>
        {new Array(24).fill(1).map((i, index) => (
          <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.containerThree} />
      <View style={styles.containerFour} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'palegoldenrod',
    flexDirection: 'column'
  },
  containerOne: {
    flex: 1,
    backgroundColor: 'pink'
  },
  containerTwo: {
    flex: 1,
    backgroundColor: 'orange'
  },
  containerThree: {
    flex: 2,
    backgroundColor: 'green'
  },
  containerFour: {
    flex: 1,
    backgroundColor: 'hotpink'
  },

  button: {
    width: '30%',
    height: '30%',
    backgroundColor: 'pink',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
