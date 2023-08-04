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
      <Text style={styles.kanji}>{kanjiName}</Text>

      <Text style={styles.header}>Meanings</Text>
      {meanings.map(item => (
        <Text style={styles.text} key={item}>
          {item}
        </Text>
      ))}

      <Text style={styles.text}> Kunyomi Readings</Text>
      {on.map(item => (
        <Text style={styles.text} key={item}>
          {item}
        </Text>
      ))}

      <Text style={styles.text}>Onyomi Readings</Text>
      {kun.map(item => (
        <Text style={styles.text} key={item}>
          {item}
        </Text>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '2%'
  },
  text: {
    fontWeight: '400',
    fontSize: 20
  },
  kanji: {
    fontWeight: '600',
    fontSize: 100,
    alignSelf: 'center'
  },
  header: {
    fontWeight: '400',
    fontSize: 30,
    width: '100%',
    alignSelf: 'flex-start',
    backgroundColor: 'wheat',
    paddingLeft: '5%'
  }
})
