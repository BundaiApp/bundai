import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native'

export default function KanjiDetail({ navigation: { navigate }, route }) {
  const { kanjiName, meanings, readings_kun, readings_on } =
    route.params.paramsData

  useEffect(() => {
    console.log(route.params.paramsData)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.headerHolder}>
        <Text style={styles.header}>{kanjiName}</Text>
        {meanings.map(item => (
          <Text style={styles.text}>{item}</Text>
        ))}

        <Text style={styles.text}> ####### Kunyomi ###########</Text>
        {readings_kun.map(item => (
          <Text style={styles.text}>{item}</Text>
        ))}

        <Text style={styles.text}> ######## Onyomi ##########</Text>
        {readings_on.map(item => (
          <Text style={styles.text}>{item}</Text>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '2%',
    paddingHorizontal: '5%'
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20
  },
  headerHolder: {
    alignItems: 'flex-start',
    width: '90%'
  },
  text: {
    fontWeight: '400',
    fontSize: 20
  }
})
