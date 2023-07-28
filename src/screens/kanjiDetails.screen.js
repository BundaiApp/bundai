import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView
} from 'react-native'

export default function KanjiDetail({ navigation: { navigate }, route }) {
  const { kanjiName, meanings, kun, on } = route.params.paramsData

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{kanjiName}</Text>
      {meanings.map(item => (
        <Text style={styles.text}>{item}</Text>
      ))}

      <Text style={styles.text}> ####### Kunyomi ###########</Text>
      {on.map(item => (
        <Text style={styles.text}>{item}</Text>
      ))}

      <Text style={styles.text}> ######## Onyomi ##########</Text>
      {kun.map(item => (
        <Text style={styles.text}>{item}</Text>
      ))}
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
